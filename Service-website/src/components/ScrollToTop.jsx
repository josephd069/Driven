import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // always scroll to top when pathname changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // behavior: 'smooth' also works
  }, [pathname]);

  return null; // this component renders nothing
}
