import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Gauge,
  Layers,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeroTypewriter } from "@/components/hero-typewriter";
import { InstagramIcon, LinkedinIcon } from "@/components/icons/social-icons";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import {
  INSTAGRAM_URL,
  LINKEDIN_URL,
  PROFILE_IMAGE_PATH,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_URL,
  absoluteUrl,
  withBasePath,
} from "@/lib/site";

const PRIVACY_POLICY_PATH = "/politica-de-privacidade";
const TERMS_OF_USE_PATH = "/termos-de-uso";
const HERO_TITLE =
  "Desenvolvedor Full Stack para construir software com foco em crescimento real do seu negócio.";
const NAV_LINKS = [
  { href: "#apresentacao", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#apresentacao", label: "Perfis" },
  { href: "#projetos", label: "Projetos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#faq", label: "FAQ" },
];

const metrics = [
  {
    value: "Escopo Claro",
    label: "Planejamento técnico e comercial desde o início para reduzir retrabalho.",
  },
  {
    value: "Mobile First",
    label: "Arquitetura pensada para conversão em dispositivos móveis",
  },
  {
    value: "SEO Técnico",
    label: "Base preparada para indexação e tráfego orgânico",
  },
];

const stack = [
  "Next.js",
  "Node.js",
  "TypeScript",
  "AWS",
  "Docker",
  "JavaScript",
  "React",
  "Terraform",
];

const services = [
  {
    icon: Rocket,
    title: "Landing pages e sites institucionais",
    description:
      "Páginas orientadas a conversão, com copy clara, carregamento rápido e rastreamento de eventos para marketing.",
    highlights: [
      "Estrutura semântica com foco em SEO",
      "Core Web Vitals e experiência mobile",
      "Preparação para Analytics e Tag Manager",
    ],
  },
  {
    icon: Layers,
    title: "Sistemas web, APIs e integrações",
    description:
      "Construção de sistemas sob medida, com fluxo de negócio bem definido e integração com plataformas externas.",
    highlights: [
      "Back-end robusto para regras de negócio",
      "Front-end moderno com foco em usabilidade",
      "Integrações com CRMs, gateways e APIs SaaS",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Arquitetura, deploy e evolução contínua",
    description:
      "Organização da base técnica para escalar com segurança, estabilidade e facilidade de manutenção.",
    highlights: [
      "Deploy com fluxo previsível e versionamento",
      "Monitoramento de erros e performance",
      "Refatoração para ganho de escala",
    ],
  },
];

const projects = [
  {
    title: "Landing page de alta conversão",
    description:
      "Estrutura completa para captação de leads com SEO técnico, carregamento rápido e CTA direto para contato.",
    tags: ["Next.js", "SEO", "Performance", "Analytics"],
  },
  {
    title: "Sistema web para operação interna",
    description:
      "Painel administrativo com autenticação, gestão de dados e APIs para automatizar processos do dia a dia.",
    tags: ["React", "Node.js", "API REST", "Banco de dados"],
  },
  {
    title: "Integrações e automações de negócio",
    description:
      "Conexão entre ferramentas comerciais e operacionais para reduzir tarefas manuais e aumentar produtividade.",
    tags: ["Webhooks", "Integrações", "Automação", "Escalabilidade"],
  },
];

const differentials = [
  {
    icon: BriefcaseBusiness,
    title: "Visão de negócio",
    description:
      "Cada decisão técnica é pensada para apoiar metas comerciais, retenção e crescimento.",
  },
  {
    icon: Gauge,
    title: "Performance como prioridade",
    description:
      "Código enxuto, imagens otimizadas e arquitetura preparada para manter velocidade em produção.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade e previsibilidade",
    description:
      "Processo com escopo claro, etapas objetivas e entregas que reduzem risco de retrabalho.",
  },
];

const faqItems = [
  {
    question: "Quais tipos de projeto você desenvolve?",
    answer:
      "Atuo com landing pages, sites institucionais, sistemas web sob medida, APIs e integrações para operações comerciais e internas.",
  },
  {
    question: "Você trabalha com SEO técnico e performance?",
    answer:
      "Sim. Estruturo os projetos com foco em semântica HTML, performance real, dados estruturados e boas práticas de indexação.",
  },
  {
    question: "Como funciona o início de um novo projeto?",
    answer:
      "Começamos com diagnóstico rápido do cenário, definição de escopo, prioridades e cronograma de entregas por etapas.",
  },
  {
    question: "Você faz manutenção após a entrega?",
    answer:
      "Sim. Posso continuar com melhorias contínuas, evolução funcional, ajustes de performance e suporte técnico em produção.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "pt-BR",
      description: SITE_DESCRIPTION,
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "pt-BR",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      primaryImageOfPage: absoluteUrl(PROFILE_IMAGE_PATH),
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Anderson Dias",
      jobTitle: "Desenvolvedor Full Stack",
      url: SITE_URL,
      image: absoluteUrl(PROFILE_IMAGE_PATH),
      sameAs: [LINKEDIN_URL, INSTAGRAM_URL],
      knowsAbout: [
        "Next.js",
        "React",
        "Node.js",
        "SEO técnico",
        "APIs",
        "Arquitetura de software",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Anderson Dias - Desenvolvimento de software",
      description:
        "Desenvolvimento de landing pages, sistemas web e integrações com foco em performance, SEO técnico e resultado de negócio.",
      provider: {
        "@id": `${SITE_URL}/#person`,
      },
      areaServed: {
        "@type": "Country",
        name: "Brasil",
      },
      serviceType: [
        "Desenvolvimento de landing pages",
        "Desenvolvimento de sistemas web",
        "Integrações de APIs",
        "SEO técnico",
      ],
      url: SITE_URL,
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="page-shell">
      <SiteHeader navLinks={NAV_LINKS} whatsappUrl={WHATSAPP_URL} />

      <main
        aria-label="Landing page de serviços de desenvolvimento de software"
        className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-8 sm:px-6 sm:py-10 md:gap-16 md:py-16"
        id="inicio"
      >
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />

        <section className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal delay={0.04}>
            <div className="space-y-5 sm:space-y-6">
              <Badge className="bg-cyan-500/12 text-xs text-cyan-200 ring-1 ring-cyan-500/30 sm:text-sm" variant="secondary">
                Disponível para novos projetos em 2026
              </Badge>
              <h1 className="max-w-3xl font-heading text-[2.45rem] leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl sm:leading-tight">
                <HeroTypewriter text={HERO_TITLE} />
              </h1>
              <p className="max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground sm:text-lg">
                Planejo e implemento landing pages, sistemas web e integrações de ponta a ponta. Trabalho com
                performance, SEO técnico e arquitetura limpa para transformar tráfego em oportunidade comercial.
              </p>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  asChild
                  className="h-11 w-full bg-emerald-400 px-6 text-base font-semibold text-black hover:bg-emerald-300 sm:w-auto"
                >
                  <a href={WHATSAPP_URL} rel="noopener noreferrer" target="_blank">
                    <WhatsAppIcon className="mr-1.5 size-4" />
                    Chamar no WhatsApp
                    <ArrowRight className="ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Card className="glass-card border-white/10 p-1">
              <CardContent className="p-2.5 sm:p-3">
                <div className="relative overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    alt="Foto de Anderson Dias, desenvolvedor full stack"
                    className="h-auto w-full object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    src={withBasePath(PROFILE_IMAGE_PATH)}
                    width={1086}
                    height={1448}
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-heading text-lg font-medium">Anderson Dias</p>
                    <div className="flex items-center gap-2">
                      <a
                        aria-label="LinkedIn de Anderson Dias"
                        className="inline-flex size-8 items-center justify-center rounded-md border border-white/15 bg-white/8 text-cyan-100 transition-colors hover:bg-white/14 hover:text-foreground"
                        href={LINKEDIN_URL}
                        rel="me noopener noreferrer"
                        target="_blank"
                      >
                        <LinkedinIcon className="size-3.5" />
                      </a>
                      <a
                        aria-label="Instagram de Anderson Dias"
                        className="inline-flex size-8 items-center justify-center rounded-md border border-white/15 bg-white/8 text-cyan-100 transition-colors hover:bg-white/14 hover:text-foreground"
                        href={INSTAGRAM_URL}
                        rel="me noopener noreferrer"
                        target="_blank"
                      >
                        <InstagramIcon className="size-3.5" />
                      </a>
                    </div>
                  </div>
                  <p className="font-mono text-xs tracking-wide text-cyan-200">Desenvolvedor Full Stack</p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </section>

        <section className="grid gap-3.5 md:auto-rows-fr md:grid-cols-3">
          {metrics.map((metric, index) => (
            <Reveal delay={index * 0.08} key={metric.label}>
              <Card className="glass-card-soft h-full min-h-[148px] border-white/10 md:min-h-[160px]">
                <CardContent className="flex h-full flex-col space-y-2 pt-5">
                  <p className="font-heading text-2xl font-semibold text-cyan-100">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </section>

        <Reveal delay={0.03}>
          <section className="space-y-5 sm:space-y-6" id="stack">
          <div className="space-y-2">
            <p className="font-mono text-xs tracking-[0.2em] text-cyan-200">STACK</p>
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">Tecnologias usadas no dia a dia</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {stack.map((item, index) => (
              <Badge
                className="border-emerald-300/30 bg-emerald-400/16 text-emerald-100 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.2)]"
                key={`${item}-${index}`}
                variant="outline"
              >
                {item}
              </Badge>
            ))}
          </div>
          </section>
        </Reveal>

        <section className="grid gap-6 md:auto-rows-fr md:grid-cols-2" id="apresentacao">
          <Reveal delay={0.02}>
            <Card className="glass-card h-full border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Apresentação profissional</CardTitle>
                <CardDescription>
                  Desenvolvimento completo: da modelagem da solução à entrega final em produção.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-cyan-300" />
                    <span>Planejamento técnico com foco em impacto comercial e clareza de metas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-cyan-300" />
                    <span>Implementação orientada a acessibilidade, performance e SEO técnico.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-cyan-300" />
                    <span>Arquitetura preparada para evolução sem perda de estabilidade.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.11}>
            <Card className="glass-card h-full border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Presença profissional</CardTitle>
                <CardDescription>
                  Canal principal para networking, histórico técnico e contratação.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="glass-card rounded-xl border border-white/10 p-4">
                  <p className="font-medium">Fluxo de trabalho</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 rounded-full bg-cyan-300" />
                      <span>Diagnóstico rápido para mapear prioridade e objetivo do projeto.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 rounded-full bg-cyan-300" />
                      <span>Execução em etapas curtas com visibilidade clara de cada entrega.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 rounded-full bg-cyan-300" />
                      <span>Publicação e evolução contínua com foco em performance real.</span>
                    </li>
                  </ul>
                  <Button asChild className="mt-4 bg-emerald-400 text-black hover:bg-emerald-300" size="sm">
                    <a href={WHATSAPP_URL} rel="noopener noreferrer" target="_blank">
                      <WhatsAppIcon className="mr-1.5 size-4" />
                      Iniciar conversa
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </section>

        <section className="space-y-6" id="servicos">
          <Reveal delay={0.02}>
            <div className="space-y-2">
              <p className="font-mono text-xs tracking-[0.2em] text-cyan-200">SERVIÇOS</p>
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                Desenvolvimento, SEO técnico e infraestrutura
              </h2>
              <p className="max-w-3xl text-muted-foreground">
                Entregas de ponta a ponta para empresas que precisam crescer com previsibilidade técnica.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 md:auto-rows-fr md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal delay={index * 0.08} key={service.title}>
                  <Card className="glass-card h-full border-white/10">
                    <CardHeader>
                      <div className="mb-2 inline-flex size-10 items-center justify-center rounded-xl bg-cyan-500/12 text-cyan-200 ring-1 ring-cyan-500/25">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {service.highlights.map((highlight) => (
                          <li className="flex items-start gap-2" key={highlight}>
                            <span className="mt-1 size-1.5 rounded-full bg-cyan-300" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="space-y-6" id="projetos">
          <Reveal delay={0.02}>
            <div className="space-y-2">
              <p className="font-mono text-xs tracking-[0.2em] text-cyan-200">PROJETOS</p>
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">Soluções que posso implementar</h2>
              <p className="max-w-3xl text-muted-foreground">
                Exemplos de escopos com alto impacto para aquisição de clientes e eficiência operacional.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 md:auto-rows-fr md:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal delay={index * 0.08} key={project.title}>
                <Card className="glass-card h-full border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge className="border-white/15 bg-white/8 text-foreground" key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="space-y-6" id="diferenciais">
          <Reveal delay={0.02}>
            <div className="space-y-2">
              <p className="font-mono text-xs tracking-[0.2em] text-cyan-200">DIFERENCIAIS</p>
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">Engenharia aplicada ao resultado</h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:auto-rows-fr md:grid-cols-3">
            {differentials.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal delay={index * 0.08} key={item.title}>
                  <Card className="glass-card-soft h-full border-white/10">
                    <CardContent className="space-y-3 pt-5">
                      <div className="inline-flex size-9 items-center justify-center rounded-lg bg-cyan-500/12 text-cyan-200 ring-1 ring-cyan-500/30">
                        <Icon className="size-4" />
                      </div>
                      <h3 className="font-heading text-lg font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="space-y-6" id="faq">
          <Reveal delay={0.02}>
            <div className="space-y-2">
              <p className="font-mono text-xs tracking-[0.2em] text-cyan-200">FAQ</p>
              <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                Perguntas frequentes sobre contratação
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="glass-card border-white/10">
              <CardContent className="pt-4">
                <Accordion collapsible type="single">
                  {faqItems.map((item) => (
                    <AccordionItem key={item.question} value={item.question}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </Reveal>
        </section>

        <Reveal delay={0.04}>
          <section className="glass-card rounded-2xl border border-cyan-500/20 px-5 py-7 text-center sm:p-8">
            <p className="font-mono text-xs tracking-[0.2em] text-cyan-200">PRÓXIMO PROJETO</p>
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              Vamos construir sua próxima solução digital?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Me chame no WhatsApp para conversarmos sobre escopo, prioridades técnicas e prazo realista de entrega.
            </p>
            <Button
              asChild
              className="mt-6 h-11 bg-emerald-400 px-6 text-base font-semibold text-black hover:bg-emerald-300"
            >
              <a href={WHATSAPP_URL} rel="noopener noreferrer" target="_blank">
                <WhatsAppIcon className="mr-1.5 size-4" />
                Iniciar conversa
                <ArrowRight className="ml-1" />
              </a>
            </Button>
          </section>
        </Reveal>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Anderson Dias. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link className="transition-colors hover:text-foreground" href={PRIVACY_POLICY_PATH}>
              Política de Privacidade
            </Link>
            <Link className="transition-colors hover:text-foreground" href={TERMS_OF_USE_PATH}>
              Termos de Uso
            </Link>
            <a
              className="transition-colors hover:text-foreground"
              href={LINKEDIN_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
