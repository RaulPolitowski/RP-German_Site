"use client";
import FadeIn from "./FadeIn";

const segments = [
  "🍽️ Restaurantes", "🍺 Bares e Pubs", "🍔 Lanchonetes", "🍕 Pizzarias",
  "☕ Cafeterias", "🔧 Oficinas", "📱 Assistências", "👕 Lojas de Roupas",
  "👟 Calçados", "🧱 Mat. Construção", "🐾 Pet Shops", "🚲 Bicicletarias",
  "🍷 Adegas", "💄 Cosméticos", "📚 Papelarias", "🔨 Ferragens",
  "🪟 Vidraçarias", "🎮 Brinquedos", "🍦 Sorveterias", "🛒 Minimercados",
  "🎨 Lojas de Tintas", "🔋 Auto Elétricas", "🎣 Pesca e Camping",
];

export default function SegmentsScroller() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-emerald-50/40 overflow-hidden relative">
      <FadeIn className="text-center mb-8">
        <span className="text-xs font-black tracking-[3px] text-emerald-600 bg-emerald-50/80 border border-emerald-200/50 px-5 py-2 rounded-full uppercase shadow-sm">
          Atendemos os mais variados segmentos
        </span>
      </FadeIn>

      <div 
        className="relative flex overflow-hidden group" 
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        <div className="flex gap-4 animate-scroll-left whitespace-nowrap px-2">
          {[...segments, ...segments].map((s, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 bg-white border border-gray-100 px-6 py-3.5 rounded-2xl text-[15px] font-bold text-gray-600 hover:text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50/50 hover:shadow-xl hover:shadow-emerald-100 hover:-translate-y-1 transition-all duration-300 cursor-default flex-shrink-0"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
          width: fit-content;
        }
        @media (min-width: 768px) {
          .animate-scroll-left {
            animation: scroll-left 60s linear infinite;
          }
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
