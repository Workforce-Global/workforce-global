import { useEffect, useRef, useState } from "react";

interface UseCounterOptions {
  end: number;
  duration?: number;
  start?: number;
}

export const useCounter = ({ end, duration = 2000, start = 0 }: UseCounterOptions) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const steps = 60;
    const increment = (end - start) / steps;
    const intervalTime = duration / steps;
    let current = start;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(start + increment * step, end);
      setCount(Math.floor(current));
      if (step >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasStarted, end, start, duration]);

  return { count, ref };
};

export default useCounter;
