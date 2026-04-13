import { useState, useEffect, FC, MouseEvent } from "react";
import { ACCENT, BG, SURFACE, BORDER, TEXT, MUTED, FONTS } from "../../constants/theme";
import { marqueeItems } from "../../constants/data";
import { useBreakpoint } from "../../hooks/useBreakpoint";

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const HeroSection: FC<HeroProps> = ({ onNavigate }) => {
  const { isMobile } = useBreakpoint();
  const [glitchActive, setGlitchActive] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const repeated = [...marqueeItems, ...marqueeItems];

  return (
    <section
      id="about"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
        background: BG,
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${BORDER} 1px, transparent 1px),
            linear-gradient(90deg, ${BORDER} 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          opacity: 0.4,
          pointerEvents: "none" as const,
        }}
      />

      {/* Big decorative number */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            right: 40,
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: FONTS.display,
            fontSize: "clamp(120px, 20vw, 280px)",
            color: SURFACE,
            letterSpacing: -4,
            lineHeight: 1,
            userSelect: "none" as const,
            pointerEvents: "none" as const,
          }}
        >
          01
        </div>
      )}

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1, padding: `${isMobile ? "80px 20px 0" : "120px 40px 0"}`, flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 48 }}>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 12,
            color: ACCENT,
            letterSpacing: 4,
            marginBottom: 24,
            animation: "fadeUp 0.6s ease forwards",
          }}
        >
          FULL STACK DEVELOPER · DAEJEON, KR
        </div>

        {/* Glitch title */}
        <div style={{ position: "relative", display: "inline-block" }}>
          <h1
            style={{
              fontFamily: FONTS.display,
              fontSize: "clamp(64px, 12vw, 160px)",
              lineHeight: 0.9,
              letterSpacing: -2,
              color: TEXT,
              animation: "fadeUp 0.6s ease 0.1s both",
            }}
          >
            KIM
            <br />
            TAEHO
          </h1>
          {glitchActive && (
            <>
              <h1
                aria-hidden="true"
                style={{
                  fontFamily: FONTS.display,
                  fontSize: "clamp(64px, 12vw, 160px)",
                  lineHeight: 0.9,
                  letterSpacing: -2,
                  color: ACCENT,
                  position: "absolute",
                  inset: 0,
                  animation: "glitch 0.4s steps(1) forwards",
                  opacity: 0.8,
                }}
              >
                KIM
                <br />
                TAEHO
              </h1>
              <h1
                aria-hidden="true"
                style={{
                  fontFamily: FONTS.display,
                  fontSize: "clamp(64px, 12vw, 160px)",
                  lineHeight: 0.9,
                  letterSpacing: -2,
                  color: "#ff2d55",
                  position: "absolute",
                  inset: 0,
                  animation: "glitch 0.4s steps(1) 0.05s forwards",
                  opacity: 0.6,
                }}
              >
                KIM
                <br />
                TAEHO
              </h1>
            </>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: 40,
            flexWrap: "wrap",
            gap: 24,
            animation: "fadeUp 0.6s ease 0.2s both",
          }}
        >
          <p
            style={{
              fontFamily: FONTS.sans,
              fontSize: "clamp(14px, 2vw, 18px)",
              color: MUTED,
              maxWidth: 480,
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            풀스택 개발자 & 대학원 연구자.
            <br />
            모바일부터 백엔드, 인프라까지 프로덕트를 만듭니다.
          </p>

          <div style={{ display: "flex", gap: 16 }}>
            <button
              data-hover
              onClick={() => onNavigate?.("info")}
              style={{
                fontFamily: FONTS.mono,
                fontSize: 12,
                padding: "12px 24px",
                background: ACCENT,
                color: "#000",
                fontWeight: 700,
                letterSpacing: 2,
                transition: "transform 0.15s",
                border: "none",
                cursor: "none",
              }}
              onMouseEnter={(e: MouseEvent<HTMLButtonElement>) =>
                (e.currentTarget.style.transform = "translate(-3px,-3px)")
              }
              onMouseLeave={(e: MouseEvent<HTMLButtonElement>) =>
                (e.currentTarget.style.transform = "translate(0,0)")
              }
            >
              INFO →
            </button>
            <button
              data-hover
              onClick={() => onNavigate?.("contact")}
              style={{
                fontFamily: FONTS.mono,
                fontSize: 12,
                padding: "12px 24px",
                border: `1px solid ${BORDER}`,
                color: TEXT,
                letterSpacing: 2,
                transition: "border-color 0.15s, transform 0.15s",
                background: "none",
                cursor: "none",
              }}
              onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.borderColor = ACCENT;
                e.currentTarget.style.transform = "translate(-3px,-3px)";
              }}
              onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.borderColor = BORDER;
                e.currentTarget.style.transform = "translate(0,0)";
              }}
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Bar */}
      <div
        style={{
          overflow: "hidden",
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          background: ACCENT,
          padding: "12px 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 48,
            animation: "marquee 18s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {repeated.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: FONTS.mono,
                fontSize: 12,
                fontWeight: 700,
                color: "#000",
                letterSpacing: 3,
              }}
            >
              {item} ·
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          padding: `16px ${isMobile ? "20px" : "40px"}`,
          borderTop: `1px solid ${BORDER}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          position: "relative",
          zIndex: 1,
        }}
      >
        <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: MUTED, letterSpacing: 1 }}>
          © 2026 KIM TAEHO
        </span>
        <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: MUTED, letterSpacing: 1 }}>
          DESIGNED & BUILT BY KIM TAEHO
        </span>
      </footer>

      {/* Scanline overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(transparent 50%, rgba(0,0,0,0.03) 50%)",
          backgroundSize: "100% 4px",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />
    </section>
  );
};

export default HeroSection;
