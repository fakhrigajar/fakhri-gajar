import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function CountUp({ end, duration = 1600 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(() => (prefersReducedMotion() ? end : 0));

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return undefined;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.round((1 - (1 - progress) ** 3) * end));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">{value}</span>
      <span className="sr-only">{end}</span>
    </span>
  );
}

CountUp.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number,
};

export default CountUp;
