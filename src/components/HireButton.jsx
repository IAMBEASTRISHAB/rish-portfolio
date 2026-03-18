import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HireButton({ className = "", onClick }) {
  const btnRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    const top = topRef.current;
    const bottom = bottomRef.current;
    if (!btn) return;

    gsap.set(bottom, { y: "100%" });

    const handleEnter = () => {
      gsap.to(top, { y: "-100%", duration: 0.45, ease: "power3.inOut" });
      gsap.to(bottom, { y: "0%", duration: 0.45, ease: "power3.inOut" });
    };

    const handleLeave = () => {
      gsap.to(top, { y: "0%", duration: 0.45, ease: "power3.inOut" });
      gsap.to(bottom, { y: "100%", duration: 0.45, ease: "power3.inOut" });
    };

    btn.addEventListener("mouseenter", handleEnter);
    btn.addEventListener("mouseleave", handleLeave);
    return () => {
      btn.removeEventListener("mouseenter", handleEnter);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <a
      ref={btnRef}
      href="#book-call"
      onClick={onClick}
      className={className}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* wrapper gives a concrete height for overflow hidden to clip */}
      <span style={{ position: "relative", display: "block", overflow: "hidden" }}>
        <span
          ref={topRef}
          style={{ display: "block" }}
        >
          Resume
        </span>
        <span
          ref={bottomRef}
          style={{
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
        >
         Resume
        </span>
      </span>
    </a>
  );
}
