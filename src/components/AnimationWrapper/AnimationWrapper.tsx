"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimationWrapperProps {
  children: ReactNode;
}

/**
 * Client-side animation wrapper that handles scroll-based animations
 * This component is the only client boundary needed for the landing page animations
 */
export default function AnimationWrapper({ children }: AnimationWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Defer scroll handler setup to after initial render
    const initScrollHandler = () => {
      const handleScroll = () => {
        const scrolled = window.scrollY;
        const viewportHeight = window.innerHeight;

        const parallaxElements =
          document.querySelectorAll<HTMLElement>(".parallax");
        const floatingElements =
          document.querySelectorAll<HTMLElement>(".floating");
        const scaleElements =
          document.querySelectorAll<HTMLElement>(".scale-on-scroll");
        const scrollAnimateElements =
          document.querySelectorAll<HTMLElement>(".scroll-animate");

        // Process parallax scroll elements
        parallaxElements.forEach((element) => {
          const speed = parseFloat(element.getAttribute("data-speed") || "0.5");
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrolled;

          if (Math.abs(elementTop - scrolled) < viewportHeight * 1.5) {
            const xPos = (scrolled - elementTop) * speed;
            element.style.setProperty(
              "transform",
              `translateX(${xPos}px)`,
              "important"
            );
          }
        });

        // Process floating elements
        floatingElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrolled;

          if (Math.abs(elementTop - scrolled) < viewportHeight * 1.5) {
            const yPos = Math.sin((scrolled - elementTop) * 0.002) * 20;
            element.style.transform = `translateY(${yPos}px)`;
          }
        });

        // Process scale elements
        scaleElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const elementMiddle = rect.top + rect.height / 2;
          const viewportMiddle = viewportHeight / 2;
          const distanceFromCenter = Math.abs(elementMiddle - viewportMiddle);

          if (distanceFromCenter < viewportHeight) {
            const scale =
              1 + Math.max(0, (1 - distanceFromCenter / viewportHeight) * 0.1);
            element.style.transform = `scale(${Math.min(scale, 1.1)})`;
          }
        });

        // Process scroll-reveal animations
        scrollAnimateElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.top < viewportHeight * 0.85 && rect.bottom > 0) {
            element.classList.add("animate");
          }
        });
      };

      // Throttle scroll handler with requestAnimationFrame
      let ticking = false;
      const scrollHandler = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };

      // Initial trigger
      handleScroll();

      window.addEventListener("scroll", scrollHandler, { passive: true });
      window.addEventListener("resize", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", scrollHandler);
        window.removeEventListener("resize", handleScroll);
      };
    };

    // Use requestIdleCallback or setTimeout to defer initialization
    let cleanup: (() => void) | undefined;
    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(() => {
        cleanup = initScrollHandler();
      });
      return () => {
        cancelIdleCallback(id);
        if (cleanup) cleanup();
      };
    } else {
      const timer = setTimeout(() => {
        cleanup = initScrollHandler();
      }, 100);
      return () => {
        clearTimeout(timer);
        if (cleanup) cleanup();
      };
    }
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
