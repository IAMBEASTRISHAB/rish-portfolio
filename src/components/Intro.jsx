import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Intro({ onComplete }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete });

    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 1.8,
      ease: "power2.inOut",
      delay: 0.5,
    });
  }, []);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#101010",
        pointerEvents: "none",
      }}
    />
  );
}