"use client";

import type { ReactNode, Ref } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.65,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerGroupProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  ref?: Ref<HTMLDivElement>;
};

export function StaggerGroup({ children, ...props }: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : 0.1,
            delayChildren: prefersReducedMotion ? 0 : 0.08,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
