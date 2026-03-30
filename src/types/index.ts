export interface Project {
  num: string;
  name: string;
  desc: string;
  role?: string;
  stack: string[];
  year: string;
  link: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
}

export interface SkillBar {
  label: string;
  value: string;
}

export interface CursorPos {
  x: number;
  y: number;
}

export interface NavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}
