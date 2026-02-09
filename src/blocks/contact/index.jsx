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

const Contact02Page = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
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

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8 lg:py-30">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full">
                <MailIcon />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <Link className="text-primary font-medium" href="mailto:ddchagas@gmail.com">
                  ddchagas.d1@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full">
                <PhoneIcon />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Telefone</h3>
                <Link className="text-primary font-medium" href="tel:+5511942766704">
                  +55 (11) 94276-6704
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full">
                <MapPinIcon />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Disponilidade</h3>
                <Link className="text-primary font-medium" href="tel:+5511942766704">
                  Remoto (todo Brasil) ou presencial em São Paulo/SP
                </Link>
              </div>
            </div>
          </div>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nome</Label>
                    <Input id="firstName" name="firstName" placeholder="Seu nome" className="mt-2 bg-white shadow-sm" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input id="lastName" name="lastName" placeholder="Seu sobrenome" className="mt-2 bg-white shadow-sm" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Seu email" className="mt-2 bg-white shadow-sm" required />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" name="message" placeholder="Sua mensagem" rows={5} className="mt-2 bg-white shadow-sm" required />
                </div>

                <Button type="submit" className="mt-4 w-full" size="lg" disabled={loading}>
                  {loading ? "Enviando..." : "Enviar"}
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
