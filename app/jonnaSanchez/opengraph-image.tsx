import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Jonnathan Sánchez · Realizador audiovisual";
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexGrow: 1,
            paddingTop: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 112,
              fontWeight: 750,
              letterSpacing: -6,
              lineHeight: 0.98,
            }}
          >
            <span>Jonnathan</span>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <span>Sánchez</span>
              <span style={{ color: "#ed6b1d" }}>.</span>
            </div>
          </div>
          <div
            style={{
              color: "#e9eef2",
              display: "flex",
              alignItems: "center",
              fontSize: 32,
              fontWeight: 500,
              marginTop: 24,
              letterSpacing: -0.5,
            }}
          >
            <span
              style={{
                background: "#ed6b1d",
                display: "flex",
                height: 3,
                width: 35,
                marginRight: 16,
              }}
            />
            <span>Realizador audiovisual</span>
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
