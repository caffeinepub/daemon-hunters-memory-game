import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Score {
    difficulty: string;
    playerName: string;
    timeSeconds: bigint;
    movesCount: bigint;
}
export interface backendInterface {
    addScore(playerName: string, movesCount: bigint, timeSeconds: bigint, difficulty: string): Promise<void>;
    getTopScores(difficulty: string): Promise<Array<Score>>;
}
