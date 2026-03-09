import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const hide = () => { dot.style.opacity = "0"; ring.style.opacity = "0"; };
    const show = () => { dot.style.opacity = "1"; ring.style.opacity = "1"; };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-9999"
        style={{ transform: "translate(-50%, -50%)", opacity: 0 }}
      />
      <div
        ref={ringRef}
        className="custom-cursor fixed top-0 left-0 rounded-full pointer-events-none z-9998"
        style={{
          width: "36px",
          height: "36px",
          border: "1.5px solid rgba(255,255,255,0.6)",
          transform: "translate(-50%, -50%)",
          opacity: 0,
        }}
      />
    </>
  );
}