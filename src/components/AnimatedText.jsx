import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedText({ children, className = "", delay = 0, tag: Tag = "p" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const words = containerRef.current?.querySelectorAll(".word-inner");
    if (!words?.length) return;

    gsap.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.05,
        delay,
      }
    );
  }, [delay]);

  const words = String(children).split(" ");

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.25em" }}>
          <span className="word-inner" style={{ display: "inline-block" }}>
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}