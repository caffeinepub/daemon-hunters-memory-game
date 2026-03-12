import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Clock, Shuffle, Target, Trophy } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Leaderboard } from "./components/Leaderboard";
import { MemoryCard } from "./components/MemoryCard";
import { WinDialog } from "./components/WinDialog";
import { CARD_ICONS } from "./icons/DaemonHunterIcons";
import { InquisitionSeal } from "./icons/DaemonHunterIcons";

const queryClient = new QueryClient();

type Difficulty = "easy" | "medium" | "hard";

const DIFFICULTY_CONFIG: Record<
  Difficulty,
  { cols: number; pairs: number; label: string }
> = {
  easy: { cols: 4, pairs: 6, label: "Easy" },
  medium: { cols: 4, pairs: 8, label: "Medium" },
  hard: { cols: 5, pairs: 10, label: "Hard" },
};

interface CardData {
  uid: number;
  iconId: number;
  isFlipped: boolean;
  isMatched: boolean;
  Component: React.ComponentType<{ size?: number; className?: string }>;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function createCards(pairs: number): CardData[] {
  const icons = CARD_ICONS.slice(0, pairs);
  const doubled = [...icons, ...icons].map((icon, i) => ({
    uid: i,
    iconId: icon.id,
    isFlipped: false,
    isMatched: false,
    Component: icon.Component,
  }));
  return shuffle(doubled);
}

function formatTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function GameApp() {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");
  const [cards, setCards] = useState<CardData[]>(() =>
    createCards(DIFFICULTY_CONFIG.easy.pairs),
  );
  const [flipped, setFlipped] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [checking, setChecking] = useState(false);
  const [showWin, setShowWin] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [gameKey, setGameKey] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer
  useEffect(() => {
    if (timerActive) {
      timerRef.current = setInterval(() => setTimer((t) => t + 1), 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerActive]);

  // Check win
  useEffect(() => {
    if (cards.length > 0 && cards.every((c) => c.isMatched)) {
      setTimerActive(false);
      setTimeout(() => setShowWin(true), 600);
    }
  }, [cards]);

  const startNewGame = useCallback(
    (diff: Difficulty = difficulty) => {
      setCards(createCards(DIFFICULTY_CONFIG[diff].pairs));
      setFlipped([]);
      setMoves(0);
      setTimer(0);
      setTimerActive(false);
      setChecking(false);
      setShowWin(false);
      setGameKey((k) => k + 1);
    },
    [difficulty],
  );

  const handleDifficultyChange = (d: Difficulty) => {
    setDifficulty(d);
    startNewGame(d);
  };

  const handleCardClick = (uid: number) => {
    if (checking || flipped.length >= 2) return;
    const card = cards.find((c) => c.uid === uid);
    if (!card || card.isFlipped || card.isMatched) return;

    // Start timer on first flip
    if (!timerActive && moves === 0 && flipped.length === 0) {
      setTimerActive(true);
    }

    const newFlipped = [...flipped, uid];
    setCards((prev) =>
      prev.map((c) => (c.uid === uid ? { ...c, isFlipped: true } : c)),
    );
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      setChecking(true);
      const [a, b] = newFlipped;
      const cardA = cards.find((c) => c.uid === a)!;
      const cardB = cards.find((c) => c.uid === b)!;

      if (cardA.iconId === cardB.iconId) {
        // Match!
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.uid === a || c.uid === b
                ? { ...c, isMatched: true, isFlipped: false }
                : c,
            ),
          );
          setFlipped([]);
          setChecking(false);
        }, 500);
      } else {
        // No match — flip back
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.uid === a || c.uid === b ? { ...c, isFlipped: false } : c,
            ),
          );
          setFlipped([]);
          setChecking(false);
        }, 1100);
      }
    }
  };

  const matchedCount = cards.filter((c) => c.isMatched).length / 2;
  const totalPairs = DIFFICULTY_CONFIG[difficulty].pairs;
  const config = DIFFICULTY_CONFIG[difficulty];

  return (
    <div className="min-h-dvh gothic-bg flex flex-col">
      {/* Header */}
      <header
        className="relative border-b px-4 py-3 flex items-center justify-between"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.1 0.015 270), oklch(0.12 0.012 270))",
          borderColor: "oklch(0.74 0.14 80 / 0.3)",
        }}
      >
        {/* Left: logo */}
        <div className="flex items-center gap-3">
          <div className="opacity-80">
            <InquisitionSeal size={36} />
          </div>
          <div>
            <h1 className="font-display text-lg leading-tight shimmer-text">
              Daemon Hunters
            </h1>
            <p className="text-xs" style={{ color: "oklch(0.45 0.04 270)" }}>
              Memory Game
            </p>
          </div>
        </div>

        {/* Center: stats */}
        <div className="hidden sm:flex items-center gap-4">
          <div
            className="flex items-center gap-1.5 text-sm"
            style={{ color: "oklch(0.74 0.14 80)" }}
          >
            <Target className="w-4 h-4" />
            <span className="font-bold">{moves}</span>
            <span style={{ color: "oklch(0.45 0.03 270)" }}>moves</span>
          </div>
          <div
            className="w-px h-5"
            style={{ background: "oklch(0.3 0.03 270)" }}
          />
          <div
            className="flex items-center gap-1.5 text-sm"
            style={{ color: "oklch(0.74 0.14 80)" }}
          >
            <Clock className="w-4 h-4" />
            <span className="font-bold font-mono">{formatTime(timer)}</span>
          </div>
          <div
            className="w-px h-5"
            style={{ background: "oklch(0.3 0.03 270)" }}
          />
          <div
            className="flex items-center gap-1.5 text-sm"
            style={{ color: "oklch(0.74 0.14 80)" }}
          >
            <Trophy className="w-4 h-4" />
            <span className="font-bold">
              {matchedCount}/{totalPairs}
            </span>
          </div>
        </div>

        {/* Right: actions */}
        <Button
          data-ocid="game.new_game.button"
          onClick={() => startNewGame()}
          size="sm"
          className="gap-2 font-display text-xs"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.12 80), oklch(0.65 0.14 82))",
            color: "oklch(0.1 0.005 280)",
            border: "none",
          }}
        >
          <Shuffle className="w-3.5 h-3.5" />
          New Game
        </Button>
      </header>

      {/* Mobile stats bar */}
      <div
        className="sm:hidden flex items-center justify-around px-4 py-2 border-b text-sm"
        style={{
          background: "oklch(0.1 0.01 270)",
          borderColor: "oklch(0.74 0.14 80 / 0.15)",
        }}
      >
        <div
          className="flex items-center gap-1"
          style={{ color: "oklch(0.74 0.14 80)" }}
        >
          <Target className="w-3.5 h-3.5" />
          <span className="font-bold">{moves}</span>
        </div>
        <div
          className="flex items-center gap-1"
          style={{ color: "oklch(0.74 0.14 80)" }}
        >
          <Clock className="w-3.5 h-3.5" />
          <span className="font-mono font-bold">{formatTime(timer)}</span>
        </div>
        <div
          className="flex items-center gap-1"
          style={{ color: "oklch(0.74 0.14 80)" }}
        >
          <Trophy className="w-3.5 h-3.5" />
          <span className="font-bold">
            {matchedCount}/{totalPairs}
          </span>
        </div>
      </div>

      <main className="flex-1 flex flex-col lg:flex-row gap-4 p-4 max-w-6xl mx-auto w-full">
        {/* Game area */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Difficulty + Leaderboard toggle */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-2">
              {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
                <button
                  type="button"
                  key={d}
                  data-ocid="game.difficulty.tab"
                  onClick={() => handleDifficultyChange(d)}
                  className="px-3 py-1.5 rounded text-sm font-display transition-all"
                  style={{
                    background:
                      difficulty === d
                        ? "linear-gradient(135deg, oklch(0.55 0.12 80), oklch(0.65 0.14 82))"
                        : "oklch(0.15 0.01 270)",
                    color:
                      difficulty === d
                        ? "oklch(0.1 0.005 280)"
                        : "oklch(0.55 0.04 270)",
                    border:
                      difficulty === d
                        ? "1px solid oklch(0.74 0.14 80)"
                        : "1px solid oklch(0.22 0.02 270)",
                    fontWeight: difficulty === d ? 700 : 400,
                  }}
                >
                  {DIFFICULTY_CONFIG[d].label}
                </button>
              ))}
            </div>

            <button
              type="button"
              data-ocid="game.leaderboard.tab"
              onClick={() => setShowLeaderboard((v) => !v)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-sm transition-all lg:hidden"
              style={{
                background: showLeaderboard
                  ? "oklch(0.18 0.04 80 / 0.4)"
                  : "oklch(0.15 0.01 270)",
                color: showLeaderboard
                  ? "oklch(0.82 0.16 82)"
                  : "oklch(0.55 0.04 270)",
                border: `1px solid ${showLeaderboard ? "oklch(0.74 0.14 80 / 0.5)" : "oklch(0.22 0.02 270)"}`,
              }}
            >
              <Trophy className="w-3.5 h-3.5" />
              Scores
            </button>
          </div>

          {/* Mobile leaderboard */}
          <AnimatePresence>
            {showLeaderboard && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden lg:hidden"
              >
                <div
                  className="rounded-xl p-4"
                  style={{
                    background: "oklch(0.12 0.012 270)",
                    border: "1px solid oklch(0.74 0.14 80 / 0.2)",
                  }}
                >
                  <h3
                    className="font-display text-sm mb-3"
                    style={{ color: "oklch(0.74 0.14 80)" }}
                  >
                    Hall of Heroes — {DIFFICULTY_CONFIG[difficulty].label}
                  </h3>
                  <Leaderboard difficulty={difficulty} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Card grid */}
          <div
            key={gameKey}
            className="grid gap-2 sm:gap-3"
            style={{ gridTemplateColumns: `repeat(${config.cols}, 1fr)` }}
          >
            {cards.map((card, index) => (
              <div key={card.uid} style={{ minWidth: 0 }}>
                <MemoryCard
                  card={card}
                  index={index}
                  onClick={() => handleCardClick(card.uid)}
                  disabled={checking || flipped.length >= 2}
                />
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div
            className="h-1.5 rounded-full overflow-hidden"
            style={{ background: "oklch(0.16 0.01 270)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.55 0.12 80), oklch(0.82 0.16 82))",
              }}
              animate={{ width: `${(matchedCount / totalPairs) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Desktop Leaderboard sidebar */}
        <div
          className="hidden lg:flex flex-col w-72 rounded-xl p-4 self-start"
          style={{
            background: "oklch(0.12 0.012 270)",
            border: "1px solid oklch(0.74 0.14 80 / 0.2)",
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Trophy
              className="w-4 h-4"
              style={{ color: "oklch(0.74 0.14 80)" }}
            />
            <h3
              className="font-display text-sm"
              style={{ color: "oklch(0.74 0.14 80)" }}
            >
              Hall of Heroes
            </h3>
          </div>
          <div className="flex gap-1 mb-4">
            {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
              <button
                type="button"
                key={d}
                onClick={() => setDifficulty(d)}
                className="flex-1 py-1 rounded text-xs transition-all"
                style={{
                  background:
                    difficulty === d
                      ? "oklch(0.18 0.04 80 / 0.5)"
                      : "transparent",
                  color:
                    difficulty === d
                      ? "oklch(0.82 0.16 82)"
                      : "oklch(0.45 0.03 270)",
                  border: `1px solid ${difficulty === d ? "oklch(0.74 0.14 80 / 0.4)" : "oklch(0.2 0.01 270)"}`,
                }}
              >
                {DIFFICULTY_CONFIG[d].label}
              </button>
            ))}
          </div>
          <Leaderboard difficulty={difficulty} />
        </div>
      </main>

      {/* Footer */}
      <footer
        className="text-center py-3 text-xs border-t"
        style={{
          color: "oklch(0.35 0.02 270)",
          borderColor: "oklch(0.2 0.02 270)",
          background: "oklch(0.1 0.008 270)",
        }}
      >
        © {new Date().getFullYear()}. Built with ♥ using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "oklch(0.55 0.08 80)" }}
        >
          caffeine.ai
        </a>
      </footer>

      <WinDialog
        isOpen={showWin}
        moves={moves}
        timeSeconds={timer}
        difficulty={difficulty}
        onClose={() => setShowWin(false)}
        onNewGame={() => startNewGame()}
      />

      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GameApp />
    </QueryClientProvider>
  );
}
