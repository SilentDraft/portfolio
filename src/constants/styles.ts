import { ACCENT, BG, TEXT } from "./theme";

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&family=Bebas+Neue&family=IBM+Plex+Sans:wght@300;400;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: ${BG};
    color: ${TEXT};
    font-family: 'IBM Plex Sans', sans-serif;
    cursor: none;
  }

  @media (pointer: coarse) {
    body { cursor: auto; }
  }

  ::selection { background: ${ACCENT}; color: #000; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: ${BG}; }
  ::-webkit-scrollbar-thumb { background: ${ACCENT}; }

  a { color: inherit; text-decoration: none; }

  .noise {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-size: 128px;
  }

  @keyframes glitch {
    0%, 100% { clip-path: inset(0 0 98% 0); transform: translate(-2px, 0); }
    20% { clip-path: inset(30% 0 50% 0); transform: translate(2px, 0); }
    40% { clip-path: inset(60% 0 20% 0); transform: translate(-1px, 0); }
    60% { clip-path: inset(80% 0 5% 0); transform: translate(3px, 0); }
    80% { clip-path: inset(10% 0 85% 0); transform: translate(-3px, 0); }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
`;
