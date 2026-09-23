import { useCallback, useState } from "react";

export const SIZES = [
  { label: "3 × 3", grid: 3 },
  { label: "4 × 4", grid: 4 },
];

const pickMine = (tileCount) => Math.floor(Math.random() * tileCount);

const freshRound = (grid) => ({
  mine: pickMine(grid * grid),
  revealed: [],
  status: "playing",
  turn: 1,
});

/**
 * One mine hidden among grid² tiles. Players take turns revealing tiles; every
 * safe tile is a survival, and the tile holding the mine ends the round.
 */
export function useMinefield(initialGrid = 3) {
  const [grid, setGrid] = useState(initialGrid);
  const [round, setRound] = useState(() => freshRound(initialGrid));

  const reveal = useCallback(
    (index) => {
      setRound((current) => {
        if (current.status !== "playing") return current;
        if (current.revealed.includes(index)) return current;

        const revealed = [...current.revealed, index];

        if (index === current.mine) {
          return { ...current, revealed, status: "boom" };
        }

        const safeTiles = grid * grid - 1;
        return {
          ...current,
          revealed,
          // Clearing every safe tile means the mine is the only one left.
          status: revealed.length === safeTiles ? "cleared" : "playing",
          turn: current.turn + 1,
        };
      });
    },
    [grid]
  );

  const reset = useCallback(() => setRound(freshRound(grid)), [grid]);

  const changeGrid = useCallback((nextGrid) => {
    setGrid(nextGrid);
    setRound(freshRound(nextGrid));
  }, []);

  return {
    grid,
    changeGrid,
    mine: round.mine,
    revealed: round.revealed,
    status: round.status,
    turn: round.turn,
    safeFound: round.revealed.filter((index) => index !== round.mine).length,
    reveal,
    reset,
  };
}
