import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import WholesalePage from "./pages/WholesalePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import AccessibilityPage from "./pages/AccessibilityPage";
import CookiesPage from "./pages/CookiesPage";
import CCPAPage from "./pages/CCPAPage";
import FDADisclaimerPage from "./pages/FDADisclaimerPage";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import "./index.css";

function SmoothScrollLayout({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  return <>{children}</>;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScrollLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/wholesale" element={<WholesalePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/ccpa" element={<CCPAPage />} />
          <Route path="/fda-disclaimer" element={<FDADisclaimerPage />} />
        </Routes>
      </SmoothScrollLayout>
    </BrowserRouter>
  </StrictMode>
);
