import { useReducedMotion as useFramerReducedMotion } from "framer-motion";

/**
 * Returns true if the user prefers reduced motion.
 * Wraps Framer Motion's hook with a fallback for SSR safety.
 */
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false;
}
