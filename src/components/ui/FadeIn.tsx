import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import type { FadeInProps } from "../../types";

const directionMap = {
  up:    { y: 24, x: 0  },
  down:  { y: -24, x: 0  },
  left:  { y: 0,  x: 24 },
  right: { y: 0,  x: -24 },
  none:  { y: 0,  x: 0  },
};

export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
  once = true,
}: FadeInProps) {
  const reduced = useReducedMotion();
  const offset  = directionMap[direction];

  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, ...offset }}
      whileInView={reduced ? {} : { opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
