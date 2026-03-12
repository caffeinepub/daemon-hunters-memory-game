import React from "react";

const GOLD = "#D4AF37";
const GOLD_BRIGHT = "#F0D060";
const GOLD_DIM = "#A08020";

interface IconProps {
  size?: number;
  className?: string;
}

export const InquisitionSeal = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    <circle cx="32" cy="32" r="28" stroke={GOLD} strokeWidth="2" fill="none" />
    <circle
      cx="32"
      cy="32"
      r="22"
      stroke={GOLD_DIM}
      strokeWidth="1"
      fill="none"
    />
    {/* I letter */}
    <rect x="29" y="14" width="6" height="36" fill={GOLD} rx="1" />
    <rect x="22" y="14" width="20" height="5" fill={GOLD} rx="1" />
    <rect x="22" y="45" width="20" height="5" fill={GOLD} rx="1" />
    {/* Decorative rays */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
      <line
        key={deg}
        x1={32 + 23 * Math.cos((deg * Math.PI) / 180)}
        y1={32 + 23 * Math.sin((deg * Math.PI) / 180)}
        x2={32 + 28 * Math.cos((deg * Math.PI) / 180)}
        y2={32 + 28 * Math.sin((deg * Math.PI) / 180)}
        stroke={GOLD_DIM}
        strokeWidth="1.5"
      />
    ))}
  </svg>
);

export const DaemonSkull = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    {/* Skull */}
    <ellipse
      cx="32"
      cy="28"
      rx="16"
      ry="15"
      fill={GOLD_DIM}
      stroke={GOLD}
      strokeWidth="1.5"
    />
    <rect x="22" y="38" width="5" height="10" rx="2" fill={GOLD} />
    <rect x="29" y="38" width="5" height="10" rx="2" fill={GOLD} />
    <rect x="36" y="38" width="5" height="10" rx="2" fill={GOLD} />
    {/* Eye sockets */}
    <ellipse cx="25" cy="26" rx="4" ry="4.5" fill="#0d0d14" />
    <ellipse cx="39" cy="26" rx="4" ry="4.5" fill="#0d0d14" />
    {/* Nose */}
    <path d="M30 33 L32 30 L34 33 Z" fill="#0d0d14" />
    {/* Horns */}
    <path d="M18 18 Q10 8 14 4 Q16 12 20 16Z" fill={GOLD} />
    <path d="M46 18 Q54 8 50 4 Q48 12 44 16Z" fill={GOLD} />
    {/* Cross-out X */}
    <line
      x1="10"
      y1="10"
      x2="54"
      y2="54"
      stroke="#cc2222"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <line
      x1="54"
      y1="10"
      x2="10"
      y2="54"
      stroke="#cc2222"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const NemesisSword = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    {/* Blade */}
    <polygon
      points="32,4 28,48 32,52 36,48"
      fill={GOLD_BRIGHT}
      stroke={GOLD}
      strokeWidth="1"
    />
    {/* Fuller */}
    <line x1="32" y1="8" x2="32" y2="46" stroke={GOLD_DIM} strokeWidth="1" />
    {/* Guard */}
    <rect x="20" y="48" width="24" height="4" rx="2" fill={GOLD} />
    <circle cx="20" cy="50" r="3" fill={GOLD} />
    <circle cx="44" cy="50" r="3" fill={GOLD} />
    {/* Grip */}
    <rect x="29" y="52" width="6" height="9" rx="2" fill={GOLD_DIM} />
    {/* Pommel */}
    <circle cx="32" cy="62" r="3" fill={GOLD} />
    {/* Rune on blade */}
    <path
      d="M29 20 L35 20 M32 16 L32 28"
      stroke={GOLD_BRIGHT}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M29 30 L32 26 L35 30"
      fill="none"
      stroke={GOLD_BRIGHT}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const PuritySeal = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    {/* Wax seal circle */}
    <circle
      cx="32"
      cy="36"
      r="18"
      fill={GOLD_DIM}
      stroke={GOLD}
      strokeWidth="2"
    />
    {/* Seal texture lines */}
    <circle
      cx="32"
      cy="36"
      r="13"
      fill="none"
      stroke={GOLD}
      strokeWidth="1"
      strokeDasharray="2 3"
    />
    {/* I on wax */}
    <rect x="30" y="28" width="4" height="16" fill={GOLD_BRIGHT} rx="0.5" />
    <rect x="26" y="28" width="12" height="3" fill={GOLD_BRIGHT} rx="0.5" />
    <rect x="26" y="41" width="12" height="3" fill={GOLD_BRIGHT} rx="0.5" />
    {/* Ribbon */}
    <path
      d="M24 18 Q20 10 26 8 Q32 6 32 14 Q32 6 38 8 Q44 10 40 18"
      fill={GOLD}
    />
    <path d="M24 18 L28 22 M40 18 L36 22" stroke={GOLD} strokeWidth="1.5" />
    {/* Ribbon tails */}
    <path d="M26 14 L22 22 L28 20Z" fill={GOLD_DIM} />
    <path d="M38 14 L42 22 L36 20Z" fill={GOLD_DIM} />
  </svg>
);

export const GreyKnightsHelm = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    {/* Helm silhouette */}
    <path
      d="M14 30 Q14 10 32 8 Q50 10 50 30 L50 44 Q50 52 32 54 Q14 52 14 44Z"
      fill={GOLD_DIM}
      stroke={GOLD}
      strokeWidth="2"
    />
    {/* Visor */}
    <path d="M20 30 L44 30 L44 40 Q44 46 32 47 Q20 46 20 40Z" fill="#0d0d14" />
    {/* Eye slits */}
    <rect x="22" y="32" width="8" height="3" rx="1.5" fill={GOLD_BRIGHT} />
    <rect x="34" y="32" width="8" height="3" rx="1.5" fill={GOLD_BRIGHT} />
    {/* Top crest */}
    <path d="M24 12 Q28 4 32 6 Q36 4 40 12" fill={GOLD} />
    {/* Forehead trim */}
    <path
      d="M14 30 Q18 22 32 20 Q46 22 50 30"
      fill="none"
      stroke={GOLD}
      strokeWidth="1.5"
    />
    {/* Cheek plates */}
    <path
      d="M14 36 Q16 42 20 44"
      stroke={GOLD_BRIGHT}
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M50 36 Q48 42 44 44"
      stroke={GOLD_BRIGHT}
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

export const WardingHalberd = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    {/* Staff */}
    <rect x="30" y="6" width="4" height="52" rx="2" fill={GOLD_DIM} />
    {/* Blade */}
    <path
      d="M32 6 L22 22 L26 24 L32 18 L38 24 L42 22Z"
      fill={GOLD_BRIGHT}
      stroke={GOLD}
      strokeWidth="1"
    />
    {/* Cross piece */}
    <rect x="20" y="24" width="24" height="3" rx="1.5" fill={GOLD} />
    {/* Spike top */}
    <polygon points="32,4 29,10 35,10" fill={GOLD_BRIGHT} />
    {/* Bottom ferrule */}
    <rect x="28" y="54" width="8" height="4" rx="2" fill={GOLD} />
    {/* Runes on blade */}
    <path d="M30 13 L34 13" stroke="#0d0d14" strokeWidth="1" />
    <path d="M31 10 L33 16" stroke="#0d0d14" strokeWidth="1" />
  </svg>
);

export const SacredTome = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    {/* Book body */}
    <rect
      x="10"
      y="10"
      width="38"
      height="46"
      rx="2"
      fill={GOLD_DIM}
      stroke={GOLD}
      strokeWidth="2"
    />
    {/* Spine */}
    <rect x="10" y="10" width="6" height="46" rx="2" fill={GOLD} />
    {/* Pages */}
    <rect x="16" y="12" width="30" height="42" fill="#1a1408" />
    {/* Aquila on cover */}
    <path
      d="M32 22 L26 30 L22 28 L28 36 L24 40 L32 36 L40 40 L36 36 L42 28 L38 30Z"
      fill={GOLD_BRIGHT}
    />
    <ellipse cx="32" cy="24" rx="3" ry="3.5" fill={GOLD_BRIGHT} />
    {/* Text lines */}
    <line x1="20" y1="44" x2="44" y2="44" stroke={GOLD_DIM} strokeWidth="1" />
    <line x1="20" y1="48" x2="38" y2="48" stroke={GOLD_DIM} strokeWidth="1" />
    {/* Clasp */}
    <rect x="44" y="30" width="6" height="6" rx="1" fill={GOLD} />
    <circle cx="47" cy="33" r="1.5" fill="#0d0d14" />
  </svg>
);

export const Stormbolter = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    {/* Main body */}
    <rect
      x="12"
      y="22"
      width="36"
      height="14"
      rx="2"
      fill={GOLD_DIM}
      stroke={GOLD}
      strokeWidth="1.5"
    />
    {/* Dual barrels */}
    <rect x="44" y="24" width="14" height="4" rx="2" fill={GOLD} />
    <rect x="44" y="32" width="14" height="4" rx="2" fill={GOLD} />
    <circle cx="58" cy="26" r="2" fill="#0d0d14" />
    <circle cx="58" cy="34" r="2" fill="#0d0d14" />
    {/* Ammo drum */}
    <circle
      cx="24"
      cy="29"
      r="10"
      fill={GOLD}
      stroke={GOLD_BRIGHT}
      strokeWidth="1.5"
    />
    <circle cx="24" cy="29" r="6" fill={GOLD_DIM} />
    <circle cx="24" cy="29" r="2.5" fill="#0d0d14" />
    {/* Grip */}
    <path
      d="M30 36 L32 50 Q32 54 28 54 L20 54 Q16 54 16 50 L18 36Z"
      fill={GOLD_DIM}
      stroke={GOLD}
      strokeWidth="1"
    />
    {/* Trigger */}
    <path
      d="M22 40 L22 46"
      stroke={GOLD}
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Details */}
    <rect
      x="34"
      y="24"
      width="4"
      height="10"
      rx="1"
      fill={GOLD_BRIGHT}
      opacity="0.5"
    />
  </svg>
);

export const BrotherhoodCross = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    {/* Main cross */}
    <rect x="27" y="6" width="10" height="52" rx="2" fill={GOLD} />
    <rect x="6" y="27" width="52" height="10" rx="2" fill={GOLD} />
    {/* Fleur tips - top */}
    <path d="M32 6 Q28 2 24 6 Q28 8 32 6Z" fill={GOLD_BRIGHT} />
    <path d="M32 6 Q36 2 40 6 Q36 8 32 6Z" fill={GOLD_BRIGHT} />
    {/* Fleur tips - bottom */}
    <path d="M32 58 Q28 62 24 58 Q28 56 32 58Z" fill={GOLD_BRIGHT} />
    <path d="M32 58 Q36 62 40 58 Q36 56 32 58Z" fill={GOLD_BRIGHT} />
    {/* Fleur tips - left */}
    <path d="M6 32 Q2 28 6 24 Q8 28 6 32Z" fill={GOLD_BRIGHT} />
    <path d="M6 32 Q2 36 6 40 Q8 36 6 32Z" fill={GOLD_BRIGHT} />
    {/* Fleur tips - right */}
    <path d="M58 32 Q62 28 58 24 Q56 28 58 32Z" fill={GOLD_BRIGHT} />
    <path d="M58 32 Q62 36 58 40 Q56 36 58 32Z" fill={GOLD_BRIGHT} />
    {/* Center circle */}
    <circle cx="32" cy="32" r="8" fill={GOLD_BRIGHT} />
    <circle cx="32" cy="32" r="5" fill={GOLD_DIM} />
    <circle cx="32" cy="32" r="2.5" fill={GOLD_BRIGHT} />
  </svg>
);

export const DaemonbaneRune = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    {/* Outer circle */}
    <circle cx="32" cy="32" r="28" stroke={GOLD} strokeWidth="2" fill="none" />
    {/* Inner circle */}
    <circle
      cx="32"
      cy="32"
      r="20"
      stroke={GOLD_DIM}
      strokeWidth="1"
      fill="none"
    />
    {/* Triangle */}
    <polygon
      points="32,10 10,50 54,50"
      fill="none"
      stroke={GOLD_BRIGHT}
      strokeWidth="2"
    />
    {/* Inverted triangle */}
    <polygon
      points="32,54 10,14 54,14"
      fill="none"
      stroke={GOLD}
      strokeWidth="1.5"
    />
    {/* Center hexagram intersection fill */}
    <polygon points="32,22 22,38 42,38" fill={GOLD_DIM} opacity="0.5" />
    <polygon points="32,42 22,26 42,26" fill={GOLD} opacity="0.4" />
    {/* Center dot */}
    <circle cx="32" cy="32" r="4" fill={GOLD_BRIGHT} />
    <circle cx="32" cy="32" r="2" fill="#0d0d14" />
    {/* Outer rune marks */}
    {[0, 60, 120, 180, 240, 300].map((deg) => (
      <line
        key={deg}
        x1={32 + 20 * Math.cos((deg * Math.PI) / 180)}
        y1={32 + 20 * Math.sin((deg * Math.PI) / 180)}
        x2={32 + 28 * Math.cos((deg * Math.PI) / 180)}
        y2={32 + 28 * Math.sin((deg * Math.PI) / 180)}
        stroke={GOLD}
        strokeWidth="2"
        strokeLinecap="round"
      />
    ))}
  </svg>
);

export const CARD_ICONS = [
  { id: 1, name: "Inquisition Seal", Component: InquisitionSeal },
  { id: 2, name: "Daemon Skull", Component: DaemonSkull },
  { id: 3, name: "Nemesis Sword", Component: NemesisSword },
  { id: 4, name: "Purity Seal", Component: PuritySeal },
  { id: 5, name: "Grey Knights Helm", Component: GreyKnightsHelm },
  { id: 6, name: "Warding Halberd", Component: WardingHalberd },
  { id: 7, name: "Sacred Tome", Component: SacredTome },
  { id: 8, name: "Stormbolter", Component: Stormbolter },
  { id: 9, name: "Brotherhood Cross", Component: BrotherhoodCross },
  { id: 10, name: "Daemonbane Rune", Component: DaemonbaneRune },
];
