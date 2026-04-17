/**
 * MockupFrame — a stylised browser-chrome frame for the Tuon product preview.
 * Used in place of screenshots until real assets are available.
 * To replace: swap out the inner content with an <img> or <video>.
 */
export function MockupFrame() {
  return (
    <div
      className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border/60"
      style={{ background: "#1A2E28" }}
      role="img"
      aria-label="Tuon product interface preview"
    >
      {/* ── Browser chrome ── */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ background: "#142420", borderColor: "rgba(255,255,255,0.06)" }}
      >
        {/* Traffic lights */}
        <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#28CA41" }} />
        {/* Address bar */}
        <div
          className="flex-1 mx-3 rounded-full px-4 py-1 text-xs font-body text-center"
          style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}
        >
          tuon.net
        </div>
      </div>

      {/* ── App interior ── */}
      <div className="p-6 md:p-8 space-y-6" style={{ minHeight: 360 }}>

        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="text-lg font-display font-bold"
              style={{ color: "#5ECBA8" }}
            >
              Tuon
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full"
              style={{ background: "rgba(94,203,168,0.2)" }}
            />
          </div>
        </div>

        {/* Input CTA area */}
        <div
          className="rounded-xl p-5 space-y-3 border"
          style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p
            className="font-display font-semibold text-base leading-snug"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Generate flashcards from:
          </p>
          <div className="flex flex-wrap gap-2">
            {["Topic", "PDF", "YouTube link"].map((t) => (
              <span
                key={t}
                className="rounded-full px-3 py-1 text-xs font-body font-semibold"
                style={{
                  background: "rgba(94,203,168,0.15)",
                  color: "#5ECBA8",
                  border: "1px solid rgba(94,203,168,0.25)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          {/* Fake input field */}
          <div
            className="flex items-center gap-3 rounded-lg px-4 py-3 border"
            style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
          >
            <div
              className="flex-1 h-2.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.12)", maxWidth: 220 }}
            />
            <div
              className="h-7 w-20 rounded-full"
              style={{ background: "#2A6B57" }}
            />
          </div>
        </div>

        {/* Flashcard preview row */}
        <div>
          <p
            className="text-xs font-body font-semibold mb-3 tracking-wide"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            RECENT DECK · 24 cards
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { q: "Definition:", a: "The process of..." },
              { q: "Explain:", a: "This occurs when..." },
              { q: "Formula:", a: "A = πr²" },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-lg p-3 space-y-2 border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div className="h-1.5 rounded-full w-1/2" style={{ background: "rgba(94,203,168,0.4)" }} />
                <p
                  className="text-xs font-body"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {card.q}
                </p>
                <p
                  className="text-xs font-body"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {card.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Replace-me hint (development only) ── */}
      {/* Remove the comment below and add real screenshots when available */}
      {/* <img src="/screenshots/tuon-dashboard.png" alt="Tuon dashboard" className="w-full" /> */}
    </div>
  );
}
