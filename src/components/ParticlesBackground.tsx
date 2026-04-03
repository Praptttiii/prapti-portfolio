import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
};

const CONNECTION_DISTANCE = 120;
const MOBILE_PARTICLE_COUNT = 70;
const DESKTOP_PARTICLE_COUNT = 140;

const createParticle = (width: number, height: number): Particle => ({
  x: Math.random() * width,
  y: Math.random() * height,
  vx: (Math.random() - 0.5) * 0.35,
  vy: (Math.random() - 0.5) * 0.35,
  size: Math.random() * 2 + 0.8,
  alpha: Math.random() * 0.35 + 0.2,
});

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      width = parent.clientWidth;
      height = parent.clientHeight;

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const particleCount = isMobile ? MOBILE_PARTICLE_COUNT : DESKTOP_PARTICLE_COUNT;
      particles = Array.from({ length: particleCount }, () => createParticle(width, height));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(width, particle.x));
        particle.y = Math.max(0, Math.min(height, particle.y));

        context.beginPath();
        context.fillStyle = `hsla(174, 72%, 56%, ${particle.alpha})`;
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.hypot(dx, dy);

          if (distance < CONNECTION_DISTANCE) {
            const opacity = (1 - distance / CONNECTION_DISTANCE) * 0.18;
            context.beginPath();
            context.strokeStyle = `hsla(265, 70%, 60%, ${opacity})`;
            context.lineWidth = 1;
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }

        if (mouseRef.current) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 140) {
            const force = (140 - distance) / 1400;
            particle.x -= dx * force;
            particle.y -= dy * force;
          }
        }
      }

      animationRef.current = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const handlePointerLeave = () => {
      mouseRef.current = null;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none opacity-70"
      aria-hidden="true"
    />
  );
};

export default ParticlesBackground;
