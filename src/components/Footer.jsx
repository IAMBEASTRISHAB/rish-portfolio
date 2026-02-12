import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="max-w-400 mx-auto px-4 md:px-8 lg:px-10">
        <div className="py-6 md:py-10 flex items-start md:items-center justify-between text-white text-[18px] md:text-[20px] border-t-[3px] border-white">
          
          {/* Left */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <span>Copyright © {year}</span>
            <Link
              to="/privacy"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Right */}
          <Link
            to="/contact"
            className="hover:opacity-80 transition-opacity duration-200"
          >
            Contact
          </Link>

        </div>
      </div>
    </footer>
  );
}
