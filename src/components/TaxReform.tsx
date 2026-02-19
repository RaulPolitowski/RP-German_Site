"use client";
import FadeIn from "./FadeIn";

export default function TaxReform() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
      <style>{`
        @keyframes taxFloat1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.5deg); }
        }
        @keyframes taxFloat2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-0.5deg); }
        }
        .tax-card-1 { animation: taxFloat1 5s ease-in-out infinite; }
        .tax-card-2 { animation: taxFloat2 6s ease-in-out infinite 0.8s; }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 flex flex-col lg:flex-row items-center gap-16">
        {/* Visual */}
        <div className="flex-1 relative min-h-[350px] flex items-center justify-center">
          <div className="tax-card-1 bg-white rounded-3xl shadow-xl shadow-purple-100/50 border border-purple-100 px-8 py-6 flex items-center gap-5 absolute top-[10%] left-[5%]">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center text-white text-xl">📊</div>
            <div>
              <p className="font-extrabold text-xl text-gray-900">IBS</p>
              <p className="text-sm text-gray-400">Calculado Automaticamente</p>
            </div>
          </div>
          <div className="tax-card-2 bg-white rounded-3xl shadow-xl shadow-purple-100/50 border border-purple-100 px-8 py-6 flex items-center gap-5 absolute bottom-[15%] right-[5%]">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center text-white text-xl">🏛️</div>
            <div>
              <p className="font-extrabold text-xl text-gray-900">CBS</p>
              <p className="text-sm text-gray-400">Cálculo automático</p>
            </div>
          </div>
          {/* BG decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] font-extrabold text-purple-100 select-none pointer-events-none opacity-40">%</div>
        </div>

        {/* Text */}
        <FadeIn direction="left" className="flex-1">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
            Muitos sistemas ainda estão se adaptando.{" "}
            <span className="gradient-text">O nosso já está pronto.</span>
          </h2>
          <p className="text-gray-500 text-lg mb-6 leading-relaxed">
            A Reforma Tributária trouxe novas regras, novos impostos e muita incerteza. Com a GermanTech, você emite notas com IBS e CBS calculados automaticamente — sem dor de cabeça e sem risco fiscal.
          </p>
          <ul className="space-y-3 mb-8">
            {["IBS e CBS calculados automaticamente", "NF-e e NFS-e já atualizadas com os novos campos", "Zero risco fiscal — conformidade desde o primeiro dia"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700 font-semibold">
                <span className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-400 text-sm mb-6 italic">Comece já com um sistema que não vai te deixar na mão.</p>
          <a href="https://wa.me/554530569087" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-purple-200">
            FALE COM UM ESPECIALISTA →
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
