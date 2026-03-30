import { FC } from "react";
import { ACCENT, BORDER, FONTS } from "../constants/theme";
import { marqueeItems } from "../constants/data";

const MarqueeBar: FC = () => {
  const repeated = [...marqueeItems, ...marqueeItems];

  return (
    <div
      style={{
        overflow: "hidden",
        borderBottom: `1px solid ${BORDER}`,
        background: ACCENT,
        padding: "12px 0",
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
  );
};

export default MarqueeBar;
