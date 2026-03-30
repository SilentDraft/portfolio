import type { Project, ContactItem, SkillBar } from "../types";

export const OWNER = {
  name: "KIM TAEHO",
  nameFirst: "KIM",
  nameLast: "TAEHO",
  role: "FULL STACK DEVELOPER",
  location: "SEOUL, KR",
  year: "2026",
} as const;

export const projects: Project[] = [
  {
    num: "01",
    name: "GIT-PET",
    desc: "GitHub 활동 기반 펫 육성 앱. XP 누적 → 5단계 진화 / 방 꾸미기 / 코인 상점.",
    role: "풀스택",
    stack: ["Flutter", "Supabase", "Deno", "PostgreSQL"],
    year: "2026",
    link: "#",
  },
  {
    num: "02",
    name: "타슈 예측",
    desc: "대전 자전거 대여 가능 수 예측 플랫폼. Seq2Seq LSTM 모델 기반.",
    role: "서버",
    stack: ["React Native", "PocketBase", "Python", "Docker"],
    year: "2025",
    link: "#",
  },
  {
    num: "03",
    name: "GRANDBUDDY",
    desc: "청년-노인 세대 연결 플랫폼. 실시간 채팅 및 매칭 시스템.",
    role: "풀스택",
    stack: ["Flutter", "FastAPI", "WebSocket"],
    year: "2025",
    link: "#",
  },
  {
    num: "04",
    name: "TASKSPARK",
    desc: "보상 및 경쟁 심리 기반 할 일 관리 앱. 업적 시스템 내장.",
    role: "클라이언트",
    stack: ["Flutter", "PocketBase", "Docker"],
    year: "2025",
    link: "#",
  },
  {
    num: "05",
    name: "UNION",
    desc: "전국 대학생 통합 커뮤니티 앱. 대학 정보 및 팔로우 시스템.",
    role: "서버",
    stack: ["Flutter", "FastAPI", "SQLAlchemy"],
    year: "2024",
    link: "#",
  },
  {
    num: "06",
    name: "CHERRYPICKER",
    desc: "카드 통합 관리 앱. 카드 고릴라 크롤링 + 유사 카드명 검색. SW 공동 해커톤.",
    role: "서버",
    stack: ["Flask", "Docker", "BeautifulSoup4"],
    year: "2022",
    link: "#",
  },
  {
    num: "07",
    name: "5PPLICATION",
    desc: "여행 기록 앱. edu-코코팜 교내 대회 장려상 수상.",
    role: "서버",
    stack: ["Go", "Flutter", "Swagger"],
    year: "2022",
    link: "#",
  },
  {
    num: "08",
    name: "SCRAPY 크롤러",
    desc: "네이버 부동산 데이터 수집 자동화. 에이프로코리아 인턴.",
    stack: ["Python", "Scrapy"],
    year: "2022",
    link: "#",
  },
  {
    num: "09",
    name: "현관문 방범장치",
    desc: "문 센서 감지 → Home Assistant 자동화로 스마트폰 푸시 알림 발송.",
    stack: ["HAOS", "ESP8266", "Raspberry Pi"],
    year: "2021",
    link: "#",
  },
];

export const skills: string[] = [
  "FastAPI", "Gin", "PostgreSQL", "PocketBase",
  "Supabase", "Docker", "Scrapy", "Flutter", "React",
];

export const skillBars: SkillBar[] = [
  { label: "BACKEND", value: "90%" },
  { label: "MOBILE", value: "85%" },
  { label: "DEVOPS", value: "70%" },
  { label: "FRONTEND", value: "60%" },
];

export const contactItems: ContactItem[] = [
  { label: "EMAIL",    value: "hello@kimtaeho.dev",        href: "mailto:hello@kimtaeho.dev" },
  { label: "GITHUB",   value: "github.com/rlaxogh5079",   href: "https://github.com/rlaxogh5079" },
];

export const navSections = ["ABOUT", "INFO", "PROJECTS", "SKILLS", "CONTACT"] as const;
export type NavSection = typeof navSections[number];

export const marqueeItems = [
  "FLUTTER", "FASTAPI", "GO", "DOCKER",
  "SUPABASE", "POCKETBASE", "REACT NATIVE", "KUBERNETES",
];
