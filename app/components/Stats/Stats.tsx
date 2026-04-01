"use client"
import { useEffect, useState } from "react";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
}

export default function Stats() {
  const stats = [
    { number: 10, suffix: "+", label: "Years Experience" },
    { number: 50, suffix: "+", label: "Global Projects" },
    { number: 20, suffix: "+", label: "International Partners" },
    { number: 100, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <section className="bg-[var(--primary-dark)] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => {
            const count = useCountUp(item.number);

            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.08)] transition"
              >
                {/* Number */}
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {count}
                  {item.suffix}
                </h2>

                {/* Label */}
                <p className="text-sm text-[rgba(255,255,255,0.75)] mt-2">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
