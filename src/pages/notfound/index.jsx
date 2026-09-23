import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

export const NotFound = () => (
  <div className="container page">
    <PageHeader
      title="Page not found"
      documentTitle="Not found"
      intro="That page doesn't exist — it may have moved or never been here at all."
    />
    <Link className="btn btn--primary" to="/" style={{ marginTop: "var(--space-6)" }}>
      Back home
    </Link>
  </div>
);
