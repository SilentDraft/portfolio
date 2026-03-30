import { FC, MouseEvent } from "react";
import { ACCENT, SURFACE, BORDER, TEXT, MUTED, FONTS } from "../../constants/theme";
import { skills, skillBars } from "../../constants/data";
import { useBreakpoint } from "../../hooks/useBreakpoint";

const coreStacks = [
  { label: "BACKEND", desc: "FastAPI · Gin 기반 REST API 설계, DB 모델링, 인증/인가 구현" },
  { label: "MOBILE", desc: "Flutter 기반 크로스플랫폼 앱 개발, 상태 관리 및 UI/UX 구현" },
  { label: "INFRA", desc: "Docker 컨테이너화, K8s 클러스터 운영, CI/CD 파이프라인 구축" },
  { label: "DATA", desc: "Scrapy · BS4 웹 크롤링, Seq2Seq LSTM 모델 학습 및 예측" },
];

const SkillsSection: FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: isMobile ? "flex-start" : "center",
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
          &lt;/&gt;
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40, position: "relative", zIndex: 1 }}>
        <h2 style={{ fontFamily: FONTS.display, fontSize: "clamp(48px, 6vw, 80px)", letterSpacing: -1, lineHeight: 0.9 }}>
          TECH<br /><span style={{ color: ACCENT }}>STACK</span>
        </h2>
        <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: MUTED, letterSpacing: 2 }}>04 / 05</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 64, flex: 1, minHeight: 0, position: "relative", zIndex: 1 }}>

        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignContent: "flex-start" }}>
            {skills.map((s) => {
              const highlighted = ["FastAPI", "PostgreSQL", "Flutter", "Docker"];
              const isAccent = highlighted.includes(s);
              return (
                <span
                  key={s}
                  style={{
                    fontFamily: FONTS.mono, fontSize: 12, padding: "10px 18px",
                    border: `1px solid ${isAccent ? ACCENT : BORDER}`,
                    color: isAccent ? "#000" : TEXT,
                    background: isAccent ? ACCENT : "transparent",
                    letterSpacing: 1, transition: "all 0.15s", cursor: "default",
                  }}
                  onMouseEnter={(e: MouseEvent<HTMLSpanElement>) => {
                    e.currentTarget.style.background = ACCENT;
                    e.currentTarget.style.color = "#000";
                    e.currentTarget.style.borderColor = ACCENT;
                  }}
                  onMouseLeave={(e: MouseEvent<HTMLSpanElement>) => {
                    e.currentTarget.style.background = isAccent ? ACCENT : "transparent";
                    e.currentTarget.style.color = isAccent ? "#000" : TEXT;
                    e.currentTarget.style.borderColor = isAccent ? ACCENT : BORDER;
                  }}
                >{s}</span>
              );
            })}
          </div>

          {/* Core stacks */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 32 }}>
            {coreStacks.map(({ label, desc }) => (
              <div key={label} style={{ padding: "16px 0", borderTop: `1px solid ${BORDER}` }}>
                <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: ACCENT, letterSpacing: 2, display: "block", marginBottom: 6 }}>{label}</span>
                <span style={{ fontFamily: FONTS.sans, fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.6 }}>{desc}</span>
              </div>
            ))}
            <div style={{ borderTop: `1px solid ${BORDER}` }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: "auto", paddingTop: 24 }}>
            {[{ num: "4+", label: "YEARS EXP" }, { num: "10+", label: "PROJECTS" }, { num: "2+", label: "INTERNSHIPS" }, { num: "1", label: "HACKATHON" }].map(({ num, label }) => (
              <div key={label} style={{ padding: "20px", border: `1px solid ${BORDER}` }}>
                <span style={{ fontFamily: FONTS.display, fontSize: 40, color: ACCENT, lineHeight: 1, letterSpacing: -1, display: "block" }}>{num}</span>
                <span style={{ fontFamily: FONTS.mono, fontSize: 10, color: MUTED, letterSpacing: 2 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ display: "flex", flexDirection: "column", borderLeft: isMobile ? "none" : `1px solid ${BORDER}`, borderTop: isMobile ? `1px solid ${BORDER}` : "none", paddingLeft: isMobile ? 0 : 64, paddingTop: isMobile ? 40 : 0 }}>
          <div style={{ fontFamily: FONTS.mono, fontSize: 11, color: MUTED, letterSpacing: 3, marginBottom: 24 }}>PROFICIENCY</div>

          <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
            {skillBars.map(({ label, value }) => (
              <div key={label} style={{ padding: "20px 0", borderBottom: `1px solid ${BORDER}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: 3, color: MUTED }}>{label}</span>
                  <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: ACCENT }}>{value}</span>
                </div>
                <div style={{ height: 2, background: BORDER, position: "relative" }}>
                  <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: value, background: ACCENT }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32 }}>
            <div style={{ fontFamily: FONTS.mono, fontSize: 11, color: MUTED, letterSpacing: 3, marginBottom: 16 }}>ALSO FAMILIAR WITH</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Go", "Flask", "SQLAlchemy", "MySQL", "Swagger", "BeautifulSoup4", "Home Assistant", "Keras"].map((s) => (
                <span key={s} style={{ fontFamily: FONTS.mono, fontSize: 10, padding: "4px 10px", border: `1px solid ${BORDER}`, color: MUTED, letterSpacing: 1 }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
