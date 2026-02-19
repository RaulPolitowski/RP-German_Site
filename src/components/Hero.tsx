"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const screens = [
  { src: "/images/desktop-screen.png", label: "Desktop", device: "notebook" },
  { src: "/images/web-screen.png", label: "Web", device: "notebook" },
  { src: "/images/gourmet-screen.png", label: "Gourmet", device: "notebook" },
  { src: "/images/uploaded_media_1_1769607319958.jpg", label: "Mobile", device: "phone" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % screens.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center pt-14 pb-0 overflow-hidden">
      <div className="tech-grid absolute inset-0 pointer-events-none" />
      <div className="glow-orb absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="glow-orb absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-violet-400/10 rounded-full blur-[100px] pointer-events-none" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-6 lg:gap-4 items-center w-full">
        {/* Text */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-[2]">
          <div className="flex flex-wrap items-center gap-2 md:gap-2.5 mb-3 md:mb-4">
            <span className="relative overflow-hidden bg-purple-600 text-white text-[10px] md:text-xs font-black px-2.5 md:px-3.5 py-1 md:py-1.5 rounded-md tracking-wide uppercase">
              17+ anos
              <span className="badge-shimmer absolute inset-0 pointer-events-none" />
            </span>
            <span className="bg-emerald-600 text-white text-[10px] md:text-xs font-black px-2.5 md:px-3.5 py-1 md:py-1.5 rounded-md tracking-wide uppercase flex items-center gap-1.5">
              🇧🇷 Todo o Brasil
            </span>
            <span className="text-gray-500 text-sm md:text-base font-bold">+5.000 empresas confiam na GermanTech</span>
          </div>

          <h1 className="font-heading text-[1.75rem] md:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.1] md:leading-[1.08] text-gray-900 mb-3 md:mb-4">
            Eleve seu Negócio:{" "}
            <span className="gradient-text">Sistema de Gestão Empresarial</span>
          </h1>

          <p className="text-base md:text-xl text-gray-500 mb-2 md:mb-3 max-w-lg leading-relaxed">
            Tudo que seu negócio precisa em um só sistema.
            <span className="hidden md:inline"><br /></span>{" "}
            Gestão completa: notas, caixa, estoque e financeiro.
            <span className="hidden md:inline"><br /></span>{" "}
            Simples, inteligente e com suporte especializado.
          </p>

          <div className="flex items-center gap-2 mb-4 md:mb-5 text-sm md:text-base text-gray-400 font-semibold">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Atendimento em <strong className="text-gray-600">todos os estados do Brasil</strong> — suporte até as 22h
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4">
            <a href="/planos.html" className="group relative overflow-hidden inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-5 md:px-7 py-3 md:py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 text-sm md:text-base">
              <span className="badge-shimmer absolute inset-0 pointer-events-none" />
              Ver Soluções <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="https://wa.me/554530569087" className="inline-flex items-center gap-2 border-2 border-purple-300 text-purple-700 font-bold px-5 md:px-7 py-3 md:py-3.5 rounded-xl hover:bg-purple-50 transition-all hover:-translate-y-0.5 text-sm md:text-base">
              Falar com um Especialista
            </a>
          </div>

        </motion.div>

        {/* ===== DEVICES SHOWCASE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative lg:mt-0"
        >
          <div className="relative w-full max-w-[520px] md:max-w-[620px] lg:max-w-[800px] mx-auto">
            {/* Glow atrás */}
            <div className="absolute -inset-10 bg-purple-400/10 rounded-[60px] blur-3xl pointer-events-none" />

            {/* Dispositivos lado a lado */}
            <div className="flex items-end gap-4 lg:gap-5">
              {/* ======= NOTEBOOK ======= */}
              <div className={`relative flex-1 z-10 transition-all duration-500 ${screens[current].device === "phone" ? "opacity-50 scale-[0.96]" : "opacity-100 scale-100"}`}>
                {/* Tela */}
                <div
                  className="relative rounded-t-[10px] md:rounded-t-[14px]"
                  style={{
                    padding: "6px 6px 10px 6px",
                    background: "linear-gradient(180deg, #232334 0%, #1a1a2a 100%)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#2a2a3a] border border-[#3d3d4d]" />

                  <div className="relative overflow-hidden rounded-[4px] md:rounded-[5px] aspect-[16/10] bg-[#0a0a14]">
                    <AnimatePresence mode="wait">
                      {screens[current].device === "notebook" && (
                        <motion.div
                          key={current}
                          initial={{ opacity: 0, scale: 1.02 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={screens[current].src}
                            alt={screens[current].label}
                            fill
                            sizes="(max-width: 768px) 420px, (max-width: 1024px) 500px, 650px"
                            className="object-fill"
                            priority
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {screens[current].device === "phone" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900 to-violet-950">
                        <span className="text-white/20 font-heading font-bold text-lg tracking-wider">GERMAN TECH</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Base fina */}
                <div className="relative mx-[-4%]">
                  <div className="mx-[14%] h-[4px] md:h-[5px]" style={{ background: "linear-gradient(180deg, #858590 0%, #b5b5c2 50%, #d0d0d8 100%)", borderRadius: "0 0 2px 2px" }} />
                  <div style={{ height: 8, background: "linear-gradient(180deg, #d2d2da 0%, #c2c2cc 60%, #b8b8c4 100%)", borderRadius: "0 0 8px 8px", boxShadow: "0 3px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)" }} />
                  <div className="mx-[1%] h-[2px]" style={{ background: "linear-gradient(180deg, #ababb6 0%, #9a9aa6 100%)", borderRadius: "0 0 6px 6px" }} />
                </div>

                <div className="absolute -bottom-4 left-[2%] right-[2%] h-6 bg-black/[0.06] blur-xl rounded-[50%]" />
              </div>

              {/* ======= CELULAR (ao lado, com efeito de destaque) ======= */}
              <div className={`relative flex-shrink-0 transition-all duration-500 ${
                screens[current].device === "phone"
                  ? "scale-110 -translate-y-2 z-20"
                  : "scale-100 translate-y-0 z-0"
              }`}>
                <div
                  className="w-[85px] h-[175px] md:w-[105px] md:h-[218px] lg:w-[125px] lg:h-[260px] rounded-[14px] md:rounded-[18px] lg:rounded-[22px] p-[3px] md:p-[4px] lg:p-[5px]"
                  style={{
                    background: "linear-gradient(180deg, #1e1e2e 0%, #141420 100%)",
                    boxShadow: screens[current].device === "phone"
                      ? "0 20px 60px rgba(124, 58, 237, 0.3), 0 10px 30px rgba(0,0,0,0.2)"
                      : "0 16px 48px rgba(0,0,0,0.2)",
                    border: "2px solid #2a2a3a",
                    transition: "box-shadow 0.5s",
                  }}
                >
                  <div className="absolute top-[5px] lg:top-[7px] left-1/2 -translate-x-1/2 w-[22px] lg:w-[28px] h-[3px] lg:h-[4px] bg-[#0a0a14] rounded-full z-10" />

                  <div className="w-full h-full rounded-[11px] md:rounded-[14px] lg:rounded-[19px] overflow-hidden bg-[#0a0a14] relative">
                    <AnimatePresence mode="wait">
                      {screens[current].device === "phone" ? (
                        <motion.div
                          key="phone-active"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.7 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={screens[current].src}
                            alt="GermanTech Mobile"
                            fill
                            sizes="(max-width: 768px) 90px, (max-width: 1024px) 110px, 135px"
                            className="object-cover object-top"
                          />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="phone-idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src="/images/uploaded_media_1_1769607319958.jpg"
                            alt="GermanTech Mobile"
                            fill
                            sizes="(max-width: 768px) 90px, (max-width: 1024px) 110px, 135px"
                            className="object-cover object-top opacity-80"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div className={`absolute -bottom-2 left-[10%] right-[10%] h-4 rounded-[50%] blur-lg transition-all duration-500 ${
                  screens[current].device === "phone" ? "bg-purple-500/15" : "bg-black/[0.08]"
                }`} />
              </div>
            </div>

            {/* Botões de navegação — embaixo do mockup */}
            <div className="flex justify-center gap-3 mt-4">
              {screens.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`text-xs font-bold px-5 py-2 rounded-full transition-all ${
                    i === current
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-200/50"
                      : "bg-white text-gray-500 hover:bg-purple-50 hover:text-purple-600 border border-gray-200"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-2 left-1/2 -translate-x-1/2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <a href="#credibility" className="w-11 h-11 rounded-full border-2 border-purple-300 flex items-center justify-center text-purple-500 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
        </a>
      </motion.div>
    </section>
  );
}
