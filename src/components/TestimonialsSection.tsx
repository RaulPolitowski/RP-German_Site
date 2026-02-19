"use client";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const testimonials = [
  { src: "/images/testimonials/depoimento-01.jpeg", alt: "Depoimento de cliente sobre o sistema GermanTech" },
  { src: "/images/testimonials/depoimento-05.jpeg", alt: "Cliente elogiando a competência do suporte" },
  { src: "/images/testimonials/depoimento-02.jpeg", alt: "Cliente satisfeito com o atendimento GermanTech" },
  { src: "/images/testimonials/depoimento-06.jpeg", alt: "Cliente agradecendo pelo atendimento" },
  { src: "/images/testimonials/depoimento-03.jpeg", alt: "Cliente recomendando o sistema GermanTech" },
  { src: "/images/testimonials/depoimento-07.jpeg", alt: "Cliente elogiando a atenciosa equipe" },
  { src: "/images/testimonials/depoimento-04.jpeg", alt: "Cliente elogiando a facilidade do sistema" },
  { src: "/images/testimonials/depoimento-08.jpeg", alt: "Cliente elogiando o atendimento top" },
  { src: "/images/testimonials/depoimento-09.jpeg", alt: "Cliente dizendo que a empresa é top" },
];

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative max-h-[90vh] max-w-[min(420px,90vw)] cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={420}
          height={900}
          className="rounded-2xl shadow-2xl w-full h-auto max-h-[90vh] object-contain"
          sizes="420px"
          priority
        />
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute -top-3 -right-3 w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-110 transition-all cursor-pointer"
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <>
      <section id="depoimentos" className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                DEPOIMENTOS REAIS
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Clientes reais, <span className="gradient-text">opiniões reais</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Prints reais de conversas com quem usa o sistema no dia a dia. Sem edição, sem roteiro.
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                aria-label="Rolar para a esquerda"
                className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white rounded-full shadow-lg items-center justify-center text-purple-600 hover:bg-purple-50 hover:scale-110 transition-all cursor-pointer"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
            )}

            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((t, i) => (
                <FadeIn key={t.src} delay={i * 0.08}>
                  <div
                    className="snap-center flex-shrink-0 w-[260px] sm:w-[280px] cursor-pointer group"
                    onClick={() => setLightbox(t)}
                  >
                    <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white">
                      <Image
                        src={t.src}
                        alt={t.alt}
                        fill
                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="280px"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pb-4 pointer-events-none">
                        <span className="bg-white/90 backdrop-blur text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                          Clique para ler tudo
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                aria-label="Rolar para a direita"
                className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white rounded-full shadow-lg items-center justify-center text-purple-600 hover:bg-purple-50 hover:scale-110 transition-all cursor-pointer"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            )}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
