import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";
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
      scrollInstance.current.scrollTo(0, {
        duration: 0,
        disableLerp: true,
      });
    }
  }, [location.pathname, scrollInstance]);

  return null;
}

export default function App() {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: {
        smooth: false,
      },
    });

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop scrollInstance={locomotiveScrollRef} />
      <div
        ref={scrollRef}
        data-scroll-container
        className="bg-[#101010] min-h-screen"
      >
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