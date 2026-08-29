import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Subtle floating wireframe geometry field, rendered on a transparent
 * canvas behind page content. Drifts slowly and tilts toward the pointer.
 * Renders nothing (a static frame) when the user prefers reduced motion.
 */
export function WireframeField({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width  = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 13;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ── Shapes: a small cluster of low-poly wireframes in the site palette ──
    const accent = new THREE.Color("#2A6B57");
    const warm   = new THREE.Color("#C05A2A");

    const geometries = [
      new THREE.IcosahedronGeometry(2.1, 0),
      new THREE.OctahedronGeometry(1.5, 0),
      new THREE.TorusGeometry(1.3, 0.35, 8, 24),
    ];

    const meshes = geometries.map((geo, i) => {
      const color = i % 2 === 0 ? accent : warm;
      const mat = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (i - 1) * 3.4 + 2.2,
        i % 2 === 0 ? 1.4 : -1.6,
        -i * 1.5
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(mesh);
      return mesh;
    });

    let raf = 0;
    let pointerX = 0;
    let pointerY = 0;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointerX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointerY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };

    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      meshes.forEach((mesh, i) => {
        const speed = 0.06 + i * 0.015;
        mesh.rotation.x += speed * 0.01;
        mesh.rotation.y += speed * 0.015;
        mesh.position.y += Math.sin(t * 0.3 + i) * 0.0015;
      });

      // Gentle camera parallax toward pointer
      camera.position.x += (pointerX * 0.8 - camera.position.x) * 0.02;
      camera.position.y += (-pointerY * 0.5 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };

    if (!reduced) {
      window.addEventListener("pointermove", onPointerMove);
      animate();
    } else {
      // Render a single static frame, no loop.
      renderer.render(scene, camera);
    }

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      geometries.forEach((g) => g.dispose());
      meshes.forEach((m) => (m.material as THREE.Material).dispose());
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [reduced]);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    />
  );
}
