import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MacbookPro } from "./screens/MacbookPro";
import { ImageGeneration } from "./screens/ImageGeneration";
import Pricing from "./screens/Pricing/Pricing";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MacbookPro />} />
        <Route path="/generate" element={<ImageGeneration />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  </StrictMode>
);