import { useState, useEffect, FC } from "react";
import { ACCENT } from "../constants/theme";
import type { CursorPos } from "../types";

const isTouch = window.matchMedia("(pointer: coarse)").matches;

const CustomCursor: FC = () => {
  const [pos, setPos] = useState<CursorPos>({ x: -100, y: -100 });
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    if (isTouch) return;
    const move = (e: globalThis.MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: globalThis.MouseEvent) => {
      if ((e.target as Element).closest("a, button, [data-hover]")) setHovered(true);
      else setHovered(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: hovered ? 40 : 12,
        height: hovered ? 40 : 12,
        background: hovered ? "transparent" : ACCENT,
        border: hovered ? `2px solid ${ACCENT}` : "none",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 99999,
        transition: "width 0.15s, height 0.15s, background 0.15s",
        mixBlendMode: "difference" as const,
      }}
    />
  );
};

export default CustomCursor;
