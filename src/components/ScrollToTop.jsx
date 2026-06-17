import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop component ensures the window scrolls to the top
// whenever the route changes. Place it inside <Router> in App.jsx.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top with smooth behavior
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null; // This component does not render anything visible
}
