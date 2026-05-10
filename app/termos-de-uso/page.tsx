import type { Metadata } from "next";
import Link from "next/link";
import { LINKEDIN_URL, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de uso do site com regras de navegação, propriedade intelectual, limitações de responsabilidade e contato.",
  alternates: {
    canonical: "/termos-de-uso",
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="page-shell">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
        <Link className="text-sm text-cyan-200 transition-colors hover:text-cyan-100" href="/">
          ← Voltar para a página inicial
        </Link>

        <section className="glass-card rounded-2xl border border-white/10 p-6 sm:p-8">
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Termos de Uso</h1>
          <p className="mt-2 text-sm text-muted-foreground">Última atualização: 10 de maio de 2026.</p>

          <div className="mt-6 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">1. Aceitação dos termos</h2>
              <p>
                Ao acessar este site, você concorda com estes Termos de Uso e com a Política de Privacidade. Caso não concorde,
                recomenda-se interromper a navegação.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">2. Objetivo do site</h2>
              <p>
                Este site apresenta serviços de desenvolvimento de software, landing pages, integrações e consultoria técnica,
                além de canais de contato profissional.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">3. Propriedade intelectual</h2>
              <p>
                Textos, layout, identidade visual e materiais publicados neste site são protegidos por direitos autorais e não
                podem ser copiados, reproduzidos ou distribuídos sem autorização prévia.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">4. Uso permitido</h2>
              <p>É proibido utilizar este site para atividades ilícitas, tentativas de invasão, fraude ou coleta indevida de dados.</p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">5. Limitação de responsabilidade</h2>
              <p>
                As informações deste site têm caráter informativo e comercial. Não há garantia de disponibilidade contínua, ausência
                de erros ou adequação a finalidades específicas sem avaliação técnica individual.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">6. Links para terceiros</h2>
              <p>
                Este site pode conter links para plataformas externas. O conteúdo e as políticas desses ambientes são de
                responsabilidade de seus respectivos operadores.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">7. Atualizações</h2>
              <p>
                Estes termos podem ser alterados a qualquer momento, com publicação da versão atualizada nesta página.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">8. Contato</h2>
              <p>
                Dúvidas sobre estes Termos de Uso podem ser enviadas por{" "}
                <a
                  className="text-cyan-200 underline-offset-4 transition-colors hover:text-cyan-100 hover:underline"
                  href={WHATSAPP_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WhatsApp
                </a>{" "}
                ou{" "}
                <a
                  className="text-cyan-200 underline-offset-4 transition-colors hover:text-cyan-100 hover:underline"
                  href={LINKEDIN_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
                .
              </p>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
