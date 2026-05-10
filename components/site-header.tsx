"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavLink = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  navLinks: NavLink[];
  whatsappUrl: string;
};

export function SiteHeader({ navLinks, whatsappUrl }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", closeOnDesktop);

    return () => {
      mediaQuery.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/55 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a className="font-mono text-xs tracking-[0.2em] text-cyan-200" href="#inicio" onClick={closeMenu}>
          ANDERSON.DIAS
        </a>

        <div className="hidden items-center gap-3 md:flex md:gap-5">
          <nav className="flex items-center gap-1 text-[1.05rem] text-muted-foreground">
            {navLinks.map((link) => (
              <a
                className="rounded-md px-2.5 py-1.5 transition-all duration-200 hover:bg-white/7 hover:text-foreground"
                href={link.href}
                key={`${link.label}-${link.href}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            asChild
            className="h-11 rounded-full bg-emerald-400 px-5 text-base font-semibold text-black hover:bg-emerald-300"
          >
            <a href={whatsappUrl} rel="noopener noreferrer" target="_blank">
              <WhatsAppIcon className="mr-1.5 size-4" />
              Chamar no WhatsApp
            </a>
          </Button>
        </div>

        <Button
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          className="size-10 rounded-full border border-white/20 bg-white/5 text-foreground hover:bg-white/12 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          size="icon"
          type="button"
          variant="ghost"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      <div
        className={cn(
          "grid border-t border-white/10 bg-background/95 transition-all duration-300 md:hidden",
          isMenuOpen
            ? "pointer-events-auto grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0",
        )}
        id="mobile-menu"
      >
        <div className="overflow-hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <a
                className="rounded-lg px-3 py-2 text-base text-muted-foreground transition-all duration-200 hover:bg-white/7 hover:text-foreground"
                href={link.href}
                key={`mobile-${link.label}-${link.href}`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mx-auto w-full max-w-6xl px-4 pb-4 sm:px-6 sm:pb-5">
            <Button
              asChild
              className="h-11 w-full rounded-full bg-emerald-400 px-5 text-base font-semibold text-black hover:bg-emerald-300"
            >
              <a href={whatsappUrl} onClick={closeMenu} rel="noopener noreferrer" target="_blank">
                <WhatsAppIcon className="mr-1.5 size-4" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
