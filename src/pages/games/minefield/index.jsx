import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import Minefield from "../../../games/minefield/Minefield";
import { games } from "../../../games";

const game = games.find((entry) => entry.slug === "minefield");

export const MinefieldPage = () => (
  <div className="container page">
    <Link className="eyebrow" to="/games" style={{ display: "inline-block" }}>
      ← Games
    </Link>
    <PageHeader
      title={game.name}
      documentTitle={game.name}
      intro={game.description}
    />
    <Minefield />
  </div>
);
