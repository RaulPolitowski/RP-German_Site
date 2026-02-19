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
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-16 pb-4 overflow-hidden">
      <div className="tech-grid absolute inset-0 pointer-events-none" />
      <div className="glow-orb absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="glow-orb absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-violet-400/10 rounded-full blur-[100px] pointer-events-none" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center w-full">
        {/* Text */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-[2]">
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="relative overflow-hidden bg-purple-600 text-white text-xs font-black px-3.5 py-1.5 rounded-md tracking-wide uppercase">
              17+ anos
              <span className="badge-shimmer absolute inset-0 pointer-events-none" />
            </span>
            <span className="bg-emerald-600 text-white text-xs font-black px-3.5 py-1.5 rounded-md tracking-wide uppercase flex items-center gap-1.5">
              🇧🇷 Todo o Brasil
            </span>
            <span className="text-gray-500 text-sm font-bold">+5.000 empresas confiam na GermanTech</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] text-gray-900 mb-5">
            Eleve seu Negócio:{" "}
            <span className="gradient-text">Sistema de Gestão Empresarial</span>
          </h1>

          <p className="text-lg text-gray-500 mb-4 max-w-lg leading-relaxed">
            Emita notas. Controle o caixa. Organize o estoque.<br />
            Sistema inteligente, simples e com suporte especializado.
          </p>

          <div className="flex items-center gap-2 mb-7 text-sm text-gray-400 font-semibold">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Atendimento em <strong className="text-gray-600">todos os estados do Brasil</strong> — suporte até as 22h
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="/planos.html" className="group relative overflow-hidden inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300">
              <span className="badge-shimmer absolute inset-0 pointer-events-none" />
              Ver Soluções <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="https://wa.me/554530569087" className="inline-flex items-center gap-2 border-2 border-purple-300 text-purple-700 font-bold px-7 py-3.5 rounded-xl hover:bg-purple-50 transition-all hover:-translate-y-0.5">
              Falar com um Especialista
            </a>
          </div>
        </motion.div>

        {/* Devices Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full max-w-[620px] mx-auto">
            {/* Glow */}
            <div className="absolute -inset-6 bg-purple-400/8 rounded-[50px] blur-3xl pointer-events-none" />

            <div className="flex items-end gap-5">
              {/* ========== NOTEBOOK ========== */}
              <div className={`relative flex-1 transition-all duration-500 ${screens[current].device === "phone" ? "opacity-60 scale-[0.92]" : "opacity-100 scale-100"}`}>

                {/* Tela (lid) */}
                <div
                  className="relative rounded-t-[10px] p-[7px] pb-[10px]"
                  style={{
                    background: "linear-gradient(180deg, #2a2a38 0%, #1a1a26 100%)",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-[#3a3a4a] rounded-full border border-[#4a4a5a]" />

                  <div className="relative rounded-[3px] overflow-hidden aspect-[16/10] bg-black">
                    <AnimatePresence mode="wait">
                      {screens[current].device === "notebook" && (
                        <motion.div
                          key={current}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.7 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={screens[current].src}
                            alt={screens[current].label}
                            fill
                            sizes="480px"
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
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Dobradiça */}
                <div
                  className="h-[5px] mx-[2%]"
                  style={{ background: "linear-gradient(180deg, #909099 0%, #b5b5c0 50%, #ccccd4 100%)", borderRadius: "0 0 2px 2px" }}
                />

                {/* Teclado (keyboard deck) */}
                <div
                  className="relative mx-[-3%] rounded-b-[10px] overflow-hidden"
                  style={{
                    background: "linear-gradient(180deg, #d2d2da 0%, #c0c0cc 100%)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    height: 52,
                  }}
                >
                  {/* Teclas grid */}
                  <div className="absolute inset-0 px-[10px] pt-[6px] pb-[14px] flex flex-col gap-[3px]">
                    {[0, 1, 2, 3].map((row) => (
                      <div key={row} className="flex gap-[3px] flex-1">
                        {Array.from({ length: row === 3 ? 8 : 14 }).map((_, col) => (
                          <div
                            key={col}
                            className={`rounded-[2px] ${row === 3 && col === 3 ? "flex-[4]" : "flex-1"}`}
                            style={{
                              background: "linear-gradient(180deg, #bbbbc5 0%, #adadb8 100%)",
                              boxShadow: "0 1px 0 rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.3)",
                            }}
                          />
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Trackpad */}
                  <div className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-[90px] h-[2px] bg-[#b0b0bc] rounded-full" />
                </div>

                {/* Borda inferior da base */}
                <div
                  className="h-[3px] mx-[1%]"
                  style={{ background: "linear-gradient(180deg, #b0b0bc 0%, #a0a0ac 100%)", borderRadius: "0 0 6px 6px" }}
                />

                {/* Sombra notebook */}
                <div className="absolute -bottom-4 left-[3%] right-[3%] h-5 bg-black/[0.06] blur-xl rounded-[50%]" />
              </div>

              {/* ========== CELULAR ========== */}
              <div className={`relative flex-shrink-0 transition-all duration-500 ${screens[current].device === "phone" ? "scale-105 z-10" : "scale-100 z-0"}`}>
                <div
                  className="relative w-[120px] h-[248px] rounded-[18px] p-[5px]"
                  style={{
                    background: "linear-gradient(180deg, #2a2a38 0%, #1a1a26 100%)",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
                    border: "3px solid #333",
                  }}
                >
                  {/* Notch */}
                  <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[30px] h-[4px] bg-[#1a1a26] rounded-full z-10" />

                  {/* Tela do celular */}
                  <div className="w-full h-full rounded-[13px] overflow-hidden bg-black relative">
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
                            sizes="120px"
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
                            sizes="120px"
                            className="object-cover object-top opacity-70"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Sombra celular */}
                <div className="absolute -bottom-3 left-[10%] right-[10%] h-4 bg-black/[0.08] blur-lg rounded-[50%]" />
              </div>
            </div>

            {/* Botões de navegação */}
            <div className="flex justify-center gap-3 mt-8">
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
      <motion.div className="absolute bottom-4 left-1/2 -translate-x-1/2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <a href="#credibility" className="w-11 h-11 rounded-full border-2 border-purple-300 flex items-center justify-center text-purple-500 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
        </a>
      </motion.div>
    </section>
  );
}
