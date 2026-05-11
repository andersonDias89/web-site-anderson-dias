import { ImageResponse } from "next/og";

export const SOCIAL_IMAGE_SIZE = {
  width: 1200,
  height: 630,
};

export function createSocialImageResponse() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 18% 8%, rgba(56,189,248,0.22), transparent 42%), radial-gradient(circle at 90% 10%, rgba(45,212,191,0.22), transparent 34%), linear-gradient(180deg, #061222 0%, #04101c 100%)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "#f5fbff",
          padding: "56px 62px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            border: "1px solid rgba(34,211,238,0.5)",
            borderRadius: "999px",
            background: "rgba(6, 182, 212, 0.16)",
            color: "rgb(165 243 252)",
            fontSize: 28,
            fontWeight: 700,
            padding: "12px 24px",
            letterSpacing: "0.02em",
          }}
        >
          Disponivel para novos projetos
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <p style={{ margin: 0, fontSize: 76, fontWeight: 700, lineHeight: 1.02 }}>
            Anderson Dias
          </p>
          <p style={{ margin: 0, fontSize: 46, fontWeight: 600, lineHeight: 1.1, maxWidth: 980 }}>
            Desenvolvedor Full Stack para software, SEO tecnico e performance
          </p>
        </div>
        <p style={{ margin: 0, fontSize: 30, color: "rgba(201, 233, 247, 0.9)", fontWeight: 500 }}>
          Landing pages, sistemas web e integracoes com foco em resultado
        </p>
      </div>
    ),
    SOCIAL_IMAGE_SIZE
  );
}
