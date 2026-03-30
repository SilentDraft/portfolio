import { FC, MouseEvent } from "react";
import { ACCENT, SURFACE, BORDER, TEXT, MUTED, FONTS } from "../../constants/theme";
import { contactItems, OWNER } from "../../constants/data";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const ContactSection: FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: `80px ${isMobile ? "20px" : "40px"}`,
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box" as const,
      }}
    >
      {/* Decorative background text */}
      <div
        style={{
          position: "absolute", right: -20, bottom: -20,
          fontFamily: FONTS.display, fontSize: "clamp(80px, 16vw, 220px)",
          color: SURFACE, letterSpacing: -4, lineHeight: 1,
          userSelect: "none" as const, pointerEvents: "none" as const,
        }}
      >
        TALK
      </div>

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>

        {/* Top: heading + desc */}
        <div>
          <div style={{ fontFamily: FONTS.mono, fontSize: 11, color: MUTED, letterSpacing: 3, marginBottom: 24 }}>05 / 05</div>
          <h2 style={{ fontFamily: FONTS.display, fontSize: "clamp(56px, 10vw, 120px)", letterSpacing: -2, lineHeight: 0.85, marginBottom: 24 }}>
            LET'S<br /><span style={{ color: ACCENT }}>TALK</span>
          </h2>
          <p style={{ fontFamily: FONTS.sans, fontSize: 16, color: MUTED, fontWeight: 300, maxWidth: 480, lineHeight: 1.6 }}>
            프로젝트 협업, 채용 문의, 또는 그냥 인사도 환영합니다.
          </p>
        </div>

        {/* Middle: contact links */}
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <div style={{ width: "100%" }}>
            {contactItems.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                data-hover
                style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "22px 0", borderBottom: `1px solid ${BORDER}`, transition: "padding 0.15s",
                }}
                onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.paddingLeft = "12px";
                  (e.currentTarget.querySelector(".contact-label") as HTMLElement).style.color = ACCENT;
                }}
                onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.paddingLeft = "0";
                  (e.currentTarget.querySelector(".contact-label") as HTMLElement).style.color = MUTED;
                }}
              >
                <span className="contact-label" style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: 3, color: MUTED, transition: "color 0.15s", minWidth: 100 }}>
                  {label}
                </span>
                <span style={{ fontFamily: FONTS.mono, fontSize: isMobile ? 12 : 14, color: TEXT, wordBreak: "break-all" }}>{value} ↗</span>
              </a>
            ))}
            <div style={{ borderTop: `1px solid ${BORDER}` }} />
          </div>
        </div>

        {/* Bottom: footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, borderTop: `1px solid ${BORDER}` }}>
          <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: MUTED, letterSpacing: 1 }}>
            © {OWNER.year} {OWNER.name}
          </span>
          <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: MUTED, letterSpacing: 1 }}>
            DESIGNED & BUILT BY {OWNER.name}
          </span>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
