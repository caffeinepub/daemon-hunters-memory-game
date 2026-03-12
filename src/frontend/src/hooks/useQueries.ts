import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Score } from "../backend.d";
import { useActor } from "./useActor";

export function useTopScores(difficulty: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Score[]>({
    queryKey: ["topScores", difficulty],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTopScores(difficulty);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAddScore() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      playerName,
      movesCount,
      timeSeconds,
      difficulty,
    }: {
      playerName: string;
      movesCount: number;
      timeSeconds: number;
      difficulty: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      await actor.addScore(
        playerName,
        BigInt(movesCount),
        BigInt(timeSeconds),
        difficulty,
      );
    },
    onSuccess: (_, vars) => {
      queryClient.invalidateQueries({
        queryKey: ["topScores", vars.difficulty],
      });
    },
  });
}
