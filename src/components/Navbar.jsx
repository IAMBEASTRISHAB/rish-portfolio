import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import HireButton from "./HireButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    // Locomotive Scroll fires a custom scroll event on the html element
    const handleScroll = (e) => {
      const currentY = e.detail?.y ?? window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (diff > 10 && currentY > 80) {
        setHidden(true);
      } else if (diff < -5) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    // Locomotive emits on the scroll container element, fallback to window
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("locomotive-scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("locomotive-scroll", handleScroll);
    };
  }, []);

  // Always show navbar when route changes
  useEffect(() => {
    setHidden(false);
  }, [location.pathname]);

  return (
    <nav
      className={`py-8 fixed top-0 left-0 right-0 z-100 transition-transform duration-500 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto w-full max-w-400 px-4 md:px-8 lg:px-10">
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="text-[24px] font-normal text-white">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="w-10 h-10" />
            </Link>
          </div>

          <div className="flex items-center gap-10">
            <ul className="bg-[#222222] flex items-center gap-12 text-white text-[20px] font-normal rounded-lg px-8 py-[19px]">
              {["/work", "/about", "/contact"].map((path, i) => {
                const label = ["Work", "About", "Contact"][i];
                const isActive = location.pathname === path;
                return (
                  <li key={path}>
                    <Link
                      to={path}
                      className="relative group inline-block"
                    >
                      {label}
                      <span
                        className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-white transition-all duration-300 ease-in-out
                          ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <HireButton className="px-8 py-4.75 bg-[#F5F5F5] text-[20px] text-[#101010] font-medium rounded-md" />
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden bg-[#222222] rounded-lg px-8 py-4.75 flex items-center justify-between">
          <div className="text-[24px] font-normal text-white">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="w-7 h-7" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-[18px] md:text-[20px] font-normal focus:outline-none"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 w-screen h-screen z-999 bg-[#101010] text-white text-[20px] flex flex-col">
          <div className="flex items-center justify-between px-4 md:px-8 py-8">
            <HireButton
              className="px-8 py-4.75 bg-[#F5F5F5] text-[18px] md:text-[20px] text-[#101010] font-medium rounded-md"
              onClick={() => setIsOpen(false)}
            />
            <button
              onClick={() => setIsOpen(false)}
              className="text-[18px] md:text-[20px] bg-[#222222] rounded-lg px-8 py-4.75"
            >
              Close
            </button>
          </div>

          <div className="flex flex-col items-start flex-1 gap-12 pt-30">
            <ul className="flex flex-col items-start gap-8 text-[60px] md:text-[80px] px-4 md:px-8">
              {["/work", "/about", "/contact"].map((path, i) => {
                const label = ["Work", "About", "Contact"][i];
                return (
                  <li key={path}>
                    <Link
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className="relative group inline-block"
                    >
                      {label}
                      <span className="absolute left-0 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}