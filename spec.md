# Daemon Hunters Memory Game

## Current State
New project, no existing code.

## Requested Changes (Diff)

### Add
- A kids memory card flip game themed around the Daemon Hunters (Golden / Grey Knights) faction
- A grid of face-down cards that can be flipped by clicking
- Each card reveals a Daemon Hunters icon/symbol (e.g. Inquisition seal, daemon skull, purity seal, Nemesis force sword, Dreadknight, warding staff, etc.)
- Cards are matched in pairs; matched pairs stay face-up
- Win condition when all pairs are matched
- Score/move counter and timer
- Difficulty selector (Easy 4x3, Medium 4x4, Hard 5x4)
- Animated card flip effect
- Celebration screen on win
- New game / shuffle button

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Design card icons as SVG symbols representing Daemon Hunters imagery (golden color palette)
2. Build game state: card grid, flip logic, match detection, move counter, timer
3. Implement difficulty levels controlling grid size and number of pairs
4. Add card flip CSS animation (3D transform)
5. Win screen with stats and replay button
6. Responsive layout for kids (large touch targets)
