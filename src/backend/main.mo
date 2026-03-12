import Iter "mo:core/Iter";
import List "mo:core/List";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type Score = {
    playerName : Text;
    movesCount : Nat;
    timeSeconds : Nat;
    difficulty : Text;
  };

  module Score {
    public func compare(score1 : Score, score2 : Score) : Order.Order {
      switch (Nat.compare(score1.movesCount, score2.movesCount)) {
        case (#equal) { Nat.compare(score1.timeSeconds, score2.timeSeconds) };
        case (order) { order };
      };
    };
  };

  let scores = List.empty<Score>();

  public shared ({ caller }) func addScore(playerName : Text, movesCount : Nat, timeSeconds : Nat, difficulty : Text) : async () {
    let score : Score = {
      playerName;
      movesCount;
      timeSeconds;
      difficulty;
    };
    scores.add(score);
  };

  public query ({ caller }) func getTopScores(difficulty : Text) : async [Score] {
    scores.filter(func(score) { score.difficulty == difficulty }).toArray().sort().sliceToArray(0, 10);
  };
};
