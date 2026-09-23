import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { games } from "../../games";
import "./games.css";

export const Games = () => (
  <div className="container page">
    <PageHeader
      title="Games"
      documentTitle="Games"
      intro="Small party games built for a phone passed around a table."
    />

    <ul className="games">
      {games.map((game) => (
        <li key={game.slug}>
          <Link className="game" to={`/games/${game.slug}`}>
            <p className="eyebrow">{game.players}</p>
            <h2 className="game__name">{game.name}</h2>
            <p className="game__tagline">{game.tagline}</p>
            <p className="game__description">{game.description}</p>
            <span className="game__cta">Play →</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
