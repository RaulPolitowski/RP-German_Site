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
    <section className="py-10 bg-emerald-50/50 border-y border-emerald-100 overflow-hidden">
      <FadeIn className="text-center mb-6">
        <span className="text-xs font-extrabold tracking-[2px] text-gray-500 uppercase">
          Atendemos os mais variados segmentos
        </span>
      </FadeIn>

      <div className="relative">
        <div className="flex gap-4 animate-scroll-left whitespace-nowrap">
          {[...segments, ...segments].map((s, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 bg-white border border-emerald-200 px-5 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:border-emerald-400 hover:-translate-y-1 transition-all shadow-sm cursor-default flex-shrink-0"
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
          animation: scroll-left 10s linear infinite;
        }
        @media (min-width: 768px) {
          .animate-scroll-left {
            animation: scroll-left 50s linear infinite;
          }
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
