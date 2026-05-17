/* ════════════════════════════════════════════════════════════════
   Atmosphere — restrained ambient backdrop + count-up hook.
   One soft glow, a whisper of grain-light, a vignette. No neon.
   ════════════════════════════════════════════════════════════════ */
const { useState, useEffect, useRef, useMemo } = React;

/* Deterministic pseudo-random per index */
function seededRand(seed) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

/* A sparse, slow, faint particle field — used on hero slides only */
const Particles = ({ count = 13, tint = "142,164,255" }) => {
  const items = useMemo(() => (
    Array.from({ length: count }).map((_, i) => ({
      i,
      left:  seededRand(i + 1) * 100,
      size:  1 + seededRand(i + 7) * 1.8,
      dur:   28 + seededRand(i + 13) * 30,
      delay: -seededRand(i + 19) * (28 + seededRand(i + 13) * 30),
      op:    0.16 + seededRand(i + 23) * 0.38,
    }))
  ), [count]); 
  return (
    <>
      {items.map(p => (
        <span key={p.i} className="particle" style={{
          left: `${p.left}%`, bottom: "-14px",
          width: `${p.size}px`, height: `${p.size}px`,
          opacity: p.op,
          boxShadow: `0 0 6px 1px rgba(${tint},0.5)`,
          animationDuration: `${p.dur}s`,
          animationDelay: `${p.delay}s`,
        }} />
      ))}
    </>
  );
};

/* Ambient backdrop. mood drives the accent tint, hero adds grid + particles. */
const Atmosphere = ({ mood = "violet", hero = false }) => {
  const tint  = mood === "rose" ? "255,111,132"
              : mood === "cyan" ? "97,230,216"
              : "142,164,255";
  const tint2 = mood === "rose" ? "214,180,95"
              : mood === "cyan" ? "214,180,95"
              : "97,230,216";
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" data-export-hide="true">
      {/* primary ambient glow — soft horizon at the top */}
      <div className="absolute inset-x-0 top-0 drift-a" style={{
        height: "76%",
        background: `radial-gradient(ellipse 56% 72% at 50% -8%, rgba(${tint},${hero ? 0.16 : 0.11}), transparent 70%)`,
      }} />
      {/* secondary accent — a faint, slow orb anchored low-right */}
      <div className="absolute breathe drift-b" style={{
        width: 660, height: 660, right: "-180px", bottom: "-220px", borderRadius: "9999px",
        background: `radial-gradient(circle, rgba(${tint2},0.12), transparent 68%)`,
        filter: "blur(46px)",
      }} />
      {/* third accent — upper-left whisper for depth */}
      <div className="absolute breathe" style={{
        width: 480, height: 480, left: "-160px", top: "-160px", borderRadius: "9999px",
        background: `radial-gradient(circle, rgba(${tint},0.09), transparent 70%)`,
        filter: "blur(40px)", animationDelay: "-6s",
      }} />

      {hero && <div className="absolute inset-0 grid-fade" />}
      {hero && <Particles tint={tint} />}
      {hero && (
        <div className="absolute left-0 right-0" style={{
          top: "55%", height: 1,
          background: `linear-gradient(90deg, transparent, rgba(${tint},0.42) 36%, rgba(${tint2},0.36) 64%, transparent)`,
          boxShadow: `0 0 24px rgba(${tint2},0.24)`,
        }} />
      )}

      {hero && (
        <div className="absolute" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
          <div className="rounded-full spin-slow" style={{
            width: "min(78vw, 780px)",
            height: "min(78vw, 780px)",
            border: "1px solid rgba(214,180,95,0.08)",
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.018)",
          }} />
        </div>
      )}

      {/* vignette — pulls focus to the centre */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 98% 84% at 50% 44%, transparent 50%, rgba(2,3,9,0.66) 100%)",
      }} />
    </div>
  );
};

/* Slide shell — provides the backdrop + a positioned stage for content */
const SlideRoot = ({ children, mood = "violet", hero = false, className = "" }) => (
  <section className={`absolute inset-0 ${className}`}>
    <Atmosphere mood={mood} hero={hero} />
    <div className="relative w-full h-full">{children}</div>
  </section>
);

/* Count-up hook — eases from 0 → target whenever `active` flips true */
function useCountUp(target, { active, duration = 1700, decimals = 0 } = {}) {
  const [val, setVal] = useState(0);
  const rafRef = useRef(null);
  useEffect(() => {
    if (!active) { setVal(0); return; }
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(target * eased);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target, duration]);
  return decimals > 0 ? Number(val.toFixed(decimals)) : Math.round(val);
}

window.Chrome = { Atmosphere, Particles, SlideRoot, useCountUp };
