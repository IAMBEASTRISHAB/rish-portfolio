import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Home from "./pages/Home";
import Work from "./pages/Work";
import WorkDetail from "./pages/WorkDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function ScrollToTop({ scrollInstance }) {
  const location = useLocation();
  useEffect(() => {
    if (scrollInstance.current) {
      scrollInstance.current.scrollTo(0, { duration: 0, disableLerp: true });
    }
  }, [location.pathname, scrollInstance]);
  return null;
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(
    () => sessionStorage.getItem("introSeen") === "true"
  );

  const handleIntroComplete = () => {
    sessionStorage.setItem("introSeen", "true");
    setIntroComplete(true);
  };

  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    if (!introComplete) return;

    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.06,
      multiplier: 2.5,
      firefoxMultiplier: 120,
      touchMultiplier: 4,
      smartphone: { smooth: false },
      tablet: { smooth: true, lerp: 0.06, multiplier: 2.5 },
    });

    return () => locomotiveScrollRef.current?.destroy();
  }, [introComplete]);

  return (
    <BrowserRouter>
      {!introComplete && <Intro onComplete={handleIntroComplete} />}
      <div
        ref={scrollRef}
        data-scroll-container
        className="bg-[#101010] min-h-screen"
      >
        <ScrollToTop scrollInstance={locomotiveScrollRef} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}