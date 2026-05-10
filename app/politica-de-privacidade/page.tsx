import type { Metadata } from "next";
import Link from "next/link";
import { LINKEDIN_URL, SITE_URL, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de privacidade com diretrizes de coleta, uso, cookies e compartilhamento de dados em conformidade com boas práticas para Google Ads e AdSense.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="page-shell">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
        <Link className="text-sm text-cyan-200 transition-colors hover:text-cyan-100" href="/">
          ← Voltar para a página inicial
        </Link>

        <section className="glass-card rounded-2xl border border-white/10 p-6 sm:p-8">
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Política de Privacidade</h1>
          <p className="mt-2 text-sm text-muted-foreground">Última atualização: 10 de maio de 2026.</p>

          <div className="mt-6 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">1. Finalidade desta política</h2>
              <p>
                Esta política explica como dados pessoais podem ser coletados, utilizados e protegidos ao navegar neste site,
                incluindo informações relacionadas à mensuração de tráfego, desempenho e exibição de anúncios.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">2. Dados que podem ser coletados</h2>
              <ul className="mt-2 space-y-2">
                <li>Dados de navegação: IP, navegador, dispositivo, páginas visitadas e tempo de sessão.</li>
                <li>Dados de contato enviados voluntariamente pelo usuário em canais como WhatsApp e LinkedIn.</li>
                <li>Dados técnicos para segurança, prevenção de fraude e melhoria de experiência.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">3. Cookies e tecnologias similares</h2>
              <p>
                Este site pode utilizar cookies e identificadores para funcionamento, análise e publicidade. Parceiros
                terceiros, incluindo o Google, podem usar cookies para exibir e medir anúncios.
              </p>
              <p className="mt-2">
                Saiba mais sobre como o Google utiliza dados em sites parceiros:{" "}
                <a
                  className="text-cyan-200 underline-offset-4 transition-colors hover:text-cyan-100 hover:underline"
                  href="https://policies.google.com/technologies/partner-sites?hl=pt-BR"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  policies.google.com/technologies/partner-sites
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">4. Base legal e consentimento</h2>
              <p>
                O tratamento de dados ocorre com base em consentimento, execução de serviços, legítimo interesse e cumprimento
                de obrigações legais, conforme aplicável, incluindo requisitos de privacidade para publicidade digital e LGPD.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">5. Compartilhamento de informações</h2>
              <p>
                Dados podem ser compartilhados com fornecedores de infraestrutura, segurança, analytics e publicidade, apenas no
                limite necessário para prestação do serviço, medição de desempenho e conformidade regulatória.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">6. Direitos do titular</h2>
              <p>
                Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade ou exclusão de
                dados pessoais, observados os limites legais.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">7. Contato</h2>
              <p>
                Para solicitações sobre privacidade e proteção de dados, entre em contato por{" "}
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

            <section>
              <h2 className="font-heading text-lg font-semibold text-foreground">8. Alterações desta política</h2>
              <p>
                Esta política pode ser atualizada periodicamente. A versão mais recente será sempre publicada nesta URL:
                <span className="font-mono text-xs text-cyan-200"> {SITE_URL}/politica-de-privacidade</span>.
              </p>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
