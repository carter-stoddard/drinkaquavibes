export const ArrowLeft = ({ stroke = "white" }: { stroke?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export const ArrowRight = ({ stroke = "white" }: { stroke?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export function ProgressBar({
  progress,
  trackColor = "#e0e8f0",
  fillColor = "#184EA2",
}: {
  progress: number;
  trackColor?: string;
  fillColor?: string;
}) {
  return (
    <div
      style={{
        height: 1,
        width: "100%",
        background: trackColor,
        borderRadius: 999,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${Math.max(0, Math.min(1, progress)) * 100}%`,
          background: fillColor,
          transition: "width 320ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </div>
  );
}

export function NavArrow({
  dir,
  disabled,
  onClick,
  label,
}: {
  dir: -1 | 1;
  disabled: boolean;
  onClick: () => void;
  label: string;
}) {
  const stroke = disabled ? "#c5cdd6" : "white";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={
        disabled
          ? "cursor-default"
          : "cursor-pointer hover:bg-[#205fbf] transition-colors duration-200"
      }
      style={{
        background: disabled ? "#ffffff" : "#184EA2",
        border: disabled ? "1px solid #e8e8e8" : "none",
        borderRadius: 999,
        width: 44,
        height: 44,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {dir === -1 ? <ArrowLeft stroke={stroke} /> : <ArrowRight stroke={stroke} />}
    </button>
  );
}
