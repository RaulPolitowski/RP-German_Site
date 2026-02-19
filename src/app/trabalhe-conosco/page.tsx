"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const areas = [
  "Desenvolvimento",
  "Suporte Técnico",
  "Administrativo",
  "Comercial",
  "Outra",
];

export default function TrabalheConosco() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/trabalhe-conosco", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        form.reset();
      } else {
        setError(data.error || "Erro ao enviar. Tente novamente ou envie diretamente para raul@germantech.com.br");
      }
    } catch {
      setError("Erro de conexão. Tente novamente ou envie diretamente para raul@germantech.com.br");
    } finally {
      setSending(false);
    }
  }

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
            Estamos sempre em busca de pessoas que querem crescer junto com a gente. Preencha o formulário abaixo e venha fazer parte de uma equipe com mais de 30 profissionais.
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

      {/* Formulário */}
      <section className="max-w-2xl mx-auto px-5 pb-16">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 md:p-12 text-center"
            >
              <span className="text-5xl mb-4 block">✅</span>
              <h2 className="font-heading text-2xl font-extrabold text-emerald-800 mb-3">Currículo enviado com sucesso!</h2>
              <p className="text-emerald-600 mb-6">
                Recebemos suas informações e entraremos em contato em breve. Obrigado pelo interesse em fazer parte do time GermanTech!
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-sm font-bold text-emerald-700 border border-emerald-300 px-5 py-2 rounded-full hover:bg-emerald-100 transition-all"
              >
                Enviar outro currículo
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 md:p-10 space-y-5"
            >
              <h2 className="font-heading text-xl md:text-2xl font-extrabold text-gray-900 text-center mb-2">
                Envie seu currículo
              </h2>

              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Nome completo *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
                />
              </div>

              {/* Email e Telefone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1.5">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              {/* Cidade */}
              <div>
                <label htmlFor="city" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Cidade / Estado *
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  placeholder="Ex: Cascavel - PR"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm"
                />
              </div>

              {/* Área de interesse */}
              <div>
                <label htmlFor="area" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Área de interesse *
                </label>
                <select
                  id="area"
                  name="area"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm bg-white"
                >
                  <option value="">Selecione uma área</option>
                  {areas.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Conte um pouco sobre você
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Experiência, habilidades, por que quer trabalhar na GermanTech..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm resize-none"
                />
              </div>

              {/* Upload do currículo */}
              <div>
                <label htmlFor="resume" className="block text-sm font-bold text-gray-700 mb-1.5">
                  Anexar currículo (PDF, DOC, DOCX — máx. 5MB)
                </label>
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 file:cursor-pointer"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm font-semibold text-center bg-red-50 p-3 rounded-xl">{error}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-purple-200 disabled:opacity-60 disabled:cursor-not-allowed text-lg"
              >
                {sending ? "Enviando..." : "ENVIAR CURRÍCULO →"}
              </button>

              <p className="text-xs text-gray-400 text-center">
                Seus dados serão utilizados exclusivamente para o processo seletivo.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
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
