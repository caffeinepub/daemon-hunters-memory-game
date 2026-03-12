import { Crown, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import type { Score } from "../backend.d";
import { useTopScores } from "../hooks/useQueries";

interface LeaderboardProps {
  difficulty: string;
}

function formatTime(seconds: bigint): string {
  const s = Number(seconds);
  const m = Math.floor(s / 60);
  const rem = s % 60;
  return m > 0 ? `${m}m ${rem}s` : `${s}s`;
}

const RANK_COLORS = [
  "oklch(0.82 0.16 82)", // Gold
  "oklch(0.8 0.04 220)", // Silver
  "oklch(0.65 0.12 45)", // Bronze
];

export function Leaderboard({ difficulty }: LeaderboardProps) {
  const { data: scores, isLoading, isError } = useTopScores(difficulty);

  if (isLoading) {
    return (
      <div
        data-ocid="leaderboard.loading_state"
        className="flex items-center justify-center py-8"
      >
        <Loader2
          className="w-6 h-6 animate-spin"
          style={{ color: "oklch(0.74 0.14 80)" }}
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div
        data-ocid="leaderboard.error_state"
        className="text-center py-8 text-sm"
        style={{ color: "oklch(0.58 0.22 25)" }}
      >
        Failed to load scores
      </div>
    );
  }

  if (!scores || scores.length === 0) {
    return (
      <div data-ocid="leaderboard.empty_state" className="text-center py-8">
        <p className="text-sm" style={{ color: "oklch(0.45 0.03 270)" }}>
          No scores yet — be the first!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {scores.slice(0, 10).map((score: Score, i: number) => (
        <motion.div
          key={`${score.playerName}-${i}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
          className="flex items-center gap-3 rounded-lg px-3 py-2"
          style={{
            background:
              i === 0
                ? "linear-gradient(90deg, oklch(0.20 0.04 80 / 0.4), transparent)"
                : "oklch(0.12 0.01 270)",
            border: `1px solid ${i < 3 ? `${RANK_COLORS[i]}40` : "oklch(0.22 0.02 270)"}`,
          }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              background:
                i < 3 ? `${RANK_COLORS[i]}30` : "oklch(0.16 0.01 270)",
              border: `1px solid ${i < 3 ? RANK_COLORS[i] : "oklch(0.25 0.02 270)"}`,
            }}
          >
            {i === 0 ? (
              <Crown
                className="w-3.5 h-3.5"
                style={{ color: RANK_COLORS[0] }}
              />
            ) : (
              <span
                className="text-xs font-bold"
                style={{
                  color: i < 3 ? RANK_COLORS[i] : "oklch(0.55 0.03 270)",
                }}
              >
                {i + 1}
              </span>
            )}
          </div>
          <span
            className="flex-1 text-sm font-medium truncate"
            style={{ color: "oklch(0.85 0.04 85)" }}
          >
            {score.playerName}
          </span>
          <div
            className="flex gap-3 text-xs"
            style={{ color: "oklch(0.55 0.04 270)" }}
          >
            <span>{Number(score.movesCount)} moves</span>
            <span style={{ color: "oklch(0.74 0.14 80)" }}>
              {formatTime(score.timeSeconds)}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
