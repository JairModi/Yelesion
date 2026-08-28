// VIEW
// Still needs its own small bit of behaviour (IntersectionObserver) to work,
// but it renders nothing but its children — no app data, no business logic.

import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "", delay = 0, id }) {
  const [visible, setVisible] = useState(false);
  const revealRef = useRef(null);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <section
      ref={revealRef}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      data-reveal-delay={delay}
      id={id}
    >
      {children}
    </section>
  );
}
