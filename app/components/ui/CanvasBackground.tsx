"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const pointer = { x: -1000, y: -1000 };
    let particles: Particle[] = [];
    let frameId = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const count = Math.min(90, Math.max(28, Math.floor((width * height) / 18000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }));
      draw();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const linkDistance = Math.min(150, Math.max(90, width * 0.11));

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];
        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        const pointerDistance = Math.hypot(dx, dy);

        if (pointerDistance < 130 && pointerDistance > 0) {
          const force = ((130 - pointerDistance) / 130) * 0.018;
          particle.vx -= (dx / pointerDistance) * force;
          particle.vy -= (dy / pointerDistance) * force;
        }

        particle.vx *= 0.995;
        particle.vy *= 0.995;
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        context.beginPath();
        context.arc(particle.x, particle.y, 1.2, 0, Math.PI * 2);
        context.fillStyle = "rgba(190, 205, 255, 0.38)";
        context.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const next = particles[j];
          const distance = Math.hypot(next.x - particle.x, next.y - particle.y);
          if (distance < linkDistance) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(next.x, next.y);
            context.strokeStyle = `rgba(155, 175, 255, ${(1 - distance / linkDistance) * 0.12})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
      }
    };

    const animate = () => {
      draw();
      frameId = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };
    const handlePointerLeave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    resize();
    if (!reduceMotion) frameId = window.requestAnimationFrame(animate);
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
    />
  );
}
