const DEFAULT_SITE_URL = "https://anderson-dias.dev";
const DEFAULT_WHATSAPP_URL = "https://wa.me/5584992154465";

export const SITE_NAME = "Anderson Dias | Desenvolvedor Full Stack";
export const SITE_DESCRIPTION =
  "Desenvolvedor Full Stack focado em landing pages, sistemas web e integrações para empresas que precisam de performance, SEO técnico e software orientado a resultado.";

export const LINKEDIN_URL = "https://www.linkedin.com/in/anderson-dias-bb7b3122b/";
export const INSTAGRAM_URL = "https://www.instagram.com/anderdias_";
export const PROFILE_IMAGE_PATH = "/images/anderson-dias-profile.jpg";

function normalizeBasePath(value: string | undefined) {
  const trimmed = value?.trim();

  if (!trimmed || trimmed === "/") {
    return "";
  }

  return `/${trimmed.replace(/^\/+|\/+$/g, "")}`;
}

function getSafeHttpsUrl(value: string | undefined, fallback: string) {
  const candidate = value?.trim();

  if (!candidate) {
    return fallback;
  }

  try {
    const url = new URL(candidate);

    if (url.protocol === "https:") {
      return url.toString().replace(/\/$/, "");
    }
  } catch {
    return fallback;
  }

  return fallback;
}

export const BASE_PATH = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);
export const SITE_URL = getSafeHttpsUrl(process.env.NEXT_PUBLIC_SITE_URL, DEFAULT_SITE_URL);
export const WHATSAPP_URL = getSafeHttpsUrl(
  process.env.NEXT_PUBLIC_WHATSAPP_URL,
  DEFAULT_WHATSAPP_URL
);

export function withBasePath(path: `/${string}`) {
  if (path === "/") {
    return BASE_PATH || "/";
  }

  return `${BASE_PATH}${path}`;
}

export function absoluteUrl(path: `/${string}` = "/") {
  if (path === "/") {
    return SITE_URL;
  }

  return `${SITE_URL}${path}`;
}
