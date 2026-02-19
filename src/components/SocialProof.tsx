"use client";
import AnimatedCounter from "./AnimatedCounter";

export default function SocialProof() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-violet-700 py-6">
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-center gap-4 text-center">
        <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl backdrop-blur animate-pulse flex-shrink-0">+</span>
        <p className="text-white text-lg md:text-xl font-medium font-heading">
          <AnimatedCounter end={5000} suffix="" className="text-white font-extrabold text-2xl md:text-3xl" /> empresários já escolheram a GermanTech.{" "}
          <strong className="text-yellow-300">Quando vai ser a sua vez?</strong>
        </p>
      </div>
    </section>
  );
}
