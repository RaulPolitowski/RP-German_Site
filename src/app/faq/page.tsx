"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Como funciona a implantação do sistema?",
    answer:
      "A implantação é realizada diretamente pela equipe técnica da German Tech, que configura o sistema conforme sua operação e acompanha os primeiros processos com você. Nada de vídeos extensos — o atendimento é prático, personalizado e orientado à sua realidade.",
    icon: "🚀",
  },
  {
    question: "Em quanto tempo posso começar a usar o sistema?",
    answer:
      "O acesso é liberado rapidamente após a contratação, permitindo iniciar cadastros e organização enquanto a equipe realiza os ajustes necessários. O uso acontece de forma progressiva e sem espera.",
    icon: "⏱️",
  },
  {
    question: "Existe fidelidade contratual?",
    answer:
      "Sim. A fidelidade mínima é de 4 meses, período pensado para implantação completa, treinamento e consolidação do uso com percepção real de resultados.",
    icon: "📋",
  },
  {
    question: "O que é necessário para contratar o German Tech Sistemas?",
    answer:
      "Basta possuir CNPJ. Se estiver em abertura, já é possível criar a base de dados e organizar cadastros — quando estiver ativo, apenas atualizamos e a operação continua normalmente.",
    icon: "✅",
  },
  {
    question: "A German Tech oferece treinamento para a equipe?",
    answer:
      "Sim. O treinamento é aplicado à rotina real dos usuários, permitindo aprendizado rápido e autonomia desde o início.",
    icon: "🎓",
  },
  {
    question: "Como funciona o suporte após a contratação?",
    answer:
      "O suporte é direto via WhatsApp com a equipe German Tech, sem necessidade de abertura de chamados ou e-mails. Você fala com quem conhece sua operação e recebe atendimento rápido e próximo.",
    icon: "💬",
  },
  {
    question: "O sistema pode ser personalizado para minha empresa?",
    answer:
      "Sim. A solução permite parametrizações que acompanham o fluxo real do negócio, facilitando adaptação e mantendo a operação fluida.",
    icon: "⚙️",
  },
  {
    question: "O que é necessário para emitir notas fiscais pelo sistema?",
    answer:
      "Para emissão fiscal é necessário possuir certificado digital. O modelo A1 é o mais recomendado pela praticidade e automação, mas o sistema também é compatível com certificados A3.",
    icon: "📄",
  },
  {
    question: "O sistema funciona em qualquer computador?",
    answer:
      "O sistema é leve e compatível com a maioria dos computadores atuais. Entretanto, quanto melhor o equipamento, melhor será o desempenho — especialmente em operações com grande volume de dados.",
    icon: "💻",
  },
  {
    question: "A German Tech possui aplicativo mobile?",
    answer:
      "Sim. Todos os módulos contam com aplicativos mobile, permitindo acesso e operação pelo celular com mobilidade e praticidade.",
    icon: "📱",
  },
  {
    question: "O sistema é instalado ou web?",
    answer:
      "A German Tech disponibiliza as duas opções: versão instalada localmente e versão web, permitindo que cada empresa escolha o formato mais adequado à sua estrutura.",
    icon: "🌐",
  },
  {
    question: "Como funciona o backup das informações?",
    answer:
      "A responsabilidade pelo backup dos dados é do cliente. Para facilitar esse processo, o sistema conta com ferramentas que permitem automatizar backups e enviá-los para a nuvem, reduzindo riscos e simplificando a rotina. A equipe técnica está sempre disponível para orientação.",
    icon: "☁️",
  },
  {
    question: "Como funciona o investimento no German Tech Sistemas?",
    answer:
      "O investimento é definido conforme necessidades, módulos e porte da empresa, garantindo contratação proporcional e escalável.",
    icon: "💰",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left p-5 md:p-6 rounded-2xl transition-all duration-300 group ${
          open
            ? "bg-purple-600 text-white shadow-lg shadow-purple-200"
            : "bg-white hover:bg-purple-50 border border-gray-100 hover:border-purple-200 shadow-sm"
        }`}
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl flex-shrink-0">{faq.icon}</span>
          <span className={`font-bold text-base md:text-lg flex-1 ${open ? "text-white" : "text-gray-900"}`}>
            {faq.question}
          </span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`text-xl flex-shrink-0 ${open ? "text-white" : "text-purple-500"}`}
          >
            ▾
          </motion.span>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-4 pl-10 text-white/90 leading-relaxed text-sm md:text-base">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-14">
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/logo.png" alt="GermanTech" width={160} height={35} className="h-8 w-auto" />
          </Link>
          <Link
            href="/"
            className="text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-1"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-16 pb-10 text-center px-5">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-extrabold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
            Central de Ajuda
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">Frequentes</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Tudo que você precisa saber antes de contratar. Se não encontrar sua dúvida aqui, fale com um especialista.
          </p>
        </motion.div>
      </section>

      {/* FAQ Items */}
      <section className="max-w-3xl mx-auto px-5 pb-16">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center bg-gradient-to-br from-purple-600 to-violet-700 rounded-3xl p-8 md:p-12 text-white"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-3">Ainda tem dúvidas?</h2>
          <p className="text-purple-200 mb-6 max-w-lg mx-auto">
            Nossa equipe está pronta para te atender. Fale diretamente com um especialista pelo WhatsApp.
          </p>
          <a
            href="https://wa.me/554530569087"
            className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all hover:-translate-y-0.5 shadow-lg text-lg"
          >
            FALE COM UM ESPECIALISTA →
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium opacity-90">© 2026 GermanTech Sistemas. Todos os direitos reservados.</p>
          <Link href="/" className="text-sm font-semibold opacity-80 hover:opacity-100 transition-all">
            ← Voltar ao site
          </Link>
        </div>
      </footer>
    </div>
  );
}
