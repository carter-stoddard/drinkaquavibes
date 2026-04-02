import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BAR_COUNT = 120;
const BAR_WIDTH = 2;
const BAR_GAP = 4;
const STRIP_HEIGHT = 24;

// Pre-randomized heights (4–24px) so the pattern is stable across renders
const BAR_HEIGHTS: number[] = [
  18,7,14,21,9,16,5,20,12,8,22,6,15,10,19,4,23,11,17,7,13,24,8,16,5,21,10,14,
  19,6,22,9,17,12,4,20,8,15,23,11,7,18,5,13,24,10,16,6,21,9,14,19,4,22,12,8,
  17,7,23,15,11,20,6,13,18,5,24,10,16,9,21,8,14,19,4,22,7,12,17,23,11,6,15,20,
  9,18,5,13,24,8,16,10,21,7,14,19,6,22,12,4,17,23,11,15,8,20,9,18,5,13,24,7,
  16,10,21,6,14,19,22,8,
];

export default function AnnouncementBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(window.scrollY / docHeight, 1));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filledBars = Math.round(scrollProgress * BAR_COUNT);
  const totalWidth = BAR_COUNT * (BAR_WIDTH + BAR_GAP) - BAR_GAP;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="announcement-bar fixed top-0 left-0 right-0 z-50 pointer-events-none pt-2 bg-transparent transition-colors duration-500"
      style={{ height: `${STRIP_HEIGHT + 8}px` }}
    >
      <svg
        width="100%"
        height={STRIP_HEIGHT}
        viewBox={`0 0 ${totalWidth} ${STRIP_HEIGHT}`}
        preserveAspectRatio="none"
        className="block"
      >
        {BAR_HEIGHTS.slice(0, BAR_COUNT).map((h, i) => {
          const x = i * (BAR_WIDTH + BAR_GAP);
          const y = (STRIP_HEIGHT - h) / 2;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={BAR_WIDTH}
              height={h}
              rx={1}
              fill={
                i < filledBars
                  ? "#184EA2"
                  : "rgba(0, 0, 0, 0.1)"
              }
            />
          );
        })}
      </svg>
    </motion.div>
  );
}
