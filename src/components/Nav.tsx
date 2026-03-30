import { FC } from "react";
import { ACCENT, BG, BORDER, MUTED, FONTS } from "../constants/theme";
import { navSections } from "../constants/data";
import type { NavProps } from "../types";
import { useBreakpoint } from "../hooks/useBreakpoint";

const Nav: FC<NavProps> = ({ activeSection, onNavigate }) => {
  const { isMobile } = useBreakpoint();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: `20px ${isMobile ? "20px" : "40px"}`,
        borderBottom: `1px solid ${BORDER}`,
        background: `${BG}ee`,
        backdropFilter: "blur(8px)",
      }}
    >
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: 13,
          color: ACCENT,
          letterSpacing: 2,
        }}
      >
        KIM.TAEHO
        <span style={{ animation: "blink 1s step-end infinite", display: "inline-block" }}>_</span>
      </span>

      <div style={{ display: "flex", gap: isMobile ? 16 : 32 }}>
        {navSections.map((s) => (
          <button
            key={s}
            data-hover
            onClick={() => onNavigate(s.toLowerCase())}
            style={{
              fontFamily: FONTS.mono,
              fontSize: isMobile ? 10 : 11,
              letterSpacing: isMobile ? 1 : 2,
              color: activeSection === s.toLowerCase() ? ACCENT : MUTED,
              transition: "color 0.2s",
              background: "none",
              border: "none",
              cursor: "none",
              padding: 0,
            }}
          >
            {s}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
