import { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { BG } from "./constants";
import { globalStyles } from "./constants";
import CustomCursor from "./components/CustomCursor";
import Nav from "./components/Nav";
import HeroSection from "./components/sections/HeroSection";
import ContactSection from "./components/sections/ContactSection";
import SkillsSection from "./components/sections/SkillsSection";
import InfoSection from "./components/sections/InfoSection";
import ProjectsSection from "./components/sections/ProjectsSection";

const SECTION_IDS = ["about", "info", "projects", "skills", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const swiperRef = useRef<SwiperType | null>(null);
  const isTransitioning = useRef(false);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSection(SECTION_IDS[swiper.activeIndex]);
  };

  const handleNavigate = useCallback((section: string) => {
    const index = SECTION_IDS.indexOf(section);
    if (index !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  }, []);

  useEffect(() => {
    const swiperEl = document.querySelector(".swiper") as HTMLElement;
    if (!swiperEl) return;

    const getSlideState = () => {
      const swiper = swiperRef.current;
      if (!swiper) return null;
      const slide = swiper.slides[swiper.activeIndex] as HTMLElement;
      if (!slide) return null;
      const { scrollTop, scrollHeight, clientHeight } = slide;
      return {
        isScrollable: scrollHeight > clientHeight + 1,
        atTop: scrollTop <= 0,
        atBottom: scrollTop + clientHeight >= scrollHeight - 1,
      };
    };

    const transition = (dir: "next" | "prev") => {
      const swiper = swiperRef.current;
      if (!swiper || isTransitioning.current) return;
      isTransitioning.current = true;
      if (dir === "next") swiper.slideNext();
      else swiper.slidePrev();
      setTimeout(() => { isTransitioning.current = false; }, 900);
    };

    // Desktop: wheel
    const handleWheel = (e: WheelEvent) => {
      if (!swiperRef.current || isTransitioning.current) return;
      const state = getSlideState();
      if (!state) return;

      if (e.deltaY > 0 && (!state.isScrollable || state.atBottom)) {
        e.preventDefault();
        transition("next");
      } else if (e.deltaY < 0 && (!state.isScrollable || state.atTop)) {
        e.preventDefault();
        transition("prev");
      }
    };

    // Mobile: touch
    let touchStartY = 0;
    let touchStartScrollTop = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      const swiper = swiperRef.current;
      if (swiper) {
        const slide = swiper.slides[swiper.activeIndex] as HTMLElement;
        if (slide) touchStartScrollTop = slide.scrollTop;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!swiperRef.current || isTransitioning.current) return;
      const deltaY = touchStartY - e.changedTouches[0].clientY;
      const minSwipe = 50;
      if (Math.abs(deltaY) < minSwipe) return;

      const state = getSlideState();
      if (!state) return;

      if (deltaY > 0 && (!state.isScrollable || state.atBottom)) {
        transition("next");
      } else if (deltaY < 0 && (!state.isScrollable || state.atTop)) {
        transition("prev");
      }
    };

    swiperEl.addEventListener("wheel", handleWheel, { passive: false });
    swiperEl.addEventListener("touchstart", handleTouchStart, { passive: true });
    swiperEl.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      swiperEl.removeEventListener("wheel", handleWheel);
      swiperEl.removeEventListener("touchstart", handleTouchStart);
      swiperEl.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      <style>{globalStyles}</style>
      <style>{`
        html, body, #root { height: 100%; overflow: hidden; }
        .swiper { height: 100vh; width: 100%; }
        .swiper-slide { height: 100vh; overflow-y: auto; background: ${BG}; overscroll-behavior: contain; }
        .swiper-slide::-webkit-scrollbar { width: 0; }
      `}</style>

      <div className="noise" />
      <CustomCursor />
      <Nav activeSection={activeSection} onNavigate={handleNavigate} />

      <Swiper
        direction="vertical"
        modules={[Keyboard]}
        keyboard={{ enabled: true }}
        speed={800}
        allowTouchMove={false}
        onSwiper={(swiper: SwiperType) => { swiperRef.current = swiper; }}
        onSlideChange={handleSlideChange}
        style={{ background: BG }}
      >
        <SwiperSlide><HeroSection onNavigate={handleNavigate} /></SwiperSlide>
        <SwiperSlide><InfoSection /></SwiperSlide>
        <SwiperSlide><ProjectsSection /></SwiperSlide>
        <SwiperSlide><SkillsSection /></SwiperSlide>
        <SwiperSlide><ContactSection /></SwiperSlide>
      </Swiper>
    </>
  );
}
