"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import Image from "next/image";

const Contact02Page = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      firstName: e.target.firstName.value, 
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Mensagem enviada com sucesso!");
        e.target.reset();
      } else {
        toast.error("Erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (err) {
      toast.error("Falha de conexão com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-background">
      <div className="w-full max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          <span className="text-muted-foreground">&lt;</span>
          <span className="text-primary">Contate-me</span>
          <span className="text-muted-foreground">&gt;</span>
        </h2>
        <p className="text-center text-gray-400 mt-3 mb-10">
          Fique à vontade para enviar uma mensagem ou entrar em contato via email ou telefone.
        </p>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="flex flex-col gap-8">
            <div className="relative w-full flex justify-center lg:justify-start">
              <Image
                src="/illustration.svg"
                alt="Contato"
                width={400}
                height={300}
                priority
                className="opacity-90 dark:brightness-90"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 bg-violet-500/10 text-violet-500 rounded-full group-hover:bg-violet-500 group-hover:text-white transition-colors">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <Link className="text-muted-foreground hover:text-violet-500 transition-colors" href="mailto:ddchagas.d1@gmail.com">
                    ddchagas.d1@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 bg-violet-500/10 text-violet-500 rounded-full group-hover:bg-violet-500 group-hover:text-white transition-colors">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefone</h3>
                  <Link className="text-muted-foreground hover:text-violet-500 transition-colors" href="tel:+5511942766704">
                    +55 (11) 94276-6704
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-12 h-12 bg-violet-500/10 text-violet-500 rounded-full group-hover:bg-violet-500 group-hover:text-white transition-colors">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Disponibilidade</h3>
                  <p className="text-muted-foreground">
                    Remoto ou presencial em São Paulo/SP
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="rounded-3xl border-violet-500/10 bg-card/50 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome e Empresa</Label>
                    <Input id="firstName" name="firstName" placeholder="Seu nome e empresa" className="bg-background/50 border-violet-500/10" required />
                  </div>

                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="seu@email.com" className="bg-background/50 border-violet-500/10" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" name="message" placeholder="Como posso ajudar?" rows={5} className="bg-background/50 border-violet-500/10 resize-none" required />
                </div>

                <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-white py-6 text-lg rounded-xl transition-all" disabled={loading}>
                  {loading ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact02Page;