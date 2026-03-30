import { FC } from "react";
import { BORDER, MUTED, FONTS } from "../constants/theme";

const Footer: FC = () => {
  return (
    <footer
      style={{
        padding: "20px 40px",
        borderTop: `1px solid ${BORDER}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: MUTED, letterSpacing: 1 }}>
        © 2026 KIM MINJUN
      </span>
      <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: MUTED, letterSpacing: 1 }}>
        DESIGNED & BUILT BY KIM MINJUN
      </span>
    </footer>
  );
};

export default Footer;
