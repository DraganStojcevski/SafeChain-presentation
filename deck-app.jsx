/* ════════════════════════════════════════════════════════════════
   Presentation shell — slide state, navigation, transitions, chrome.
   Chrome is deliberately quiet: it orients, it never competes.
   ════════════════════════════════════════════════════════════════ */
const { useState: useStateApp, useEffect: useEffectApp, useRef: useRefApp, useCallback: useCallbackApp } = React;
const SlidesArr = window.Slides;
const SlideMeta = window.SlideMeta;
const IconsApp = window.Icons;

function Presentation() {
  const [current, setCurrent]   = useStateApp(0);
  const [previous, setPrevious] = useStateApp(null);
  const lockRef = useRefApp(false);
  const total = SlidesArr.length;

  const go = useCallbackApp((next) => {
    if (lockRef.current) return;
    if (next < 0 || next >= total || next === current) return;
    lockRef.current = true;
    setPrevious(current);
    setCurrent(next);
    setTimeout(() => { setPrevious(null); lockRef.current = false; }, 420);
  }, [current, total]);

  const next = useCallbackApp(() => go(current + 1), [go, current]);
  const prev = useCallbackApp(() => go(current - 1), [go, current]);

  useEffectApp(() => { window.goToSlide = (n) => go(n); }, [go]);

  useEffectApp(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); prev(); }
      else if (e.key === "Home") { go(0); }
      else if (e.key === "End")  { go(total - 1); }
      else if (/^[0-9]$/.test(e.key)) {
        const n = parseInt(e.key, 10);
        if (n >= 1 && n <= total) go(n - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go, total]);

  useEffectApp(() => {
    let sx = 0, sy = 0, active = false;
    const ts = (e) => { active = true; sx = e.touches[0].clientX; sy = e.touches[0].clientY; };
    const te = (e) => {
      if (!active) return;
      active = false;
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? next() : prev(); }
    };
    window.addEventListener("touchstart", ts, { passive: true });
    window.addEventListener("touchend", te, { passive: true });
    return () => { window.removeEventListener("touchstart", ts); window.removeEventListener("touchend", te); };
  }, [next, prev]);

  const progress = ((current + 1) / total) * 100;
  const CurrentSlide = SlidesArr[current];
  const PrevSlide = previous != null ? SlidesArr[previous] : null;
  const handleCTA = () => go(0);

  return (
    <div id="deck-root" className="fixed inset-0 select-none" style={{ width: "100vw", height: "100vh" }}>
      {/* Slide stage */}
      <div className="absolute inset-0">
        {PrevSlide && (
          <div key={`prev-${previous}-${current}`} className="absolute inset-0 slide-leave"
               data-screen-label={SlideMeta[previous].label}>
            <PrevSlide active={false} onCTA={handleCTA} />
          </div>
        )}
        <div key={`cur-${current}`} className="absolute inset-0 slide-enter"
             data-screen-label={SlideMeta[current].label}>
          <CurrentSlide active={true} onCTA={handleCTA} />
        </div>
      </div>

      {/* Brand mark — top-left */}
      <div data-export-hide="true"
           className="absolute z-30 flex items-center gap-3 pointer-events-none whitespace-nowrap"
           style={{ top: 30, left: 40 }}>
        <div className="relative rounded-md overflow-hidden" style={{
          width: 28,
          height: 28,
          background: "#061126",
          border: "1px solid rgba(231,215,161,0.28)",
          boxShadow: "0 0 26px -10px rgba(214,180,95,0.62), inset 0 1px 0 rgba(255,255,255,0.12)",
        }}>
          <img
            src="screenshots/logo.png"
            alt="SafeChain MK logo"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: "scale(1.18)" }}
          />
        </div>
        <span className="font-display" style={{ fontSize: 12.5, fontWeight: 600,
          letterSpacing: "-0.01em", color: "rgba(255,255,255,0.62)" }}>
          SafeChain MK
        </span>
        <span className="hidden sm:inline-flex font-mono uppercase"
              style={{ fontSize: 9.5, letterSpacing: "0.2em", color: "rgba(214,180,95,0.72)" }}>
          Gov-Tech Verification
        </span>
      </div>

      {/* Slide counter — top-right */}
      <div data-export-hide="true"
           className="absolute z-30 pointer-events-none flex items-center gap-2.5 font-mono whitespace-nowrap"
           style={{ top: 30, right: 40, fontSize: 11, letterSpacing: "0.2em" }}>
        <span className="tabular" style={{ color: "rgba(255,255,255,0.62)" }}>
          {String(current + 1).padStart(2, "0")}
        </span>
        <span style={{ width: 22, height: 1, background: "rgba(255,255,255,0.18)" }} />
        <span className="tabular" style={{ color: "var(--text-mut)" }}>
          {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Bottom bar */}
      <div data-export-hide="true" className="absolute inset-x-0 bottom-0 z-30 pointer-events-none">
        <div className="flex items-center justify-between" style={{ padding: "0 40px 26px" }}>
          <div className="font-mono uppercase tabular"
               style={{ fontSize: 10, letterSpacing: "0.26em", color: "var(--text-mut)" }}>
            {SlideMeta[current].label}
          </div>

          <div className="pointer-events-auto flex items-center gap-2.5">
            <button onClick={prev} disabled={current === 0}
                    className="btn rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{ width: 38, height: 38, color: "rgba(255,255,255,0.8)" }}
                    aria-label="Previous slide">
              <IconsApp.ChevronLeft size={17} />
            </button>
            <button onClick={next} disabled={current === total - 1}
                    className="btn rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{ width: 38, height: 38, color: "#fff" }}
                    aria-label="Next slide">
              <IconsApp.ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute left-0 right-0 bottom-0 progress-track" style={{ height: 2 }}>
          <div className="h-full progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Presentation />);
