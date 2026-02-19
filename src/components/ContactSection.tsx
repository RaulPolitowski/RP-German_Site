"use client";
import FadeIn from "./FadeIn";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-5">
        <FadeIn className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900">Entre em contato</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Já é cliente */}
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden h-full">
              <div className="h-1.5 bg-purple-600 w-full" />
              <div className="p-8">
                <h3 className="text-center mb-8">
                  <span className="text-purple-600 font-bold text-lg">É cliente German Tech</span>
                  <br />
                  <span className="text-gray-700 font-semibold">e está precisando de ajuda?</span>
                </h3>

                <div className="space-y-5">
                  <a
                    href="https://wa.me/554598488365"
                    className="flex items-center justify-between gap-4 p-3 rounded-xl hover:bg-green-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🎧</span>
                      <span className="font-semibold text-gray-700 text-sm">Suporte Especializado</span>
                    </div>
                    <span className="bg-green-500 group-hover:bg-green-600 text-white text-xs font-bold py-2.5 rounded-full transition-all group-hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center gap-1.5 min-w-[200px]">
                      💬 Chamar via WhatsApp
                    </span>
                  </a>

                  <a
                    href="https://wa.me/554530569017"
                    className="flex items-center justify-between gap-4 p-3 rounded-xl hover:bg-green-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">💲</span>
                      <span className="font-semibold text-gray-700 text-sm">Financeiro</span>
                    </div>
                    <span className="bg-green-500 group-hover:bg-green-600 text-white text-xs font-bold py-2.5 rounded-full transition-all group-hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center gap-1.5 min-w-[200px]">
                      💬 Chamar via WhatsApp
                    </span>
                  </a>

                  <a
                    href="https://wa.me/554598156751"
                    className="flex items-center justify-between gap-4 p-3 rounded-xl hover:bg-green-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">⭐</span>
                      <span className="font-semibold text-gray-700 text-sm">Setor de Qualidade</span>
                    </div>
                    <span className="bg-green-500 group-hover:bg-green-600 text-white text-xs font-bold py-2.5 rounded-full transition-all group-hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center gap-1.5 min-w-[200px]">
                      💬 Avaliar Atendimento
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Ainda não é cliente */}
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden h-full">
              <div className="h-1.5 bg-gray-800 w-full" />
              <div className="p-8">
                <h3 className="text-center mb-2">
                  <span className="font-bold text-lg text-gray-900">Ainda não é cliente</span>
                </h3>
                <p className="text-gray-400 text-sm text-center mb-8">Fale com nossa equipe comercial</p>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="text-xl mt-0.5">📞</span>
                    <div>
                      <p className="font-bold text-sm text-gray-800">(45) 3056-9087</p>
                      <p className="text-xs text-gray-400">Horário comercial das 8:00 às 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-xl mt-0.5">✉️</span>
                    <div>
                      <p className="font-bold text-sm text-gray-800">comercial@germantech.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-xl mt-0.5">💬</span>
                    <div>
                      <p className="font-bold text-sm text-gray-800">WhatsApp</p>
                      <p className="text-xs text-gray-400">Horário comercial das 8:00 às 18:00</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/554530569087"
                  className="block mt-8 text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-full transition-all hover:-translate-y-0.5 shadow-md shadow-green-200"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
