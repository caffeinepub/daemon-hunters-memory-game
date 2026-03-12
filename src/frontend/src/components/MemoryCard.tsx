import { motion } from "motion/react";
import type React from "react";
import { InquisitionSeal } from "../icons/DaemonHunterIcons";

interface CardData {
  uid?: number;
  id?: number;
  iconId: number;
  isFlipped: boolean;
  isMatched: boolean;
  Component: React.ComponentType<{ size?: number; className?: string }>;
}

interface MemoryCardProps {
  card: CardData;
  index: number;
  onClick: () => void;
  disabled: boolean;
}

export function MemoryCard({
  card,
  index,
  onClick,
  disabled,
}: MemoryCardProps) {
  const isVisible = card.isFlipped || card.isMatched;
  const isClickable = !disabled && !card.isMatched && !card.isFlipped;

  const handleClick = () => {
    if (isClickable) onClick();
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (isClickable) onClick();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.03,
        duration: 0.35,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="w-full aspect-square card-scene"
      data-ocid={`game.card.item.${index + 1}`}
    >
      <button
        type="button"
        tabIndex={isClickable ? 0 : -1}
        aria-label={`Card ${index + 1}`}
        className={`card-inner ${isVisible ? "flipped" : ""} ${card.isMatched ? "matched" : ""}`}
        onClick={handleClick}
        onKeyDown={handleKey}
        style={{
          cursor: isClickable ? "pointer" : "default",
          background: "none",
          border: "none",
          padding: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        {/* Card Back */}
        <div
          className="card-face card-back flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.18 0.08 290), oklch(0.22 0.1 310))",
            border: "1.5px solid oklch(0.5 0.2 330 / 0.6)",
            boxShadow: "inset 0 0 20px oklch(0 0 0 / 0.4)",
          }}
        >
          {/* Subtle dot pattern */}
          <div
            className="absolute inset-2 rounded"
            style={{
              backgroundImage:
                "radial-gradient(circle, oklch(0.6 0.2 330 / 0.15) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          />
          <div className="opacity-30">
            <InquisitionSeal size={48} />
          </div>
          {/* Corner accents */}
          <div
            className="absolute top-1.5 left-1.5 w-3 h-3"
            style={{
              borderTop: "1.5px solid oklch(0.65 0.28 350 / 0.7)",
              borderLeft: "1.5px solid oklch(0.65 0.28 350 / 0.7)",
            }}
          />
          <div
            className="absolute top-1.5 right-1.5 w-3 h-3"
            style={{
              borderTop: "1.5px solid oklch(0.65 0.28 350 / 0.7)",
              borderRight: "1.5px solid oklch(0.65 0.28 350 / 0.7)",
            }}
          />
          <div
            className="absolute bottom-1.5 left-1.5 w-3 h-3"
            style={{
              borderBottom: "1.5px solid oklch(0.65 0.28 350 / 0.7)",
              borderLeft: "1.5px solid oklch(0.65 0.28 350 / 0.7)",
            }}
          />
          <div
            className="absolute bottom-1.5 right-1.5 w-3 h-3"
            style={{
              borderBottom: "1.5px solid oklch(0.65 0.28 350 / 0.7)",
              borderRight: "1.5px solid oklch(0.65 0.28 350 / 0.7)",
            }}
          />
        </div>

        {/* Card Front */}
        <div
          className={`card-face card-front flex items-center justify-center ${card.isMatched ? "animate-pulse-glow" : ""}`}
          style={{
            background: card.isMatched
              ? "linear-gradient(135deg, oklch(0.22 0.1 310), oklch(0.28 0.12 330))"
              : "linear-gradient(135deg, oklch(0.18 0.07 285), oklch(0.22 0.09 300))",
            border: card.isMatched
              ? "1.5px solid oklch(0.65 0.28 350)"
              : "1.5px solid oklch(0.4 0.15 310 / 0.7)",
          }}
        >
          <div className="relative flex items-center justify-center w-[70%] h-[70%]">
            <card.Component size={52} />
          </div>
        </div>
      </button>
    </motion.div>
  );
}
