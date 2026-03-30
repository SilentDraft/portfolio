import { FC } from "react";
import { ACCENT, SURFACE, BORDER, TEXT, MUTED, FONTS } from "../../constants/theme";
import { useBreakpoint } from "../../hooks/useBreakpoint";

interface TimelineItem {
  year: string;
  title: string;
  sub: string;
  accent?: boolean;
}

const timeline: TimelineItem[] = [
  { year: "2026 ~", title: "대학원 진학", sub: "우울증 탐지 프레임워크 연구", accent: true },
  { year: "2026", title: "배재대학교 졸업", sub: "컴퓨터공학과" },
  { year: "2024–25", title: "프로젝트 집중", sub: "TaskSpark · GrandBuddy · Union 외 다수" },
  { year: "2022–23", title: "인턴 & 해커톤", sub: "에이프로코리아 · CherryPicker · 연구실" },
  { year: "2021", title: "대학 입학", sub: "컴퓨터공학과 · IoT 첫 프로젝트" },
];

const profile = [
  { label: "NAME", value: "김태호 (Kim Taeho)" },
  { label: "ROLE", value: "풀스택 개발자 & 대학원 연구자" },
  { label: "FOCUS", value: "백엔드 · 모바일 · AI/ML" },
  { label: "LOCATION", value: "서울, 대한민국" },
];

const InfoSection: FC = () => {
  const { isMobile } = useBreakpoint();

  return (
    <section
      id="info"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
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
          WHO
        </div>
      )}

      {/* Header */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: MUTED, letterSpacing: 3, marginBottom: 24, display: "block" }}>
          02 / 05
        </span>
        <h2
          style={{
            fontFamily: FONTS.display,
            fontSize: "clamp(48px, 8vw, 96px)",
            letterSpacing: -1,
            color: TEXT,
            lineHeight: 0.9,
            marginBottom: 16,
          }}
        >
          ABOUT
          <br />
          <span style={{ color: ACCENT }}>ME</span>
        </h2>
      </div>

      {/* Content: Profile + Timeline */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "3fr 2fr",
          gap: isMobile ? 40 : 64,
          marginTop: 32,
        }}
      >
        {/* Left: Profile card */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {profile.map(({ label, value }) => (
            <div
              key={label}
              style={{
                padding: "20px 0",
                borderTop: `1px solid ${BORDER}`,
              }}
            >
              <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: ACCENT, letterSpacing: 2, display: "block", marginBottom: 8 }}>
                {label}
              </span>
              <span style={{ fontFamily: FONTS.sans, fontSize: isMobile ? 16 : 18, color: TEXT, fontWeight: 300 }}>
                {value}
              </span>
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${BORDER}` }} />

          {/* Quote / Philosophy */}
          <div
            style={{
              marginTop: "auto",
              paddingTop: 32,
              borderLeft: `2px solid ${ACCENT}`,
              paddingLeft: 20,
            }}
          >
            <p style={{ fontFamily: FONTS.sans, fontSize: 15, color: MUTED, lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
              "만들고 싶은 건 직접 만든다.
              <br />
              생각을 코드로 옮기는 과정이 가장 즐겁습니다."
            </p>
          </div>
        </div>

        {/* Right: Timeline */}
        <div
          style={{
            borderLeft: isMobile ? "none" : `1px solid ${BORDER}`,
            borderTop: isMobile ? `1px solid ${BORDER}` : "none",
            paddingLeft: isMobile ? 0 : 64,
            paddingTop: isMobile ? 40 : 0,
          }}
        >
          <div style={{ fontFamily: FONTS.mono, fontSize: 11, color: MUTED, letterSpacing: 3, marginBottom: 24 }}>
            JOURNEY
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {timeline.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 20,
                  padding: "24px 0",
                  borderTop: `1px solid ${BORDER}`,
                }}
              >
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 11,
                    color: item.accent ? ACCENT : MUTED,
                    letterSpacing: 1,
                    paddingTop: 2,
                  }}
                >
                  {item.year}
                </span>
                <div>
                  <span
                    style={{
                      fontFamily: FONTS.display,
                      fontSize: isMobile ? 16 : 18,
                      color: item.accent ? ACCENT : TEXT,
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    {item.title}
                  </span>
                  <span style={{ fontFamily: FONTS.sans, fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.6 }}>
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
            <div style={{ borderTop: `1px solid ${BORDER}` }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
