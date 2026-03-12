import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, Trophy } from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";
import { useAddScore } from "../hooks/useQueries";

interface WinDialogProps {
  isOpen: boolean;
  moves: number;
  timeSeconds: number;
  difficulty: string;
  onClose: () => void;
  onNewGame: () => void;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

export function WinDialog({
  isOpen,
  moves,
  timeSeconds,
  difficulty,
  onClose,
  onNewGame,
}: WinDialogProps) {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const addScore = useAddScore();

  const handleSubmit = async () => {
    if (!playerName.trim()) return;
    await addScore.mutateAsync({
      playerName: playerName.trim(),
      movesCount: moves,
      timeSeconds,
      difficulty,
    });
    setSubmitted(true);
  };

  const handleNewGame = () => {
    setPlayerName("");
    setSubmitted(false);
    onNewGame();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        data-ocid="win.dialog"
        className="max-w-md border-0 p-0 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.14 0.02 270), oklch(0.18 0.025 265))",
          border: "1.5px solid oklch(0.74 0.14 80 / 0.6)",
          boxShadow:
            "0 0 60px oklch(0.74 0.14 80 / 0.25), 0 25px 50px oklch(0 0 0 / 0.6)",
        }}
      >
        {/* Gold top bar */}
        <div
          className="h-1 w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.74 0.14 80), oklch(0.92 0.18 85), oklch(0.74 0.14 80), transparent)",
          }}
        />

        <div className="p-6">
          <DialogHeader className="text-center pb-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex justify-center mb-4"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.55 0.14 80 / 0.3), oklch(0.25 0.06 80 / 0.2))",
                  border: "2px solid oklch(0.74 0.14 80)",
                  boxShadow: "0 0 30px oklch(0.74 0.14 80 / 0.5)",
                }}
              >
                <Trophy
                  className="w-10 h-10"
                  style={{ color: "oklch(0.82 0.16 82)" }}
                />
              </div>
            </motion.div>
            <DialogTitle
              className="font-display text-3xl"
              style={{ color: "oklch(0.82 0.16 82)" }}
            >
              Victory!
            </DialogTitle>
            <p
              className="text-sm mt-1"
              style={{ color: "oklch(0.65 0.06 80)" }}
            >
              The daemon menace has been purged!
            </p>
          </DialogHeader>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              {
                label: "Difficulty",
                value: difficulty.charAt(0).toUpperCase() + difficulty.slice(1),
                icon: Star,
              },
              { label: "Moves", value: moves.toString(), icon: null },
              { label: "Time", value: formatTime(timeSeconds), icon: null },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg p-3 text-center"
                style={{
                  background: "oklch(0.1 0.01 270)",
                  border: "1px solid oklch(0.74 0.14 80 / 0.3)",
                }}
              >
                <div
                  className="text-lg font-bold font-display"
                  style={{ color: "oklch(0.82 0.16 82)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(0.55 0.04 270)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Score submission */}
          {!submitted ? (
            <div className="space-y-3">
              <Label
                htmlFor="playerName"
                style={{ color: "oklch(0.74 0.14 80)" }}
                className="text-sm"
              >
                Enter your name for the Hall of Heroes
              </Label>
              <Input
                id="playerName"
                data-ocid="win.player_name.input"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Your warrior name..."
                maxLength={30}
                className="border-0"
                style={{
                  background: "oklch(0.1 0.01 270)",
                  border: "1px solid oklch(0.74 0.14 80 / 0.4)",
                  color: "oklch(0.92 0.03 85)",
                }}
              />
              <div className="flex gap-2">
                <Button
                  data-ocid="win.submit_button"
                  onClick={handleSubmit}
                  disabled={!playerName.trim() || addScore.isPending}
                  className="flex-1 font-display"
                  style={{
                    background: playerName.trim()
                      ? "linear-gradient(135deg, oklch(0.65 0.14 80), oklch(0.74 0.16 82))"
                      : "oklch(0.2 0.01 270)",
                    color: playerName.trim()
                      ? "oklch(0.1 0.005 280)"
                      : "oklch(0.45 0.03 270)",
                    border: "none",
                  }}
                >
                  {addScore.isPending ? "Submitting..." : "Submit Score"}
                </Button>
                <Button
                  variant="outline"
                  onClick={handleNewGame}
                  className="flex-1 font-display"
                  style={{
                    background: "transparent",
                    border: "1px solid oklch(0.74 0.14 80 / 0.4)",
                    color: "oklch(0.74 0.14 80)",
                  }}
                >
                  Skip & Play Again
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-3">
              <p className="text-sm" style={{ color: "oklch(0.74 0.14 80)" }}>
                ✦ Score recorded, {playerName}! ✦
              </p>
              <Button
                onClick={handleNewGame}
                className="w-full font-display"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.65 0.14 80), oklch(0.74 0.16 82))",
                  color: "oklch(0.1 0.005 280)",
                  border: "none",
                }}
              >
                Play Again
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
