import type { Metadata } from "next";
import { Quicksand, Nunito } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "GermanTech Sistemas - Gestão Completa para seu Negócio",
  description:
    "Há mais de 17 anos simplificando a gestão de mais de 5.000 empresas. Sistema ERP completo com emissão de notas fiscais, controle de estoque, financeiro e suporte até 22h.",
  icons: { icon: "/images/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${quicksand.variable} ${nunito.variable}`}>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
