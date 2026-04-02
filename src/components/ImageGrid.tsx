import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const IMAGES = [
  {
    src: "/Aqua-Vibes-1.png",
    alt: "Aqua Vibes bottle",
  },
  {
    src: "/AquaVibes-Ice.png",
    alt: "Aqua Vibes on ice",
  },
  {
    src: "/aqua-vibes-airport.png",
    alt: "Aqua Vibes at the airport",
  },
  {
    src: "/AquaVibes-Male-Model.png",
    alt: "Aqua Vibes lifestyle",
  },
  {
    src: "/AquaVibes-Sand.png",
    alt: "Aqua Vibes on sand",
  },
  {
    src: "/aqua-vibes-cooler.png",
    alt: "Aqua Vibes in a cooler",
  },
];

export default function ImageGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="bg-white py-20 md:py-28 lg:py-36 px-5 md:px-12 lg:px-20">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-[6px] md:gap-2">
        {IMAGES.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.08 + i * 0.07,
            }}
            className="overflow-hidden rounded-2xl"
            style={{ aspectRatio: "1/1" }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
