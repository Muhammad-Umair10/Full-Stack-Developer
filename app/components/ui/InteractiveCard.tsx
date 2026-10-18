"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";

type InteractiveCardProps = HTMLMotionProps<"div"> & {
  tilt?: boolean;
};

export default function InteractiveCard({
  children,
  className = "",
  tilt = true,
  onPointerMove,
  onPointerLeave,
  ...props
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const rotationX = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 22,
    mass: 0.45,
  });
  const rotationY = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 22,
    mass: 0.45,
  });

  const handlePointerMove: NonNullable<HTMLMotionProps<"div">["onPointerMove"]> = (
    event,
  ) => {
    onPointerMove?.(event);
    const card = cardRef.current;
    if (!card || event.pointerType !== "mouse") return;

    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    card.style.setProperty("--mouse-x", `${x * 100}%`);
    card.style.setProperty("--mouse-y", `${y * 100}%`);

    if (tilt && !prefersReducedMotion) {
      rotationX.set((0.5 - y) * 7);
      rotationY.set((x - 0.5) * 7);
    }
  };

  const handlePointerLeave: NonNullable<HTMLMotionProps<"div">["onPointerLeave"]> = (
    event,
  ) => {
    onPointerLeave?.(event);
    cardRef.current?.style.setProperty("--mouse-x", "50%");
    cardRef.current?.style.setProperty("--mouse-y", "50%");
    rotationX.set(0);
    rotationY.set(0);
  };

  return (
    <motion.div
      {...props}
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`interactive-glow-card ${className}`}
      whileHover={
        tilt && !prefersReducedMotion
          ? { scale: 1.015, transition: { duration: 0.2 } }
          : undefined
      }
      style={{
        ...props.style,
        rotateX: tilt && !prefersReducedMotion ? rotationX : 0,
        rotateY: tilt && !prefersReducedMotion ? rotationY : 0,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}
