import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  Gauge,
  Layers,
  MessageCircle,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import profilePhoto from "@/imagens/foto-anderson-dias.jpeg";
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

const LINKEDIN_URL = "https://www.linkedin.com/in/anderson-dias/";
const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/5584999999999";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anderson-dias.dev";

const metrics = [
  {
    value: "95+",
    label: "Meta de performance no Lighthouse",
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
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "shadcn/ui",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Integrações com APIs",
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
      "@type": "Person",
      name: "Anderson Dias",
      jobTitle: "Desenvolvedor Full Stack",
      url: SITE_URL,
      image: `${SITE_URL}/images/anderson-dias-profile.jpg`,
      sameAs: [LINKEDIN_URL],
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
      name: "Serviços de desenvolvimento de software - Anderson Dias",
      description:
        "Desenvolvimento de landing pages, sistemas web e integrações com foco em performance, SEO técnico e resultado de negócio.",
      provider: {
        "@type": "Person",
        name: "Anderson Dias",
      },
      areaServed: "BR",
      url: SITE_URL,
    },
  ],
};

export default function Home() {
  return (
    <div className="page-shell">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/55 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a className="font-mono text-xs tracking-[0.2em] text-cyan-200" href="#inicio">
            ANDERSON.DIAS
          </a>
          <div className="ml-4 flex items-center gap-3 md:gap-5">
            <nav className="hidden items-center gap-1 text-[1.05rem] text-muted-foreground md:flex">
              <a
                className="rounded-md px-2.5 py-1.5 transition-all duration-200 hover:bg-white/7 hover:text-foreground"
                href="#apresentacao"
              >
                Sobre
              </a>
              <a
                className="rounded-md px-2.5 py-1.5 transition-all duration-200 hover:bg-white/7 hover:text-foreground"
                href="#servicos"
              >
                Serviços
              </a>
              <a
                className="rounded-md px-2.5 py-1.5 transition-all duration-200 hover:bg-white/7 hover:text-foreground"
                href="#apresentacao"
              >
                Perfis
              </a>
              <a
                className="rounded-md px-2.5 py-1.5 transition-all duration-200 hover:bg-white/7 hover:text-foreground"
                href="#projetos"
              >
                Projetos
              </a>
              <a
                className="rounded-md px-2.5 py-1.5 transition-all duration-200 hover:bg-white/7 hover:text-foreground"
                href="#diferenciais"
              >
                Diferenciais
              </a>
              <a
                className="rounded-md px-2.5 py-1.5 transition-all duration-200 hover:bg-white/7 hover:text-foreground"
                href="#faq"
              >
                FAQ
              </a>
            </nav>
            <Button
              asChild
              className="h-10 rounded-full bg-emerald-400 px-5 text-base font-semibold text-black hover:bg-emerald-300"
            >
              <a href={WHATSAPP_URL} rel="noreferrer" target="_blank">
                <MessageCircle className="mr-1.5 size-4" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 md:py-16" id="inicio">
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Badge className="bg-cyan-500/12 text-cyan-200 ring-1 ring-cyan-500/30" variant="secondary">
              Disponível para novos projetos em 2026
            </Badge>
            <h1 className="max-w-3xl font-heading text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
              Desenvolvedor Full Stack para construir software com foco em crescimento real do seu negócio.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Planejo e implemento landing pages, sistemas web e integrações de ponta a ponta. Trabalho com
              performance, SEO técnico e arquitetura limpa para transformar tráfego em oportunidade comercial.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="h-11 bg-emerald-400 px-6 text-base font-semibold text-black hover:bg-emerald-300"
              >
                <a href={WHATSAPP_URL} rel="noreferrer" target="_blank">
                  <MessageCircle className="mr-1.5 size-4" />
                  Chamar no WhatsApp
                  <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button asChild className="h-11 px-5" variant="outline">
                <a href="#projetos">Ver soluções</a>
              </Button>
            </div>
          </div>

          <Card className="glass-card border-white/10 p-1">
            <CardContent className="p-2.5 sm:p-3">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <Image
                  alt="Foto de Anderson Dias, desenvolvedor full stack"
                  className="h-auto w-full object-cover"
                  placeholder="blur"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  src={profilePhoto}
                />
              </div>
              <div className="mt-4 space-y-2">
                <p className="font-heading text-lg font-medium">Anderson Dias</p>
                <p className="text-sm text-muted-foreground">Desenvolvedor Full Stack</p>
                <p className="font-mono text-xs tracking-wide text-cyan-200">Disponível para contratação remota</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 md:auto-rows-fr md:grid-cols-3">
          {metrics.map((metric) => (
            <Card className="glass-card-soft h-full min-h-[160px] border-white/10" key={metric.label}>
              <CardContent className="flex h-full flex-col space-y-2 pt-5">
                <p className="font-heading text-2xl font-semibold text-cyan-100">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="space-y-6" id="stack">
          <div className="space-y-2">
            <p className="font-mono text-xs tracking-[0.2em] text-cyan-200">STACK</p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight">Tecnologias usadas no dia a dia</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <Badge className="border-white/15 bg-white/8 text-foreground" key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2" id="apresentacao">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Apresentação profissional</CardTitle>
              <CardDescription>
                Desenvolvimento completo: da modelagem da solução à entrega final em produção.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Planejamento técnico com foco em impacto comercial e clareza de metas.</p>
              <p>Implementação orientada a acessibilidade, performance e SEO técnico.</p>
              <p>Arquitetura preparada para evolução sem perda de estabilidade.</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>Presença profissional</CardTitle>
              <CardDescription>Canal principal para networking, histórico técnico e contratação.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl border border-white/10 bg-white/8 p-4">
                <p className="font-medium">LinkedIn</p>
                <p className="mt-1 text-sm text-muted-foreground">Acompanhe minha trajetória e entre em contato por lá.</p>
                <Button asChild className="mt-4 bg-cyan-500 text-black hover:bg-cyan-400" size="sm">
                  <a href={LINKEDIN_URL} rel="noreferrer" target="_blank">
                    Ver perfil
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6" id="servicos">
          <div className="space-y-2">
            <p className="font-mono text-xs tracking-[0.2em] text-cyan-200">SERVIÇOS</p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight">
              Desenvolvimento, SEO técnico e infraestrutura
            </h2>
            <p className="max-w-3xl text-muted-foreground">
              Entregas de ponta a ponta para empresas que precisam crescer com previsibilidade técnica.
            </p>
          </div>
          <div className="grid gap-4 md:auto-rows-fr md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card className="glass-card h-full border-white/10" key={service.title}>
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
              );
            })}
          </div>
        </section>

        <section className="space-y-6" id="projetos">
          <div className="space-y-2">
            <p className="font-mono text-xs tracking-[0.2em] text-cyan-200">PROJETOS</p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight">Soluções que posso implementar</h2>
            <p className="max-w-3xl text-muted-foreground">
              Exemplos de escopos com alto impacto para aquisição de clientes e eficiência operacional.
            </p>
          </div>

          <div className="grid gap-4 md:auto-rows-fr md:grid-cols-3">
            {projects.map((project) => (
              <Card className="glass-card h-full border-white/10" key={project.title}>
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
            ))}
          </div>
        </section>

        <section className="space-y-6" id="diferenciais">
          <div className="space-y-2">
            <p className="font-mono text-xs tracking-[0.2em] text-cyan-200">DIFERENCIAIS</p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight">Engenharia aplicada ao resultado</h2>
          </div>
          <div className="grid gap-4 md:auto-rows-fr md:grid-cols-3">
            {differentials.map((item) => {
              const Icon = item.icon;

              return (
                <Card className="glass-card-soft h-full border-white/10" key={item.title}>
                  <CardContent className="space-y-3 pt-5">
                    <div className="inline-flex size-9 items-center justify-center rounded-lg bg-cyan-500/12 text-cyan-200 ring-1 ring-cyan-500/30">
                      <Icon className="size-4" />
                    </div>
                    <h3 className="font-heading text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="space-y-6" id="faq">
          <div className="space-y-2">
            <p className="font-mono text-xs tracking-[0.2em] text-cyan-200">FAQ</p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight">
              Perguntas frequentes sobre contratação
            </h2>
          </div>
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
        </section>

        <section className="glass-card rounded-2xl border border-cyan-500/20 p-8 text-center">
          <p className="font-mono text-xs tracking-[0.2em] text-cyan-200">PRÓXIMO PROJETO</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance">
            Vamos construir sua próxima solução digital?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Me chame no WhatsApp para conversarmos sobre escopo, prioridades técnicas e prazo realista de entrega.
          </p>
          <Button
            asChild
            className="mt-6 h-11 bg-emerald-400 px-6 text-base font-semibold text-black hover:bg-emerald-300"
          >
            <a href={WHATSAPP_URL} rel="noreferrer" target="_blank">
              <MessageCircle className="mr-1.5 size-4" />
              Iniciar conversa
              <ArrowRight className="ml-1" />
            </a>
          </Button>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Anderson Dias. Todos os direitos reservados.</p>
          <a className="transition-colors hover:text-foreground" href={LINKEDIN_URL} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
