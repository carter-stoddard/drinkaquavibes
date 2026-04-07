import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FRAME_COUNT = 60;
const FPS = 24;
const PREFIX = "hf_20260407_180646_60097453-964d-4542-9cf3-d8913297d8b3_";

const FRAMES = Array.from(
  { length: FRAME_COUNT },
  (_, i) => `/hero-frames/${PREFIX}${String(i).padStart(3, "0")}.jpg`
);

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    FRAMES.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT && !cancelled) {
          imagesRef.current = images;
          setLoaded(true);
        }
      };
      images[i] = img;
    });

    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images = imagesRef.current;
    let frame = 0;
    let animId: number;
    let lastTime = 0;
    const interval = 1000 / FPS;

    const drawFrame = () => {
      const img = images[frame];
      if (!img) return;

      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;

      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      const x = (cw - w) / 2;
      const y = (ch - h) / 2;

      ctx.drawImage(img, x, y, w, h);
    };

    const loop = (time: number) => {
      animId = requestAnimationFrame(loop);
      const delta = time - lastTime;
      if (delta >= interval) {
        lastTime = time - (delta % interval);
        drawFrame();
        frame = (frame + 1) % FRAME_COUNT;
      }
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [loaded]);

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{
        minHeight: "100dvh",
        paddingTop: "5rem",
      }}
    >
      {/* Frame sequence canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-80"
      />

      {/* Fallback static image while frames load */}
      {!loaded && (
        <img
          src="/aqua-vibes-hero.png"
          alt="Aqua Vibes hero"
          className="absolute inset-0 w-full h-full object-cover lg:object-[center_70%] opacity-80"
        />
      )}

      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Mobile: center-center */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 md:hidden -mt-20">
        <div className="text-center">
          <h1
            className="text-[44px] leading-[1.05] tracking-[0.02em] text-white"
            style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
          >
            Hydrate with<br />Intention
          </h1>
          <div className="flex flex-col items-center gap-3 mt-6">
            <motion.a
              href="#usp"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="w-full max-w-[200px] h-[42px] flex items-center justify-center rounded-full border border-white text-white text-[11px] tracking-[0.15em] uppercase cursor-pointer transition-colors duration-300 hover:bg-white/10"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Learn More
            </motion.a>
            <motion.a
              href="/wholesale"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="w-full max-w-[200px] h-[42px] flex items-center justify-center rounded-full bg-[#184EA2] text-white text-[11px] tracking-[0.15em] uppercase cursor-pointer transition-colors duration-300 hover:bg-[#1a5ab8]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              Buy Wholesale
            </motion.a>
          </div>
        </div>
      </div>

      {/* Desktop: bottom-right */}
      <div className="hidden md:block absolute bottom-28 right-12 lg:right-16 z-10 text-right">
        <h1
          className="text-[64px] lg:text-[80px] leading-[1.05] tracking-[0.02em] text-white"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
          }}
        >
          Hydrate with
          <br />
          Intention
        </h1>

        <div className="flex flex-row items-center justify-end gap-3 mt-6">
          <motion.a
            href="#usp"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="w-[160px] h-[48px] flex items-center justify-center rounded-full border border-white text-white text-[13px] tracking-[0.15em] uppercase cursor-pointer transition-colors duration-300 hover:bg-white/10"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Learn More
          </motion.a>
          <motion.a
            href="/wholesale"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="w-[160px] h-[48px] flex items-center justify-center rounded-full bg-[#184EA2] text-white text-[13px] tracking-[0.15em] uppercase cursor-pointer transition-colors duration-300 hover:bg-[#1a5ab8]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
          >
            Buy Wholesale
          </motion.a>
        </div>
      </div>

      {/* Wave divider — taller on mobile to cover bottom */}
      <div className="absolute -bottom-1 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block w-full h-[100px] md:h-[60px] lg:h-[80px]"
        >
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#fff"
          />
        </svg>
      </div>
    </section>
  );
}
