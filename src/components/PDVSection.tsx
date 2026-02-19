"use client";
import FadeIn from "./FadeIn";

export default function PDVSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-700 via-purple-600 to-violet-800 rounded-t-[60px] text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_70%)]" />

      <div className="max-w-5xl mx-auto px-5 relative z-10">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-2">
            O PDV mais{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">rápido e seguro</span>{" "}
            do mercado
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto mt-10 rounded-2xl overflow-hidden shadow-2xl shadow-black/30 aspect-video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/34sR1Bzmap8"
              title="GermanTech PDV"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-white/90 text-lg md:text-xl font-semibold mt-10 max-w-3xl mx-auto leading-relaxed">
            Frente de caixa intuitivo, homologado e pronto para o ritmo intenso do seu negócio. Simplifique suas vendas, emita notas em segundos e tenha o controle total do seu caixa.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-8">
          <div className="inline-flex items-center gap-2 bg-white/10 text-purple-200 px-5 py-2.5 rounded-full text-sm font-bold border border-white/20 mb-5">
            ⚡ Condição especial para novas empresas este mês
          </div>
          <br />
          <a
            href="https://wa.me/554530569087"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-extrabold text-lg md:text-xl px-12 py-5 rounded-full shadow-xl shadow-green-500/30 transition-all hover:scale-105"
          >
            SOLICITAR DEMONSTRAÇÃO
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
