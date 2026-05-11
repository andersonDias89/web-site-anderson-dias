"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const selector = "[data-reveal]";
    const seen = new WeakSet<Element>();
    const show = (element: Element) => element.classList.add("is-visible");
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const shouldSkipMotion = mediaQuery.matches || !("IntersectionObserver" in window);

    const observer = shouldSkipMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;

              show(entry.target);
              observer?.unobserve(entry.target);
            });
          },
          {
            threshold: 0.14,
            rootMargin: "0px 0px -8% 0px",
          }
        );

    const register = (element: HTMLElement) => {
      if (seen.has(element)) return;

      seen.add(element);

      if (shouldSkipMotion) {
        show(element);
        return;
      }

      observer?.observe(element);
    };

    const registerAll = (root: ParentNode = document) => {
      root.querySelectorAll<HTMLElement>(selector).forEach(register);
    };

    registerAll();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;

          if (node.matches(selector)) {
            register(node);
          }

          registerAll(node);
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
