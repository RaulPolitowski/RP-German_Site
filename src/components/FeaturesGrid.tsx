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
  { icon: "🧾", name: "Nota fiscal do consumidor eletrônica", cat: "vendas" },
  { icon: "📋", name: "Nota fiscal de serviço eletrônica", cat: "vendas" },
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
  { icon: "📥", name: "Importação de notas fiscais", cat: "estoque" },
  { icon: "✅", name: "Registro de Inventário", cat: "estoque" },
  { icon: "🔍", name: "Auditoria de produtos", cat: "estoque" },
  { icon: "📊", name: "Relatórios detalhados de estoque", cat: "estoque" },
  { icon: "🔄", name: "Conversor de estoque", cat: "estoque" },
  { icon: "⚙️", name: "Fator de conversão automático", cat: "estoque" },
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
  { icon: "📊", name: "Relatórios de desempenho financeiro", cat: "financas" },
  { icon: "🖥️", name: "Painel do gestor", cat: "inteligencia" },
  { icon: "📑", name: "Relatórios detalhados de gestão", cat: "inteligencia" },
  { icon: "🧠", name: "germanAI", cat: "inteligencia" },
  { icon: "📱", name: "Apps intuitivos", cat: "inteligencia" },
];

export default function FeaturesGrid() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? features : features.filter((f) => f.cat === active);

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-5">
        <FadeIn className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold leading-tight">
            <span className="gradient-text">Tecnologia de ponta para quem não tem tempo a perder.</span>
            <br />
            <span className="text-gray-900">Mais que um emissor, sua central de inteligência e gestão.</span>
          </h2>
        </FadeIn>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
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
        <div className="flex flex-wrap justify-center gap-3">
          {filtered.map((f, i) => (
            <div
              key={`${f.cat}-${f.name}`}
              className="flex items-center gap-2.5 bg-white border border-purple-100 rounded-full px-5 py-3 shadow-sm hover:shadow-md hover:border-purple-300 hover:-translate-y-0.5 transition-all cursor-default"
              style={{ animationDelay: `${i * 0.03}s` }}
            >
              <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                {f.icon}
              </span>
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{f.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
