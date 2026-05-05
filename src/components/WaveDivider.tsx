import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PATH_TOP_A =
  "M0,70 C280,10 560,80 840,20 C1060,0 1300,60 1440,25 L1440,0 L0,0 Z";
const PATH_TOP_B =
  "M0,25 C280,75 560,5 840,65 C1060,80 1300,15 1440,55 L1440,0 L0,0 Z";

// Bottom paths — straight top edge, big wave on bottom matching hero style
const PATH_BOTTOM_A =
  "M0,0 L1440,0 L1440,10 C1220,70 940,10 720,55 C500,10 220,70 0,20 Z";
const PATH_BOTTOM_B =
  "M0,0 L1440,0 L1440,50 C1220,10 940,65 720,15 C500,65 220,10 0,55 Z";

interface WaveDividerProps {
  position: "top" | "bottom";
  fill?: string;
  className?: string;
}

export default function WaveDivider({
  position,
  fill = "#fff",
  className = "",
}: WaveDividerProps) {
  const pathRef = useRef<SVGPathElement>(null);

  const pathA = position === "top" ? PATH_TOP_A : PATH_BOTTOM_A;
  const pathB = position === "top" ? PATH_TOP_B : PATH_BOTTOM_B;

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(path, {
      attr: { d: pathB },
      duration: 4,
      ease: "sine.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [pathB]);

  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block w-full h-[50px] md:h-[60px] lg:h-[70px]"
      >
        <path ref={pathRef} d={pathA} fill={fill} />
      </svg>
    </div>
  );
}
