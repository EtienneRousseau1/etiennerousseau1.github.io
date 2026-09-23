import { useCallback, useMemo, useState } from "react";

export const SIZES = [
  { label: "3 × 3", grid: 3 },
  { label: "4 × 4", grid: 4 },
];

/** Never every tile: a round needs at least one safe tile to be playable. */
export const maxMines = (grid) => Math.min(6, grid * grid - 1);

export const mineOptions = (grid) =>
  Array.from({ length: maxMines(grid) }, (_, index) => index + 1);

function placeMines(tileCount, count) {
  const mines = new Set();
  while (mines.size < count) {
    mines.add(Math.floor(Math.random() * tileCount));
  }
  return [...mines];
}

/**
 * Mines are hidden among grid² tiles. Players take turns revealing tiles;
 * every safe tile is a survival, and the first mine found ends the round.
 *
 * The board is configured before it is dealt, so the round starts in "setup"
 * and mines are only placed once the players commit to the settings.
 */
export function useMinefield(initialGrid = 3) {
  const [grid, setGrid] = useState(initialGrid);
  const [mineCount, setMineCount] = useState(1);
  const [round, setRound] = useState({
    mines: [],
    revealed: [],
    status: "setup",
    turn: 1,
  });

  const tileCount = grid * grid;

  const start = useCallback(() => {
    setRound({
      mines: placeMines(tileCount, mineCount),
      revealed: [],
      status: "playing",
      turn: 1,
    });
  }, [tileCount, mineCount]);

  const reveal = useCallback((index) => {
    setRound((current) => {
      if (current.status !== "playing") return current;
      if (current.revealed.includes(index)) return current;

      const revealed = [...current.revealed, index];

      if (current.mines.includes(index)) {
        return { ...current, revealed, status: "boom" };
      }

      const safeTiles = tileCount - current.mines.length;
      return {
        ...current,
        revealed,
        status: revealed.length === safeTiles ? "cleared" : "playing",
        turn: current.turn + 1,
      };
    });
  }, [tileCount]);

  const backToSetup = useCallback(
    () => setRound((current) => ({ ...current, status: "setup" })),
    []
  );

  // Shrinking the board can strand a mine count that no longer fits.
  const changeGrid = useCallback((nextGrid) => {
    setGrid(nextGrid);
    setMineCount((count) => Math.min(count, maxMines(nextGrid)));
  }, []);

  const safeFound = useMemo(
    () => round.revealed.filter((index) => !round.mines.includes(index)).length,
    [round.revealed, round.mines]
  );

  return {
    grid,
    changeGrid,
    mineCount,
    setMineCount,
    mines: round.mines,
    revealed: round.revealed,
    status: round.status,
    turn: round.turn,
    safeFound,
    safeTotal: tileCount - mineCount,
    start,
    reveal,
    reset: start,
    backToSetup,
  };
}
