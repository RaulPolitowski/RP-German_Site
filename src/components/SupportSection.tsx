"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";

export default function SupportSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-violet-700 text-white rounded-t-[60px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold leading-tight mb-5">
            A estrutura de uma grande empresa, trabalhando para a sua
          </h2>
          <p className="text-purple-200 text-lg mb-4 leading-relaxed">
            Desenvolvedores, especialistas fiscais, consultores e suporte técnico. Tudo dentro de casa, tudo focado em você. Enquanto outras empresas terceirizam, nós investimos em gente.
          </p>

          {/* Números em destaque */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="text-center">
              <AnimatedCounter end={30} suffix="+" className="text-4xl md:text-5xl font-extrabold text-white" />
              <p className="text-purple-200 text-sm mt-1">Colaboradores</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={5} className="text-4xl md:text-5xl font-extrabold text-white" />
              <p className="text-purple-200 text-sm mt-1">Áreas especializadas</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={17} suffix="+" className="text-4xl md:text-5xl font-extrabold text-white" />
              <p className="text-purple-200 text-sm mt-1">Anos de experiência</p>
            </div>
          </div>

          {/* Badges das áreas */}
          <motion.div
            className="flex flex-wrap lg:flex-nowrap gap-2 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {["Desenvolvimento", "Fiscal & Tributário", "Administrativo", "Consultoria", "Suporte Técnico"].map((area) => (
              <motion.span
                key={area}
                variants={{
                  hidden: { opacity: 0, y: 10, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.4 }}
                className="bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 whitespace-nowrap"
              >
                {area}
              </motion.span>
            ))}
          </motion.div>

          <p className="text-purple-200 mb-6">Sua empresa merece um parceiro, não apenas um sistema.</p>

          <a href="https://wa.me/55459848-8365" className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg">
            FALE COM UM ESPECIALISTA →
          </a>
        </FadeIn>

        <FadeIn direction="left">
          <div className="flex flex-col gap-3">
            {/* Foto principal da equipe */}
            <div className="rounded-2xl overflow-hidden relative aspect-[16/9] bg-white/20">
              <Image src="/images/team/equipe-geral-15anos.jpg" alt="Equipe GermanTech" fill className="object-cover object-center opacity-90 hover:opacity-100 transition-all duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            {/* Fotos menores do dia a dia */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { src: "/images/team/equipe-suporte-1.jpg", alt: "Suporte Técnico" },
                { src: "/images/team/equipe-suporte-2.jpg", alt: "Equipe no dia a dia" },
                { src: "/images/team/equipe-suporte-3.jpg", alt: "Time em ação" },
              ].map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden relative aspect-[4/3] bg-white/20">
                  <Image src={img.src} alt={img.alt} fill className="object-cover object-center opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500" sizes="(max-width: 768px) 33vw, 17vw" />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
