"use client";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 17, suffix: "+", label: "Anos de\nMercado", icon: "🏆" },
  { value: 5000, suffix: "+", label: "Empresas\nAtendidas", icon: "🏢" },
  { label: "Suporte\ntodo dia", display: "Até 22h", icon: "🎧" },
  { label: "Avaliação\ndos Clientes", display: "4.9/5", icon: "⭐" },
];

export default function CredibilityStrip() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="credibility" ref={ref} className="relative bg-gradient-to-r from-purple-700 via-purple-600 to-violet-700 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="max-w-7xl mx-auto px-5 py-10 relative z-10">
        <div className="flex flex-wrap items-center justify-around gap-6 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex items-center gap-4 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <span className="text-3xl md:text-4xl">{stat.icon}</span>
              <div>
                <p className="text-white font-extrabold text-3xl md:text-4xl leading-none tracking-tight font-heading">
                  {stat.value ? (
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} className="text-white" />
                  ) : (
                    stat.display
                  )}
                </p>
                <p className="text-purple-200 text-sm font-semibold mt-1 whitespace-pre-line leading-tight">{stat.label}</p>
              </div>

              {/* Separator (not last) */}
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-white/20 ml-6" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
