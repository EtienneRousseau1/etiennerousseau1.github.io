import React from "react";
import { Helmet } from "react-helmet-async";
import { meta } from "../content";

/** Page title block, paired with the document title for the route. */
export default function PageHeader({ title, intro, documentTitle, children }) {
  return (
    <>
      <Helmet>
        <title>{documentTitle ? `${documentTitle} | ${meta.title}` : meta.title}</title>
        <meta name="description" content={intro || meta.description} />
      </Helmet>
      <h1 className="page__title">{title}</h1>
      {intro && <p className="page__intro">{intro}</p>}
      {children}
    </>
  );
}
