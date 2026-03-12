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
        onClick={isClickable ? onClick : undefined}
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
              "linear-gradient(135deg, oklch(0.12 0.015 270), oklch(0.16 0.02 265))",
            border: "1.5px solid oklch(0.35 0.06 80 / 0.5)",
            boxShadow: "inset 0 0 20px oklch(0 0 0 / 0.5)",
          }}
        >
          <div
            className="absolute inset-2 rounded"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, oklch(0.25 0.04 80 / 0.15) 0px, transparent 1px, transparent 12px, oklch(0.25 0.04 80 / 0.15) 12px, transparent 13px), repeating-linear-gradient(90deg, oklch(0.25 0.04 80 / 0.15) 0px, transparent 1px, transparent 12px, oklch(0.25 0.04 80 / 0.15) 12px, transparent 13px)",
            }}
          />
          <div className="opacity-20">
            <InquisitionSeal size={48} />
          </div>
          <div
            className="absolute top-1.5 left-1.5 w-3 h-3"
            style={{
              borderTop: "1.5px solid oklch(0.6 0.12 80 / 0.6)",
              borderLeft: "1.5px solid oklch(0.6 0.12 80 / 0.6)",
            }}
          />
          <div
            className="absolute top-1.5 right-1.5 w-3 h-3"
            style={{
              borderTop: "1.5px solid oklch(0.6 0.12 80 / 0.6)",
              borderRight: "1.5px solid oklch(0.6 0.12 80 / 0.6)",
            }}
          />
          <div
            className="absolute bottom-1.5 left-1.5 w-3 h-3"
            style={{
              borderBottom: "1.5px solid oklch(0.6 0.12 80 / 0.6)",
              borderLeft: "1.5px solid oklch(0.6 0.12 80 / 0.6)",
            }}
          />
          <div
            className="absolute bottom-1.5 right-1.5 w-3 h-3"
            style={{
              borderBottom: "1.5px solid oklch(0.6 0.12 80 / 0.6)",
              borderRight: "1.5px solid oklch(0.6 0.12 80 / 0.6)",
            }}
          />
        </div>

        {/* Card Front */}
        <div
          className={`card-face card-front flex items-center justify-center ${card.isMatched ? "animate-pulse-glow" : ""}`}
          style={{
            background: card.isMatched
              ? "linear-gradient(135deg, oklch(0.18 0.04 80), oklch(0.22 0.05 75))"
              : "linear-gradient(135deg, oklch(0.14 0.015 270), oklch(0.18 0.02 265))",
            border: card.isMatched
              ? "1.5px solid oklch(0.74 0.14 80)"
              : "1.5px solid oklch(0.35 0.06 80 / 0.6)",
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
