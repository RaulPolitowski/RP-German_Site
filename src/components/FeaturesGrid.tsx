"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";

const tabs = [
  { id: "all", label: "Todos" },
  { id: "vendas", label: "Vendas" },
  { id: "estoque", label: "Estoque" },
  { id: "financas", label: "Finanças" },
  { id: "inteligencia", label: "Inteligência Artificial" },
];

const features = [
  { icon: "📄", name: "Nota fiscal eletrônica", cat: "vendas" },
  { icon: "🧾", name: "NFC-e", cat: "vendas" },
  { icon: "📋", name: "NFS-e", cat: "vendas" },
  { icon: "🛒", name: "Pedidos", cat: "vendas" },
  { icon: "🧮", name: "Orçamentos", cat: "vendas" },
  { icon: "🛵", name: "Delivery", cat: "vendas" },
  { icon: "📝", name: "Controle de Comandas", cat: "vendas" },
  { icon: "🛍️", name: "Controle de vendas", cat: "vendas" },
  { icon: "💻", name: "Frente de Caixa (PDV)", cat: "vendas" },
  { icon: "🔧", name: "Ordem de Serviço", cat: "vendas" },
  { icon: "📑", name: "Cadastros", cat: "estoque" },
  { icon: "📦", name: "Controle de estoque", cat: "estoque" },
  { icon: "🔲", name: "Controle de grade", cat: "estoque" },
  { icon: "📥", name: "Importação de NF", cat: "estoque" },
  { icon: "✅", name: "Registro de Inventário", cat: "estoque" },
  { icon: "🔍", name: "Auditoria de produtos", cat: "estoque" },
  { icon: "📊", name: "Relatórios de estoque", cat: "estoque" },
  { icon: "🔄", name: "Conversor de estoque", cat: "estoque" },
  { icon: "⚙️", name: "Fator de conversão", cat: "estoque" },
  { icon: "🏷️", name: "Etiquetas", cat: "estoque" },
  { icon: "📈", name: "Gestão financeira", cat: "financas" },
  { icon: "🔃", name: "Contas a pagar e receber", cat: "financas" },
  { icon: "📊", name: "Emissão de boletos", cat: "financas" },
  { icon: "📒", name: "Controle de Crediário", cat: "financas" },
  { icon: "👤", name: "Crédito de cliente", cat: "financas" },
  { icon: "💰", name: "Controle de Salários", cat: "financas" },
  { icon: "🎫", name: "Controle de vales", cat: "financas" },
  { icon: "💳", name: "Caixa", cat: "financas" },
  { icon: "📉", name: "DRE", cat: "financas" },
  { icon: "📊", name: "Relatórios financeiros", cat: "financas" },
  { icon: "🖥️", name: "Painel do gestor", cat: "inteligencia" },
  { icon: "📑", name: "Relatórios de gestão", cat: "inteligencia" },
  { icon: "🧠", name: "germanAI", cat: "inteligencia" },
  { icon: "📱", name: "Apps intuitivos", cat: "inteligencia" },
];

const MOBILE_INITIAL_COUNT = 8;

export default function FeaturesGrid() {
  const [active, setActive] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = active === "all" ? features : features.filter((f) => f.cat === active);

  const handleTabChange = (id: string) => {
    setActive(id);
    setShowAll(false);
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn className="text-center mb-8 md:mb-10">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold leading-tight">
            <span className="gradient-text">Tecnologia de ponta para quem não tem tempo a perder.</span>
            <br />
            <span className="text-gray-900 text-xl md:text-4xl">Mais que um emissor, sua central de inteligência e gestão.</span>
          </h2>
        </FadeIn>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-8 md:mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-3 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all ${
                active === tab.id
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
                  : "bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 border border-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Pills grid */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {filtered.map((f, i) => {
            const hiddenOnMobile = !showAll && i >= MOBILE_INITIAL_COUNT;
            return (
              <div
                key={`${f.cat}-${f.name}`}
                className={`flex items-center gap-2 md:gap-2.5 bg-white border border-purple-100 rounded-full px-3 md:px-5 py-2 md:py-3 shadow-sm hover:shadow-md hover:border-purple-300 hover:-translate-y-0.5 transition-all cursor-default ${
                  hiddenOnMobile ? "hidden md:flex" : ""
                }`}
              >
                <span className="w-6 h-6 md:w-8 md:h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs md:text-sm flex-shrink-0">
                  {f.icon}
                </span>
                <span className="text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">{f.name}</span>
              </div>
            );
          })}
        </div>

        {/* Ver mais (mobile only) */}
        {!showAll && filtered.length > MOBILE_INITIAL_COUNT && (
          <div className="flex justify-center mt-4 md:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="text-sm font-bold text-purple-600 border border-purple-200 px-5 py-2 rounded-full hover:bg-purple-50 transition-all"
            >
              Ver todos ({filtered.length - MOBILE_INITIAL_COUNT} mais) ↓
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
