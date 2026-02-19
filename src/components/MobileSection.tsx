"use client";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function MobileSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <style>{`
        @keyframes deviceFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes deviceFloatAlt {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-2deg); }
        }
        .device-float { animation: deviceFloat 6s ease-in-out infinite; }
        .device-float-alt { animation: deviceFloatAlt 7s ease-in-out infinite 1s; }
      `}</style>

      <div className="absolute top-0 right-[-10%] w-80 h-80 bg-purple-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-80 h-80 bg-orange-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Tudo que você precisa para gerenciar seu negócio</h2>
          <p className="text-gray-500 text-lg">Do financeiro ao ponto de venda, do desktop ao celular — soluções completas para cada etapa da sua operação.</p>
        </FadeIn>

        {/* Painel do Gestor */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <FadeIn direction="right" className="flex-1">
            <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-extrabold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">Painel do Gestor 2.0</span>
            <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              <span className="text-emerald-600">Visão completa</span> do seu negócio em uma única tela
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Receitas, despesas, contas a pagar e receber, vencimentos e resultado — tudo em tempo real e de forma visual. Com inteligência artificial integrada, seus dados viram insights para tomar decisões mais rápidas e certeiras.
            </p>
            <ul className="space-y-3 mb-6">
              {["Dashboard financeiro completo e intuitivo", "Inteligência artificial aplicada aos seus dados", "Contas a pagar e receber em tempo real", "Insights automáticos para decisões mais estratégicas"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-gray-700 font-semibold">
                  <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/554530569087" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-200">
              QUERO CONHECER O PAINEL →
            </a>
          </FadeIn>
          <FadeIn direction="left" className="flex-1 flex justify-center">
            <div className="device-float relative w-full max-w-[560px] rounded-2xl overflow-hidden" style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.2)" }}>
              <Image src="/images/Paineldogestor.png" alt="Painel do Gestor GermanTech" width={1200} height={650} className="w-full h-auto rounded-2xl" />
            </div>
          </FadeIn>
        </div>

        {/* PDV */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-24">
          <FadeIn direction="left" className="flex-1">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-extrabold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">Ponto de Venda</span>
            <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              <span className="text-blue-600">Poucos cliques</span> e a nota já sai em segundos
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Um PDV completo, rápido e intuitivo. Seus funcionários aprendem em minutos e sua operação não para. Emissão de NF-e e NFC-e integrada, controle de caixa e muito mais.
            </p>
            <ul className="space-y-3 mb-6">
              {["Emissão de NF-e e NFC-e em segundos", "Interface simples — qualquer pessoa opera", "Controle total do caixa e formas de pagamento", "Integração completa com estoque e financeiro"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-gray-700 font-semibold">
                  <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/554530569087" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-200">
              SOLICITAR DEMONSTRAÇÃO →
            </a>
          </FadeIn>
          <FadeIn direction="right" className="flex-1 flex justify-center">
            <div className="device-float-alt relative w-full max-w-[560px] rounded-2xl overflow-hidden" style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.2)" }}>
              <Image src="/images/PDV.png" alt="PDV GermanTech" width={1200} height={650} className="w-full h-auto rounded-2xl" />
            </div>
          </FadeIn>
        </div>

        {/* GermanTech Mobile */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <FadeIn direction="right" className="flex-1">
            <span className="inline-block bg-purple-100 text-purple-700 text-xs font-extrabold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">GermanTech Mobile</span>
            <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              <span className="text-purple-600">Vendas e Gestão</span> na palma da sua mão
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Agilize seu processo de vendas e tenha o controle total da sua empresa de qualquer lugar. Ideal para gestores e vendedores que precisam de rapidez em tempo real.
            </p>
            <ul className="space-y-3 mb-6">
              {["Emissão de Pedidos e Orçamentos", "Emissão de NFC-e pelo app", "Ajuste de Estoque Instantâneo", "Consulta e Cadastro de Clientes", "Vendas em tempo real"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-gray-700 font-semibold">
                  <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/554530569087" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-purple-200">
              VER MAIS DETALHES →
            </a>
          </FadeIn>
          <FadeIn direction="left" className="flex-1 flex justify-center">
            {/* Phone mockup */}
            <div className="device-float relative w-[280px] h-[580px] rounded-[40px] bg-[#111] p-3 border-[8px] border-[#222]" style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.2)" }}>
              <div className="w-full h-full rounded-[28px] overflow-hidden bg-white relative">
                <Image src="/images/uploaded_media_1_1769607319958.jpg" alt="GermanTech Mobile" fill className="object-cover" />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Gourmet Mobile */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <FadeIn direction="left" className="flex-1">
            <span className="inline-block bg-orange-100 text-orange-700 text-xs font-extrabold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">Gourmet Mobile</span>
            <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              <span className="text-orange-500">Agilidade máxima</span> para seu Restaurante
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              O braço direito do seu atendimento. Acabe com erros de pedido e filas no caixa. Garçons atendem com tablet ou celular, enviando o pedido direto para a cozinha.
            </p>
            <ul className="space-y-3 mb-6">
              {["Controle total de Mesas e Comandas", "Pedidos via Tablet/Celular", "Impressão automática na Cozinha", "Fechamento rápido e sem erros"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-gray-700 font-semibold">
                  <span className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/554530569087" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-orange-200">
              SOLICITAR PARA MEU NEGÓCIO →
            </a>
          </FadeIn>
          <FadeIn direction="right" className="flex-1 flex justify-center">
            {/* Tablet mockup - idêntico ao site original */}
            <div className="device-float-alt relative w-[480px] h-[330px] rounded-[20px] bg-[#111] p-3 border-[8px] border-[#222]" style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.2)" }}>
              <div className="w-full h-full rounded-[12px] overflow-hidden bg-white relative">
                <Image src="/images/uploaded_media_2_1769607319958.png" alt="Gourmet Mobile" fill className="object-cover" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
