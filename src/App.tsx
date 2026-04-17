import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar }          from "./components/layout/Navbar";
import { Footer }          from "./components/layout/Footer";
import { Home }            from "./pages/Home";
import { TuonCaseStudy }   from "./pages/TuonCaseStudy";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Skip-to-content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-bg px-4 py-2 rounded-md font-body text-sm font-semibold text-text border border-border shadow"
      >
        Skip to main content
      </a>

      <Navbar />

      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/projects/tuon" element={<TuonCaseStudy />} />
        {/* 404 fallback */}
        <Route path="*" element={
          <main id="main-content" className="min-h-screen flex flex-col items-center justify-center bg-bg gap-6 px-6">
            <h1 className="font-display font-bold text-5xl text-text">404</h1>
            <p className="font-body text-lg text-muted">This page doesn't exist.</p>
            <a href="/" className="font-body text-sm font-semibold text-accent hover:underline">
              ← Back to home
            </a>
          </main>
        } />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

