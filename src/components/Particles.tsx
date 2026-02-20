"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Particles() {
  const [particles, setParticles] = useState<Array<{ id: number, size: number, x: number, y: number, duration: number, delay: number }>>([]);

  useEffect(() => {
    // Gerar partículas aleatórias apenas no lado do cliente
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 1, // de 1px a 5px
      x: Math.random() * 100, // posição X %
      y: Math.random() * 100, // posição Y %
      duration: Math.random() * 10 + 10, // de 10s a 20s
      delay: Math.random() * 5, // de 0s a 5s
    }));
    setParticles(newParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 mix-blend-screen">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-purple-400"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: 0.3,
            boxShadow: `0 0 ${p.size * 2}px rgba(168, 85, 247, 0.8)`, // brilho na partícula
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0], // flutuação lateral aleatória
            opacity: [0, 0.6, 0], // surge, brilha e some
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
