import React from "react";

// KPop Daemon Hunters color palette
const PINK = "#FF1493";
const PINK_LIGHT = "#FF69B4";
const PURPLE = "#8A2BE2";
const PURPLE_LIGHT = "#DA70D6";
const CYAN = "#00E5FF";
const GOLD = "#FFD700";
const MAGENTA = "#FF00FF";
const WHITE = "#FFFFFF";

interface IconProps {
  size?: number;
  className?: string;
}

// 1. Microphone
export const Microphone = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    <defs>
      <radialGradient id="mic-body" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor={PINK_LIGHT} />
        <stop offset="100%" stopColor={PINK} />
      </radialGradient>
    </defs>
    {/* Mic head */}
    <rect
      x="22"
      y="6"
      width="20"
      height="30"
      rx="10"
      fill="url(#mic-body)"
      stroke={MAGENTA}
      strokeWidth="1.5"
    />
    {/* Shine */}
    <ellipse cx="27" cy="14" rx="3" ry="5" fill={WHITE} opacity="0.3" />
    {/* Grille lines */}
    <line
      x1="22"
      y1="20"
      x2="42"
      y2="20"
      stroke={PINK}
      strokeWidth="1"
      opacity="0.6"
    />
    <line
      x1="22"
      y1="25"
      x2="42"
      y2="25"
      stroke={PINK}
      strokeWidth="1"
      opacity="0.6"
    />
    <line
      x1="22"
      y1="30"
      x2="42"
      y2="30"
      stroke={PINK}
      strokeWidth="1"
      opacity="0.6"
    />
    {/* Stand curve */}
    <path
      d="M20 36 Q20 48 32 48 Q44 48 44 36"
      stroke={PURPLE}
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Base */}
    <rect x="27" y="48" width="10" height="4" rx="2" fill={PURPLE} />
    <rect x="20" y="52" width="24" height="4" rx="2" fill={PURPLE_LIGHT} />
    {/* Stars */}
    <circle cx="14" cy="12" r="2" fill={GOLD} />
    <circle cx="50" cy="20" r="1.5" fill={CYAN} />
    <circle cx="52" cy="10" r="1" fill={GOLD} />
  </svg>
);

// 2. Star
export const StarIcon = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    <defs>
      <radialGradient id="star-grad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={GOLD} />
        <stop offset="100%" stopColor="#FF8C00" />
      </radialGradient>
    </defs>
    {/* Main star */}
    <polygon
      points="32,5 38,22 56,22 42,33 47,50 32,40 17,50 22,33 8,22 26,22"
      fill="url(#star-grad)"
      stroke={PINK}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Inner shine */}
    <polygon
      points="32,12 36,23 47,23 38,30 41,41 32,35 23,41 26,30 17,23 28,23"
      fill={GOLD}
      opacity="0.4"
    />
    {/* Sparkle rays */}
    <line
      x1="32"
      y1="1"
      x2="32"
      y2="4"
      stroke={CYAN}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="58"
      y1="15"
      x2="56"
      y2="17"
      stroke={CYAN}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="6"
      y1="15"
      x2="8"
      y2="17"
      stroke={CYAN}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="52"
      y1="54"
      x2="50"
      y2="52"
      stroke={PINK}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="12"
      y1="54"
      x2="14"
      y2="52"
      stroke={PINK}
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Center dot */}
    <circle cx="32" cy="28" r="3" fill={WHITE} opacity="0.7" />
  </svg>
);

// 3. Crown
export const Crown = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="crown-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={GOLD} />
        <stop offset="50%" stopColor="#FFF176" />
        <stop offset="100%" stopColor="#FF8C00" />
      </linearGradient>
    </defs>
    {/* Crown body */}
    <path
      d="M8 46 L8 28 L20 38 L32 14 L44 38 L56 28 L56 46 Z"
      fill="url(#crown-grad)"
      stroke={PINK}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Base band */}
    <rect
      x="8"
      y="42"
      width="48"
      height="8"
      rx="2"
      fill={PURPLE}
      stroke={PINK}
      strokeWidth="1"
    />
    {/* Jewels on band */}
    <circle cx="20" cy="46" r="3.5" fill={PINK} />
    <circle cx="32" cy="46" r="3.5" fill={CYAN} />
    <circle cx="44" cy="46" r="3.5" fill={MAGENTA} />
    {/* Top jewels */}
    <circle cx="32" cy="14" r="4" fill={PINK} stroke={WHITE} strokeWidth="1" />
    <circle cx="20" cy="38" r="3" fill={CYAN} stroke={WHITE} strokeWidth="1" />
    <circle
      cx="44"
      cy="38"
      r="3"
      fill={PURPLE_LIGHT}
      stroke={WHITE}
      strokeWidth="1"
    />
    {/* Shine lines on crown */}
    <line
      x1="14"
      y1="30"
      x2="16"
      y2="40"
      stroke={WHITE}
      strokeWidth="1"
      opacity="0.4"
    />
    <line
      x1="48"
      y1="30"
      x2="50"
      y2="40"
      stroke={WHITE}
      strokeWidth="1"
      opacity="0.4"
    />
  </svg>
);

// 4. Music Note
export const MusicNote = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="note-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={CYAN} />
        <stop offset="100%" stopColor={PURPLE} />
      </linearGradient>
    </defs>
    {/* Note stem */}
    <rect x="36" y="10" width="5" height="36" rx="2.5" fill="url(#note-grad)" />
    {/* Note flag */}
    <path d="M41 10 Q56 16 52 28 Q48 22 41 22Z" fill={CYAN} />
    {/* Note head */}
    <ellipse
      cx="28"
      cy="46"
      rx="11"
      ry="8"
      fill="url(#note-grad)"
      stroke={MAGENTA}
      strokeWidth="1.5"
      transform="rotate(-15 28 46)"
    />
    {/* Shine */}
    <ellipse
      cx="24"
      cy="43"
      rx="3"
      ry="2"
      fill={WHITE}
      opacity="0.35"
      transform="rotate(-15 24 43)"
    />
    {/* Sparkles */}
    <circle cx="52" cy="10" r="2" fill={GOLD} />
    <circle cx="56" cy="20" r="1.5" fill={PINK} />
    <circle cx="10" cy="20" r="2" fill={GOLD} />
    <circle cx="8" cy="32" r="1.5" fill={CYAN} />
  </svg>
);

// 5. Heart Beat
export const HeartBeat = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="heart-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={PINK} />
        <stop offset="100%" stopColor={MAGENTA} />
      </linearGradient>
    </defs>
    {/* Heart */}
    <path
      d="M32 52 L10 30 Q4 22 10 16 Q16 10 24 14 Q28 16 32 20 Q36 16 40 14 Q48 10 54 16 Q60 22 54 30 Z"
      fill="url(#heart-grad)"
      stroke={PINK_LIGHT}
      strokeWidth="1"
    />
    {/* Shine on heart */}
    <ellipse
      cx="22"
      cy="20"
      rx="5"
      ry="3"
      fill={WHITE}
      opacity="0.3"
      transform="rotate(-30 22 20)"
    />
    {/* Pulse line across */}
    <polyline
      points="8,38 16,38 20,28 24,46 28,34 32,38 38,38"
      stroke={WHITE}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.9"
    />
    {/* Mini sparkles */}
    <circle cx="50" cy="12" r="2" fill={GOLD} />
    <circle cx="14" cy="10" r="1.5" fill={CYAN} />
  </svg>
);

// 6. Diamond
export const Diamond = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="gem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={CYAN} />
        <stop offset="40%" stopColor="#80FFFF" />
        <stop offset="100%" stopColor={PURPLE} />
      </linearGradient>
    </defs>
    {/* Diamond shape */}
    <polygon
      points="32,6 56,24 32,58 8,24"
      fill="url(#gem-grad)"
      stroke={CYAN}
      strokeWidth="1.5"
    />
    {/* Top facets */}
    <polygon points="32,6 44,24 32,24 20,24" fill={WHITE} opacity="0.25" />
    {/* Side facets */}
    <polygon points="20,24 32,24 32,58" fill={PURPLE} opacity="0.35" />
    <polygon points="44,24 32,24 32,58" fill={CYAN} opacity="0.2" />
    {/* Horizontal cut line */}
    <line
      x1="8"
      y1="24"
      x2="56"
      y2="24"
      stroke={WHITE}
      strokeWidth="1"
      opacity="0.5"
    />
    {/* Shine */}
    <polygon points="26,8 30,22 22,22" fill={WHITE} opacity="0.5" />
    {/* Sparkle dots */}
    <circle cx="56" cy="14" r="2" fill={GOLD} />
    <circle cx="8" cy="14" r="2" fill={PINK} />
    <circle cx="32" cy="2" r="2.5" fill={GOLD} />
  </svg>
);

// 7. Headphones
export const Headphones = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="hp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={PURPLE} />
        <stop offset="100%" stopColor={PINK} />
      </linearGradient>
    </defs>
    {/* Headband */}
    <path
      d="M12 36 Q12 10 32 10 Q52 10 52 36"
      stroke="url(#hp-grad)"
      strokeWidth="5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Left cup */}
    <rect
      x="6"
      y="32"
      width="14"
      height="20"
      rx="6"
      fill="url(#hp-grad)"
      stroke={MAGENTA}
      strokeWidth="1.5"
    />
    {/* Right cup */}
    <rect
      x="44"
      y="32"
      width="14"
      height="20"
      rx="6"
      fill="url(#hp-grad)"
      stroke={MAGENTA}
      strokeWidth="1.5"
    />
    {/* Cup details */}
    <circle cx="13" cy="42" r="4" fill={PINK_LIGHT} opacity="0.5" />
    <circle cx="51" cy="42" r="4" fill={PINK_LIGHT} opacity="0.5" />
    {/* LED lights */}
    <circle cx="10" cy="34" r="2" fill={CYAN} />
    <circle cx="54" cy="34" r="2" fill={CYAN} />
    {/* Music wave lines */}
    <path
      d="M25 44 Q28 40 32 44 Q36 48 39 44"
      stroke={GOLD}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

// 8. Dance Figure
export const DanceFigure = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="dance-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={MAGENTA} />
        <stop offset="100%" stopColor={PURPLE} />
      </linearGradient>
    </defs>
    {/* Head */}
    <circle
      cx="38"
      cy="10"
      r="7"
      fill="url(#dance-grad)"
      stroke={PINK}
      strokeWidth="1.5"
    />
    {/* Hair accessory */}
    <circle cx="34" cy="4" r="3" fill={GOLD} />
    <circle cx="42" cy="4" r="3" fill={PINK} />
    {/* Body */}
    <path
      d="M38 17 Q42 26 40 34"
      stroke="url(#dance-grad)"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
    {/* Left arm raised */}
    <path
      d="M38 22 Q28 16 20 10"
      stroke={PINK}
      strokeWidth="3.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Right arm out */}
    <path
      d="M40 26 Q50 28 56 34"
      stroke={CYAN}
      strokeWidth="3.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Left leg kick */}
    <path
      d="M40 34 Q32 44 22 50"
      stroke="url(#dance-grad)"
      strokeWidth="3.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Right leg */}
    <path
      d="M40 34 Q46 44 50 56"
      stroke={PURPLE_LIGHT}
      strokeWidth="3.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Sparkle trail */}
    <circle cx="16" cy="8" r="2" fill={GOLD} />
    <circle cx="22" cy="14" r="1.5" fill={CYAN} />
    <circle cx="58" cy="36" r="2" fill={GOLD} />
    <circle cx="20" cy="52" r="1.5" fill={PINK} />
  </svg>
);

// 9. Lightning Bolt
export const LightningBolt = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    <defs>
      <linearGradient id="bolt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={GOLD} />
        <stop offset="50%" stopColor={PINK} />
        <stop offset="100%" stopColor={PURPLE} />
      </linearGradient>
    </defs>
    {/* Glow shadow */}
    <polygon
      points="38,4 16,34 30,34 24,60 48,26 34,26"
      fill={PINK}
      opacity="0.25"
      transform="translate(2,2)"
    />
    {/* Main bolt */}
    <polygon
      points="38,4 16,34 30,34 24,60 48,26 34,26"
      fill="url(#bolt-grad)"
      stroke={GOLD}
      strokeWidth="1"
      strokeLinejoin="round"
    />
    {/* Inner highlight */}
    <polygon
      points="36,10 22,32 33,32 28,52 44,28 32,28"
      fill={WHITE}
      opacity="0.2"
    />
    {/* Sparkle dots */}
    <circle cx="10" cy="10" r="2.5" fill={CYAN} />
    <circle cx="56" cy="8" r="2" fill={GOLD} />
    <circle cx="58" cy="56" r="2" fill={PINK} />
    <circle cx="6" cy="54" r="1.5" fill={CYAN} />
  </svg>
);

// 10. Spotlight Star (starburst)
export const SpotlightStar = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    <defs>
      <radialGradient id="spot-grad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={WHITE} stopOpacity="0.9" />
        <stop offset="40%" stopColor={CYAN} />
        <stop offset="100%" stopColor={PURPLE} stopOpacity="0.3" />
      </radialGradient>
    </defs>
    {/* Outer glow ring */}
    <circle cx="32" cy="32" r="28" fill={PURPLE} opacity="0.2" />
    {/* Starburst rays — 16 rays */}
    {[
      0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270,
      292.5, 315, 337.5,
    ].map((deg, i) => {
      const len = i % 2 === 0 ? 26 : 18;
      const x2 = 32 + len * Math.cos((deg * Math.PI) / 180);
      const y2 = 32 + len * Math.sin((deg * Math.PI) / 180);
      return (
        <line
          key={deg}
          x1="32"
          y1="32"
          x2={x2}
          y2={y2}
          stroke={i % 2 === 0 ? CYAN : PINK}
          strokeWidth={i % 2 === 0 ? 2 : 1.5}
          strokeLinecap="round"
          opacity={i % 2 === 0 ? 0.9 : 0.6}
        />
      );
    })}
    {/* Center circle */}
    <circle cx="32" cy="32" r="10" fill="url(#spot-grad)" />
    <circle cx="32" cy="32" r="6" fill={CYAN} opacity="0.7" />
    <circle cx="32" cy="32" r="3" fill={WHITE} />
    {/* Corner sparkles */}
    <circle cx="8" cy="8" r="2" fill={GOLD} />
    <circle cx="56" cy="8" r="2" fill={GOLD} />
    <circle cx="8" cy="56" r="2" fill={PINK} />
    <circle cx="56" cy="56" r="2" fill={PINK} />
  </svg>
);

// Used in header and card backs — simple gold KPop star
export const InquisitionSeal = ({ size = 64, className }: IconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    className={className}
  >
    <defs>
      <radialGradient id="seal-grad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFF176" />
        <stop offset="100%" stopColor={GOLD} />
      </radialGradient>
    </defs>
    {/* Glow */}
    <circle cx="32" cy="32" r="28" fill={GOLD} opacity="0.12" />
    {/* 5-pointed star */}
    <polygon
      points="32,6 38,24 58,24 43,36 48,54 32,43 16,54 21,36 6,24 26,24"
      fill="url(#seal-grad)"
      stroke={PINK}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Inner star highlight */}
    <polygon
      points="32,13 36,25 48,25 38,32 42,44 32,37 22,44 26,32 16,25 28,25"
      fill={WHITE}
      opacity="0.2"
    />
    <circle cx="32" cy="30" r="4" fill={WHITE} opacity="0.5" />
  </svg>
);

export const CARD_ICONS = [
  { id: 1, name: "Microphone", Component: Microphone },
  { id: 2, name: "Star", Component: StarIcon },
  { id: 3, name: "Crown", Component: Crown },
  { id: 4, name: "Music Note", Component: MusicNote },
  { id: 5, name: "Heart Beat", Component: HeartBeat },
  { id: 6, name: "Diamond", Component: Diamond },
  { id: 7, name: "Headphones", Component: Headphones },
  { id: 8, name: "Dance Figure", Component: DanceFigure },
  { id: 9, name: "Lightning Bolt", Component: LightningBolt },
  { id: 10, name: "Spotlight Star", Component: SpotlightStar },
];
