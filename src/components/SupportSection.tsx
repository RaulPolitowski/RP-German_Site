"use client";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function SupportSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-violet-700 text-white rounded-t-[60px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold leading-tight mb-5">
            Suporte Especializado que acompanha o ritmo do seu negócio
          </h2>
          <p className="text-purple-200 text-lg mb-4 leading-relaxed">
            Enquanto outras empresas param às 18h, nós continuamos com você. Sabemos que a gestão não tira folga.
          </p>

          <div className="bg-white rounded-2xl p-6 text-gray-700 mb-6 border-l-4 border-emerald-500 shadow-lg">
            <p className="mb-2"><strong className="text-emerald-600">Segunda a Sexta</strong> das 08h às 18h (Plantão até 22h)</p>
            <p><strong className="text-emerald-600">Sábados, Domingos e Feriados</strong> Plantão dedicado até as 22h!</p>
          </div>

          <p className="text-purple-200 mb-6">Emita suas notas fiscais com a tranquilidade de quem nunca fica na mão.</p>

          <a href="https://wa.me/55459848-8365" className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg">
            FALAR COM SUPORTE →
          </a>
        </FadeIn>

        <FadeIn direction="left">
          <div className="grid grid-cols-4 grid-rows-4 gap-3 h-[400px]">
            {[
              { src: "/images/team/equipe-geral-15anos.jpg", cls: "col-span-2 row-span-2" },
              { src: "/images/team/equipe-suporte-2.jpg", cls: "row-span-2" },
              { src: "/images/team/equipe-suporte-3.jpg", cls: "" },
              { src: "/images/team/equipe-suporte-1.jpg", cls: "col-span-2" },
              { src: "/images/team/equipe-geral-15anos.jpg", cls: "" },
              { src: "/images/team/equipe-suporte-4.jpg", cls: "row-span-2" },
            ].map((img, i) => (
              <div key={i} className={`${img.cls} rounded-2xl overflow-hidden relative bg-white/20`}>
                <Image src={img.src} alt="Equipe GermanTech" fill className="object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500" />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
