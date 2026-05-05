import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const headerReveal = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-15%" },
  transition: { duration: 0.7, delay, ease },
});

interface CellData {
  src?: string;
  bg: string;
  gridColumn: string;
  gridRow: string;
  cellClass?: string;
}

const CELLS: CellData[] = [
  { src: "/AquaVibes-Manufacturing-Plant.png", bg: "#dce6f4", gridColumn: "1", gridRow: "1 / 3", cellClass: "bento-cell-1" },
  { src: "/AquaVibes-Plane.png", bg: "#e8f0f8", gridColumn: "2", gridRow: "1" },
  { src: "/AquaVibes-Ice.png", bg: "#e0eaf4", gridColumn: "3", gridRow: "1" },
  { src: "/aqua-vibes-airport.png", bg: "#d8e4f0", gridColumn: "2", gridRow: "2" },
  { src: "/aqua-vibes-cooler.png", bg: "#e8eef8", gridColumn: "3", gridRow: "2" },
];

export default function BentoSection() {
  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  return (
    <section style={{ padding: "0 0 120px 0" }}>
      <style>{`
        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto !important;
            gap: 8px !important;
            border-radius: 12px !important;
          }
          .bento-cell {
            grid-column: auto !important;
            grid-row: auto !important;
            border-radius: 8px !important;
            aspect-ratio: 3 / 4 !important;
          }
          .bento-cell-1 {
            grid-column: 1 / 3 !important;
            aspect-ratio: 3 / 4 !important;
          }
        }
      `}</style>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* Section header */}
        <div style={{ textAlign: "center", paddingTop: 96, paddingBottom: 56 }}>
          <motion.div
            {...headerReveal(0)}
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: 11,
              color: "#184EA2",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              marginBottom: 20,
            }}
          >
            BEHIND THE SCENES
          </motion.div>
          <motion.h2
            {...headerReveal(0.12)}
            className="text-[40px] lg:text-[72px] leading-[1.1]"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              color: "#0f1923",
            }}
          >
            Made for <em>every moment.</em>
          </motion.h2>
        </div>

        <div
          className="bento-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "10px",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {CELLS.map((cell, i) => (
            <motion.div
              key={i}
              className={`bento-cell ${cell.cellClass ?? ""}`}
              initial={{ opacity: 0, y: 32, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease }}
              style={{
                gridColumn: cell.gridColumn,
                gridRow: cell.gridRow,
                background: cell.bg,
                borderRadius: "12px",
                overflow: "hidden",
                aspectRatio: "3 / 4",
              }}
            >
              {cell.src && <img src={cell.src} alt="" style={imgStyle} />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
