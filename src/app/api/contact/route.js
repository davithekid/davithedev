import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { firstName, email, message } = await req.json();

    const data = await resend.emails.send({
      from: "Contato Portfólio <onboarding@resend.dev>", 
      to: "ddchagas.d1@gmail.com",
      subject: `Novo contato de ${firstName}`,
      text: `Nome/Empresa: ${firstName}\nEmail: ${email}\n\nMensagem:\n${message}`,
    });

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}