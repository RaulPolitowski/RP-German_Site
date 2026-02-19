"use client";
import FadeIn from "./FadeIn";

const pains = [
  {
    icon: "⚠️",
    title: "Emitir nota fiscal é uma dor de cabeça?",
    problem: "Erros, rejeições e medo da fiscalização travam seu dia.",
    solution: "Emita NF-e, NFC-e e NFS-e em segundos, sem erros e dentro das normas da Receita.",
  },
  {
    icon: "📉",
    title: "Perde vendas por falta de controle?",
    problem: "Produto em falta, compras erradas e prejuízo invisível.",
    solution: "Estoque atualizado automaticamente a cada venda. Sem surpresas.",
  },
  {
    icon: "💸",
    title: "Não sabe pra onde está indo o dinheiro?",
    problem: "Contas desorganizadas, caixa furado e zero visibilidade financeira.",
    solution: "Financeiro completo: contas a pagar, receber, DRE e fluxo de caixa.",
  },
  {
    icon: "🕐",
    title: "O suporte da sua empresa para às 18h?",
    problem: "Deu problema no sábado à noite? Na maioria das empresas, só segunda-feira.",
    solution: "Suporte especializado até 22h, todos os dias — inclusive feriados.",
  },
];

export default function PainSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5">
        <FadeIn className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Você ainda sofre com isso no seu negócio?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A maioria dos empresários perde dinheiro e tempo com problemas que já deveriam estar resolvidos.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {pains.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-purple-200 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/40 relative overflow-hidden">
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-red-400 to-orange-400 group-hover:from-purple-500 group-hover:to-green-500 transition-all rounded-l-2xl" />

                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl flex-shrink-0">{p.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{p.title}</h3>
                    <p className="text-gray-400 text-sm italic mt-1">{p.problem}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4 ml-1">
                  <span className="text-emerald-500 text-lg mt-0.5">✓</span>
                  <p className="text-emerald-800 text-sm font-semibold leading-relaxed">{p.solution}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="text-center mt-12">
          <p className="text-gray-700 text-lg font-semibold mb-5">
            🔥 Mais de <span className="text-purple-600 font-extrabold">5.000 empresas</span> já resolveram esses problemas com a GermanTech.
          </p>
          <a
            href="https://wa.me/554530569087"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-purple-200 hover:shadow-xl text-lg animate-pulse"
          >
            QUERO RESOLVER AGORA →
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
