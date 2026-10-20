import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Filmmaker. Jonnathan Sánchez · Videógrafo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "linear-gradient(135deg, #071f35 0%, #0b3559 65%, #18334a 100%)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "58px 72px 52px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#91a6b6",
            display: "flex",
            fontSize: 21,
            fontWeight: 650,
            justifyContent: "space-between",
            letterSpacing: 3,
          }}
        >
          <span>PORTAFOLIO AUDIOVISUAL</span>
          <span>VIDEO · COLOMBIA</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              alignItems: "baseline",
              display: "flex",
              fontSize: 156,
              fontWeight: 800,
              letterSpacing: -10,
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            <span>Filmmaker</span>
            <span style={{ color: "#ed6b1d" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 8,
              marginTop: 22,
            }}
          >
            <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: -1 }}>
              Jonnathan Sánchez
            </span>
            <span style={{ color: "#b6c6d1", fontSize: 22, marginTop: 8 }}>
              Filmmaker · Videógrafo
            </span>
          </div>
        </div>
        <div
          style={{
            background: "linear-gradient(90deg, #ed6b1d 0%, #ed6b1d 18%, #476073 18%, #476073 100%)",
            display: "flex",
            height: 3,
            width: "100%",
          }}
        />
      </div>
    ),
    size,
  );
}
