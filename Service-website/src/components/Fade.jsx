import { useEffect } from "react";

export default function useRevealOnScroll(selector = ".reveal") {
  useEffect(() => {
    const appearOpts = { threshold: 0.15 };       // 15 % visible
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("active");
          io.unobserve(e.target);                 // animate only once
        }
      });
    }, appearOpts);

    document.querySelectorAll(selector).forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}