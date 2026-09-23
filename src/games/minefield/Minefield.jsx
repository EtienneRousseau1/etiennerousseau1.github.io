import React from "react";
import { FiCheck, FiRefreshCw } from "react-icons/fi";
import { useMinefield, SIZES } from "./useMinefield";
import "./minefield.css";

const MESSAGES = {
  playing: (turn) => `Player ${turn} — pick a tile`,
  boom: () => "Boom. That one drinks.",
  cleared: () => "Every safe tile found. Nobody drinks.",
};

export default function Minefield() {
  const {
    grid,
    changeGrid,
    mine,
    revealed,
    status,
    turn,
    safeFound,
    reveal,
    reset,
  } = useMinefield(3);

  const over = status !== "playing";
  const tiles = Array.from({ length: grid * grid }, (_, index) => index);

  return (
    <div className="minefield">
      <div className="minefield__bar">
        <div
          className="minefield__sizes"
          role="group"
          aria-label="Grid size"
        >
          {SIZES.map((size) => (
            <button
              key={size.grid}
              type="button"
              className="minefield__size"
              aria-pressed={grid === size.grid}
              onClick={() => changeGrid(size.grid)}
            >
              {size.label}
            </button>
          ))}
        </div>

        <button type="button" className="btn btn--secondary" onClick={reset}>
          <FiRefreshCw aria-hidden="true" />
          New round
        </button>
      </div>

      <p
        className={`minefield__status minefield__status--${status}`}
        role="status"
      >
        {MESSAGES[status](turn)}
      </p>

      <div
        className="minefield__grid"
        style={{ "--grid": grid }}
        aria-label={`Minefield, ${grid} by ${grid}`}
      >
        {tiles.map((index) => {
          const isRevealed = revealed.includes(index);
          const isMine = index === mine;
          // Once the round is over the mine is shown even if nobody hit it.
          const showMine = isMine && (isRevealed || over);

          return (
            <button
              key={index}
              type="button"
              className={[
                "tile",
                isRevealed && !isMine ? "tile--safe" : "",
                showMine ? "tile--mine" : "",
                over && !isRevealed && !isMine ? "tile--dimmed" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              disabled={over || isRevealed}
              aria-label={
                showMine
                  ? "Mine"
                  : isRevealed
                    ? "Safe"
                    : `Hidden tile ${index + 1}`
              }
              onClick={() => reveal(index)}
            >
              <span aria-hidden="true">
                {showMine ? "💥" : isRevealed ? <FiCheck /> : ""}
              </span>
            </button>
          );
        })}
      </div>

      <p className="minefield__count">
        {safeFound} safe {safeFound === 1 ? "tile" : "tiles"} found
      </p>
    </div>
  );
}
