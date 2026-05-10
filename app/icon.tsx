import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(155deg, #071727 0%, #0a2a40 100%)",
          borderRadius: "14px",
          border: "1px solid rgba(165, 243, 252, 0.35)",
          color: "#a5f3fc",
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: "0.04em",
        }}
      >
        <span>AD</span>
      </div>
    ),
    size
  );
}
