import { SOCIAL_IMAGE_SIZE, createSocialImageResponse } from "@/lib/social-image";

export const dynamic = "force-static";

export const alt = "Anderson Dias - Desenvolvedor Full Stack";
export const size = SOCIAL_IMAGE_SIZE;
export const contentType = "image/png";

export default function TwitterImage() {
  return createSocialImageResponse();
}
