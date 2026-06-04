import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TermsPage from "./TermsPage";
import PrivacyPage from "./PrivacyPage";
import CookieBanner from "./CookieBanner";
import { LanguageProvider } from "./LanguageContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <CookieBanner />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/conditions" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);
