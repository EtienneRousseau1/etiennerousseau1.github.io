import React from "react";
import { FiCheck, FiRefreshCw, FiSettings } from "react-icons/fi";
import { useMinefield, SIZES, mineOptions } from "./useMinefield";
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
    mineCount,
    setMineCount,
    mines,
    revealed,
    status,
    turn,
    safeFound,
    safeTotal,
    start,
    reveal,
    reset,
    backToSetup,
  } = useMinefield(3);

  if (status === "setup") {
    return (
      <div className="minefield">
        <div className="setup">
          <div className="setup__field">
            <p className="setup__label" id="grid-label">
              Board
            </p>
            <div className="chips" role="group" aria-labelledby="grid-label">
              {SIZES.map((size) => (
                <button
                  key={size.grid}
                  type="button"
                  className="chip"
                  aria-pressed={grid === size.grid}
                  onClick={() => changeGrid(size.grid)}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          <div className="setup__field">
            <p className="setup__label" id="mines-label">
              Mines
            </p>
            <div className="chips" role="group" aria-labelledby="mines-label">
              {mineOptions(grid).map((count) => (
                <button
                  key={count}
                  type="button"
                  className="chip"
                  aria-pressed={mineCount === count}
                  onClick={() => setMineCount(count)}
                >
                  {count}
                </button>
              ))}
            </div>
            <p className="setup__hint">
              {mineCount} mine{mineCount === 1 ? "" : "s"} hidden among{" "}
              {grid * grid} tiles, leaving {safeTotal} safe.
            </p>
          </div>

          <button type="button" className="btn btn--primary" onClick={start}>
            Start round
          </button>
        </div>
      </div>
    );
  }

  const over = status !== "playing";
  const tiles = Array.from({ length: grid * grid }, (_, index) => index);

  return (
    <div className="minefield">
      <div className="minefield__bar">
        <p className="minefield__setting">
          {grid} × {grid} · {mineCount} mine{mineCount === 1 ? "" : "s"}
        </p>

        <div className="minefield__buttons">
          <button type="button" className="btn btn--secondary" onClick={backToSetup}>
            <FiSettings aria-hidden="true" />
            Setup
          </button>
          <button type="button" className="btn btn--secondary" onClick={reset}>
            <FiRefreshCw aria-hidden="true" />
            New round
          </button>
        </div>
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
        aria-label={`Minefield, ${grid} by ${grid}, ${mineCount} mines`}
      >
        {tiles.map((index) => {
          const isRevealed = revealed.includes(index);
          const isMine = mines.includes(index);
          // Once the round is over every mine is shown, hit or not.
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
        {safeFound} of {safeTotal} safe {safeTotal === 1 ? "tile" : "tiles"}{" "}
        found
      </p>
    </div>
  );
}
