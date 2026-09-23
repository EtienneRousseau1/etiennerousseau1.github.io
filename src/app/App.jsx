import React, { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./routes";
import "../styles/base.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  // Block body: a concise arrow would return scrollTo's value, which React
  // then treats as a cleanup function and throws on.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}
