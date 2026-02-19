"use client";
import AnimatedCounter from "./AnimatedCounter";

export default function SocialProof() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-violet-700 py-6">
      <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-4">
          <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl backdrop-blur animate-pulse flex-shrink-0">+</span>
          <p className="text-white text-lg md:text-xl font-medium font-heading">
            <AnimatedCounter end={5000} suffix="" className="text-white font-extrabold text-2xl md:text-3xl" /> empresários já escolheram a GermanTech.{" "}
            <strong className="text-yellow-300">Quando vai ser a sua vez?</strong>
          </p>
        </div>
        <a
          href="#depoimentos"
          className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 backdrop-blur text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/20 transition-all hover:-translate-y-0.5 flex-shrink-0"
        >
          Veja o que dizem →
        </a>
      </div>
    </section>
  );
}
