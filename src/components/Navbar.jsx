import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-8 relative">
      <div className="mx-auto w-full max-w-400 px-4 md:px-8 lg:px-10">
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="text-[24px] font-normal text-white">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="w-10 h-10" />
            </Link>
          </div>

          <div className="flex items-center gap-10">
            <ul className="bg-[#222222] flex items-center gap-12 text-white text-[20px] font-normal rounded-lg px-8 py-4.75">
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>

            <a
              href="#book-call"
              className="px-8 py-4.75 bg-[#F5F5F5] text-[20px] text-[#101010] font-medium rounded-md"
            >
              Hire Me
            </a>
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
            <a
              href="#book-call"
              className="px-8 py-4.75 bg-[#F5F5F5] text-[18px] md:text-[20px] text-[#101010] font-medium rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </a>

            <button
              onClick={() => setIsOpen(false)}
              className="text-[18px] md:text-[20px] bg-[#222222] rounded-lg px-8 py-4.75"
            >
              Close
            </button>
          </div>

          <div className="flex flex-col items-left flex-1 gap-12 pt-30">
            <ul className="flex flex-col items-left gap-8 text-[60px] md:text-[80px] px-4 md:px-8">
              <li><Link to="/work" onClick={() => setIsOpen(false)}>Work</Link></li>
              <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
