"use client";

import { useEffect } from "react";

import { BASE_PATH } from "@/lib/site";

const SW_VERSION = process.env.NEXT_PUBLIC_SW_VERSION ?? "v1";

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    if (window.location.protocol !== "https:" && window.location.hostname !== "localhost") return;

    const swPath = `${BASE_PATH}/sw.js` || "/sw.js";
    const scope = BASE_PATH ? `${BASE_PATH}/` : "/";

    navigator.serviceWorker
      .register(swPath, { scope })
      .then((registration) => registration.update())
      .catch(() => {
        // Silent fail keeps hydration stable in restrictive environments.
      });
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    const updateController = () => {
      if (!navigator.serviceWorker.controller) return;

      navigator.serviceWorker.controller.postMessage({
        type: "SW_VERSION",
        version: SW_VERSION,
      });
    };

    navigator.serviceWorker.ready.then(updateController).catch(() => {
      // Best effort only.
    });
  }, []);

  return null;
}
