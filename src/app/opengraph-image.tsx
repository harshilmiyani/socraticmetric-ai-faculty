import { ImageResponse } from "next/og";

export const alt = "SocraticMetric AI — Verify Authentic Understanding";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #1F2A44 0%, #163460 55%, #0f2440 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#3370F7",
            }}
          />
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#9BB8FF",
            }}
          >
            Socratic Metric™
          </span>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            maxWidth: 900,
            marginBottom: 28,
          }}
        >
          Verify Authentic Understanding in the AI Era
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.45,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 820,
          }}
        >
          Live oral assessment for education, enterprise, and government.
        </div>
      </div>
    ),
    { ...size },
  );
}
