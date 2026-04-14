import { useState, FC } from "react";
import { ACCENT, SURFACE, BORDER, TEXT, MUTED, FONTS } from "../../constants/theme";
import { projects } from "../../constants/data";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const WorkSection: FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { isMobile } = useBreakpoint();

  return (
    <section id="work" style={{ height: "100vh", padding: `80px ${isMobile ? "20px" : "40px"}`, overflowY: "auto", boxSizing: "border-box" as const }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 48,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <h2
          style={{
            fontFamily: FONTS.display,
            fontSize: "clamp(48px, 8vw, 96px)",
            letterSpacing: -1,
            color: TEXT,
          }}
        >
          SELECTED
          <br />
          <span style={{ color: ACCENT }}>WORK</span>
        </h2>
        <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: MUTED, letterSpacing: 2 }}>
          2023 — PRESENT
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {projects.map((p, i) => (
          <div
            key={p.num}
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

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 6,
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 11,
                  color: MUTED,
                  letterSpacing: 1,
                }}
              >
                {p.year}
              </span>
              {p.wip ? (
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 10,
                    letterSpacing: 1,
                    padding: "2px 8px",
                    border: `1px dashed ${MUTED}`,
                    color: MUTED,
                  }}
                >
                  IN PROGRESS
                </span>
              ) : p.links.length > 0 && (
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" }}>
                  {p.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-hover
                      style={{
                        fontFamily: FONTS.mono,
                        fontSize: 10,
                        letterSpacing: 1,
                        padding: "2px 8px",
                        border: `1px solid ${BORDER}`,
                        color: hovered === i ? ACCENT : MUTED,
                        textDecoration: "none",
                        transition: "color 0.2s, border-color 0.2s",
                        borderColor: hovered === i ? ACCENT : BORDER,
                      }}
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${BORDER}` }} />
      </div>
    </section>
  );
};

export default WorkSection;
