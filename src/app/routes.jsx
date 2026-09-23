import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { Home } from "../pages/home";
import { Work } from "../pages/work";
import { Projects } from "../pages/projects";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { NotFound } from "../pages/notfound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* The old site linked here; keep the URL working. */}
        <Route path="/experience" element={<Work />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
