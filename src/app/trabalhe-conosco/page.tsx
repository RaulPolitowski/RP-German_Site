"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TrabalheConosco() {
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
            Faça parte do time
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Trabalhe{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">Conosco</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Estamos sempre em busca de pessoas que querem crescer junto com a gente.
            Venha fazer parte de uma equipe com mais de 30 profissionais.
          </p>
        </motion.div>
      </section>

      {/* Destaques */}
      <section className="max-w-4xl mx-auto px-5 pb-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {[
            { icon: "🏢", label: "17+ anos de mercado" },
            { icon: "👥", label: "30+ colaboradores" },
            { icon: "🚀", label: "Tecnologia de ponta" },
            { icon: "💜", label: "Ambiente colaborativo" },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="bg-white rounded-xl border border-purple-100 p-4 text-center shadow-sm"
            >
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <span className="text-sm font-semibold text-gray-700">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Card WhatsApp */}
      <section className="max-w-xl mx-auto px-5 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 md:p-10 text-center"
        >
          <span className="text-5xl mb-4 block">💬</span>
          <h2 className="font-heading text-xl md:text-2xl font-extrabold text-gray-900 mb-3">
            Envie seu currículo pelo WhatsApp
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-6 leading-relaxed">
            É rápido e simples. Basta enviar uma mensagem com as informações abaixo:
          </p>

          <div className="bg-gray-50 rounded-2xl p-5 mb-6 text-left space-y-2">
            <p className="text-sm text-gray-700 font-semibold flex items-center gap-2">
              <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
              Seu <strong>nome completo</strong>
            </p>
            <p className="text-sm text-gray-700 font-semibold flex items-center gap-2">
              <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
              <strong>Cidade</strong> onde mora
            </p>
            <p className="text-sm text-gray-700 font-semibold flex items-center gap-2">
              <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
              <strong>Área de interesse</strong> (Desenvolvimento, Suporte, Administrativo, Comercial...)
            </p>
            <p className="text-sm text-gray-700 font-semibold flex items-center gap-2">
              <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
              Seu <strong>currículo em PDF</strong> anexado na conversa
            </p>
          </div>

          <a
            href="https://wa.me/5545998498928?text=Ol%C3%A1%21%20Tenho%20interesse%20em%20trabalhar%20na%20GermanTech.%0A%0ANome%3A%20%0ACidade%3A%20%0A%C3%81rea%20de%20interesse%3A%20%0A%0ASegue%20meu%20curr%C3%ADculo%20em%20anexo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-extrabold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-green-200 text-lg"
          >
            ENVIAR PELO WHATSAPP →
          </a>

          <p className="text-xs text-gray-400 mt-4">
            Seus dados serão utilizados exclusivamente para o processo seletivo.
          </p>
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
