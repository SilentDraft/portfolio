import { useState, FC } from "react";
import { ACCENT, SURFACE, BORDER, TEXT, MUTED, FONTS } from "../../constants/theme";
import { projects } from "../../constants/data";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const ProjectsSection: FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { isMobile } = useBreakpoint();

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        padding: `80px ${isMobile ? "20px" : "40px"}`,
        boxSizing: "border-box" as const,
        position: "relative",
      }}
    >
      {/* Decorative background text */}
      {!isMobile && (
        <div
          style={{
            position: "absolute",
            right: 40,
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: FONTS.display,
            fontSize: "clamp(120px, 18vw, 260px)",
            color: SURFACE,
            letterSpacing: -4,
            lineHeight: 1,
            userSelect: "none" as const,
            pointerEvents: "none" as const,
          }}
        >
          DEV
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 48,
          flexWrap: "wrap",
          gap: 16,
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontFamily: FONTS.display,
            fontSize: "clamp(48px, 8vw, 96px)",
            letterSpacing: -1,
            color: TEXT,
            lineHeight: 0.9,
          }}
        >
          SELECTED
          <br />
          <span style={{ color: ACCENT }}>PROJECTS</span>
        </h2>
        <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: MUTED, letterSpacing: 2 }}>
          03 / 05
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
        {projects.map((p, i) => (
          <a
            key={p.num}
            href={p.link}
            data-hover
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr auto" : "64px 1fr auto",
              alignItems: "center",
              gap: `0 ${isMobile ? "16px" : "32px"}`,
              padding: "28px 0",
              borderTop: `1px solid ${BORDER}`,
              transition: "padding 0.2s, background 0.2s",
              paddingLeft: hovered === i ? 16 : 0,
              background: hovered === i ? SURFACE : "transparent",
            }}
          >
            {!isMobile && (
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 11,
                  color: hovered === i ? ACCENT : MUTED,
                  letterSpacing: 2,
                  transition: "color 0.2s",
                }}
              >
                {p.num}
              </span>
            )}

            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 20, flexWrap: "wrap" }}>
                <span
                  style={{
                    fontFamily: FONTS.display,
                    fontSize: "clamp(28px, 4vw, 48px)",
                    letterSpacing: 1,
                    color: hovered === i ? ACCENT : TEXT,
                    transition: "color 0.2s",
                  }}
                >
                  {p.name}
                </span>
                {p.role && (
                  <span style={{ fontFamily: FONTS.mono, fontSize: 10, padding: "2px 8px", background: ACCENT, color: "#000", letterSpacing: 1, fontWeight: 700 }}>
                    {p.role}
                  </span>
                )}
                <span style={{ fontFamily: FONTS.sans, fontSize: 13, color: MUTED, fontWeight: 300 }}>
                  {p.desc}
                </span>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
                {p.stack.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: FONTS.mono,
                      fontSize: 10,
                      padding: "2px 8px",
                      border: `1px solid ${BORDER}`,
                      color: MUTED,
                      letterSpacing: 1,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: 11,
                color: MUTED,
                letterSpacing: 1,
                whiteSpace: "nowrap",
              }}
            >
              {p.year} ↗
            </span>
          </a>
        ))}
        <div style={{ borderTop: `1px solid ${BORDER}` }} />
      </div>
    </section>
  );
};

export default ProjectsSection;
