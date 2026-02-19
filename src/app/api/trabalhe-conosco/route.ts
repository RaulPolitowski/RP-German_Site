import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const city = formData.get("city") as string;
    const area = formData.get("area") as string;
    const message = formData.get("message") as string;
    const file = formData.get("resume") as File | null;

    if (!name || !email || !phone || !city || !area) {
      return NextResponse.json({ success: false, error: "Campos obrigatórios não preenchidos." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlBody = `
      <h2 style="color: #7c3aed;">Novo currículo recebido — Trabalhe Conosco</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Nome</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">E-mail</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Telefone</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Cidade</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${city}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Área de interesse</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${area}</td></tr>
        <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Sobre</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${message || "—"}</td></tr>
      </table>
      <p style="margin-top: 16px; color: #888; font-size: 12px;">Enviado pelo site GermanTech — Trabalhe Conosco</p>
    `;

    const attachments: nodemailer.SendMailOptions["attachments"] = [];
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
        contentType: file.type,
      });
    }

    await transporter.sendMail({
      from: `"Site GermanTech" <${process.env.SMTP_USER}>`,
      to: "raul@germantech.com.br",
      replyTo: email,
      subject: `Novo currículo — ${name} — ${area}`,
      html: htmlBody,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    return NextResponse.json({ success: false, error: "Erro interno ao enviar." }, { status: 500 });
  }
}
