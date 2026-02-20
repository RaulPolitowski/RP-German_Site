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
        <div className="w-full lg:flex-1 relative flex flex-col sm:flex-row lg:block items-center justify-center gap-4 lg:min-h-[350px] mb-8 lg:mb-0">
          <div className="tax-card-1 bg-white w-full max-w-[320px] lg:max-w-none rounded-3xl shadow-xl shadow-purple-100/50 border border-purple-100 p-5 lg:px-8 lg:py-6 flex items-center gap-4 lg:gap-5 lg:absolute lg:top-[10%] lg:left-[5%] z-10 relative">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl lg:rounded-2xl flex items-center justify-center text-white text-lg lg:text-xl flex-shrink-0">📊</div>
            <div>
              <p className="font-extrabold text-lg lg:text-xl text-gray-900 leading-none mb-1">IBS</p>
              <p className="text-[13px] lg:text-sm text-gray-500 leading-tight">Calculado automaticamente</p>
            </div>
          </div>
          <div className="tax-card-2 bg-white w-full max-w-[320px] lg:max-w-none rounded-3xl shadow-xl shadow-purple-100/50 border border-purple-100 p-5 lg:px-8 lg:py-6 flex items-center gap-4 lg:gap-5 lg:absolute lg:bottom-[15%] lg:right-[5%] z-10 relative">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl lg:rounded-2xl flex items-center justify-center text-white text-lg lg:text-xl flex-shrink-0">🏛️</div>
            <div>
              <p className="font-extrabold text-lg lg:text-xl text-gray-900 leading-none mb-1">CBS</p>
              <p className="text-[13px] lg:text-sm text-gray-500 leading-tight">Cálculo automático</p>
            </div>
          </div>
          {/* BG decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] lg:text-[14rem] font-extrabold text-purple-100 select-none pointer-events-none opacity-40 z-0">%</div>
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
