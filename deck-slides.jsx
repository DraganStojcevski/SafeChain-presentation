/* ════════════════════════════════════════════════════════════════
   SafeChain MK — the 12 slides.
   Refined dark premium: near-white type, hairline surfaces, colour
   used as a surgical accent. Each slide receives { active, onCTA }.
   ════════════════════════════════════════════════════════════════ */
const { SlideRoot, useCountUp } = window.Chrome;
const I = window.Icons;

/* ─────────────────────────  SHARED PRIMITIVES  ─────────────────── */

/* Consistent slide content frame — one set of margins across the deck */
const Frame = ({ children, center = false, className = "" }) => (
  <div
    className={`absolute inset-0 flex flex-col ${center ? "items-center justify-center text-center" : "justify-center"} ${className}`}
    style={{ padding: "clamp(52px,6.2vh,90px) clamp(60px,6.6vw,140px)" }}
  >
    {children}
  </div>
);

const Eyebrow = ({ children, tone = "violet" }) => {
  const c = tone === "cyan" ? "var(--cyan)" : tone === "rose" ? "var(--rose)"
          : tone === "amber" ? "var(--amber)" : "var(--violet)";
  return (
    <div className="inline-flex items-center gap-2.5 font-mono uppercase"
         style={{ fontSize: 11.5, letterSpacing: "0.26em", color: "var(--text-dim)" }}>
      <span style={{ width: 5, height: 5, borderRadius: 9, background: c, boxShadow: `0 0 10px ${c}` }} />
      <span>{children}</span>
    </div>
  );
};

const Label = ({ children, className = "", style = {} }) => (
  <span className={`font-mono uppercase ${className}`}
        style={{ fontSize: 10.5, letterSpacing: "0.24em", color: "var(--text-mut)", ...style }}>
    {children}
  </span>
);

const Dot = () => (
  <span style={{ width: 3, height: 3, borderRadius: 9, background: "var(--text-mut)", display: "inline-block" }} />
);

/* Brand logo — actual app mark, treated like a premium sovereign seal */
const LogoMark = ({ size = 118 }) => (
  <div className="relative" style={{ width: size, height: size }}>
    <div className="absolute" style={{
      inset: -size * 0.66, borderRadius: "9999px",
      background: "radial-gradient(circle, rgba(214,180,95,0.34), rgba(97,230,216,0.11) 46%, transparent 70%)",
    }} />
    <div className="absolute spin-slow" style={{
      inset: -size * 0.24,
      borderRadius: "9999px",
      border: "1px solid rgba(214,180,95,0.18)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.025)",
    }} />
    <div className="absolute overflow-hidden panel-glass" style={{
      inset: 0,
      borderRadius: size * 0.19,
      background: "#061126",
      border: "1px solid rgba(231,215,161,0.28)",
      boxShadow: "0 28px 90px -38px rgba(214,180,95,0.7), inset 0 1px 0 rgba(255,255,255,0.12)",
    }}>
      <img
        src="screenshots/logo.png"
        alt="SafeChain MK logo"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: "scale(1.13)" }}
      />
    </div>
  </div>
);

/* ─────────────────────────  01 — TITLE  ────────────────────────── */
const Slide1 = ({ active }) => (
  <SlideRoot hero>
    <Frame center>
      {active && <>
        <div className="rise" style={{ "--i": 0 }}><LogoMark size={126} /></div>

        <div className="rise mt-10" style={{ "--i": 1 }}>
          <Eyebrow>Hackathon Pitch — Skopje 2026</Eyebrow>
        </div>

        <h1 className="rise display-tight text-white glow-soft mt-7"
            style={{ "--i": 2, fontSize: "clamp(76px, 10vw, 166px)" }}>
          SafeChain<span style={{ color: "rgba(255,255,255,0.42)" }}>&nbsp;MK</span>
        </h1>

        <p className="rise display mt-7"
           style={{ "--i": 3, fontSize: "clamp(20px, 1.95vw, 30px)", color: "var(--text-dim)" }}>
          The trust layer between citizens and government.
        </p>

        <div className="rise mt-11 flex items-center gap-4" style={{ "--i": 4 }}>
          <Label>Built on Solana</Label><Dot />
          <Label>Verified on-chain</Label><Dot />
          <Label>Trusted by everyone</Label>
        </div>
      </>}
    </Frame>

    {active && (
      <div className="rise absolute inset-x-0 flex justify-center"
           style={{ "--i": 6, bottom: "6.4vh" }}>
        <span className="font-mono uppercase"
              style={{ fontSize: 10, letterSpacing: "0.36em", color: "var(--text-mut)" }}>
          Press → to begin
        </span>
      </div>
    )}
  </SlideRoot>
);

/* ─────────────────────────  02 — THE SCENE  ────────────────────── */
const Slide2 = ({ active }) => (
  <SlideRoot mood="rose">
    <Frame>
      {active && (
        <div className="flex gap-9 max-w-[1240px]">
          <div className="rise w-px shrink-0" style={{ "--i": 0,
            background: "linear-gradient(180deg, transparent, rgba(255,111,132,0.55) 22%, rgba(255,111,132,0.55) 78%, transparent)" }} />
          <div>
            <div className="rise" style={{ "--i": 0 }}>
              <Eyebrow tone="rose">Scene 01 — 08:14, a Tuesday in Skopje</Eyebrow>
            </div>

            <p className="rise display text-white mt-9"
               style={{ "--i": 1, fontSize: "clamp(32px, 3.5vw, 54px)", lineHeight: 1.22 }}>
              You leave home. You get in your car. You drive past the
              speed cameras. You arrive — and your phone buzzes.
            </p>

            <p className="rise display mt-9 ac-rose glow-rose"
               style={{ "--i": 3, fontSize: "clamp(27px, 3vw, 46px)", lineHeight: 1.24 }}>
              A traffic-violation SMS. Instinctively, you tap to pay.
            </p>

            <p className="rise display-tight text-white glow-soft mt-9"
               style={{ "--i": 5, fontSize: "clamp(34px, 4.1vw, 66px)" }}>
              And just like that — your money is gone.
            </p>

            <div className="rise mt-10 flex items-center gap-3" style={{ "--i": 7 }}>
              <I.AlertTriangle size={14} className="ac-rose" />
              <span className="font-mono" style={{ fontSize: 12.5, color: "var(--text-dim)" }}>
                You just paid a scammer — and you had no way to know.
              </span>
            </div>
          </div>
        </div>
      )}
    </Frame>
  </SlideRoot>
);

/* ─────────────────────────  02.5 — EVIDENCE WALL  ──────────────── */
const EVIDENCE = [
  { kind: "coverage", src: "screenshots/689031267_2425515537910389_4188551737695946276_n.png", caption: "PRESS24 — citizens warned about fake fines", label: "Press coverage", x: 2, y: 3, w: 20, h: 76, r: -4, z: 8, fit: "cover", pos: "50% 17%" },
  { kind: "search", src: "screenshots/image1.png", caption: "Google results — warnings across multiple outlets", label: "Search signal", x: 24, y: 2, w: 43, h: 25, r: 1.5, z: 3, fit: "cover", pos: "center top" },
  { kind: "coverage", src: "screenshots/image.png", caption: "National media — false SMS fines circulating", label: "News article", x: 59, y: 8, w: 38, h: 33, r: -1.5, z: 4, fit: "cover", pos: "center top" },
  { kind: "sms", src: "evidence/sms-01-mvr-letterhead.jpg", caption: "MVR letterhead · +63 928…", label: "Fraudulent SMS", x: 21, y: 26, w: 18, h: 47, r: 3, z: 10, fit: "contain" },
  { kind: "sms", src: "evidence/sms-02-final-notice.png", caption: "Final notice · fear trigger", label: "Fraudulent SMS", x: 35, y: 28, w: 18, h: 48, r: -2.5, z: 12, fit: "contain" },
  { kind: "sms", src: "evidence/sms-05-morocco-number.png", caption: "Speeding fine · +212 Morocco", label: "Foreign sender", x: 51, y: 33, w: 18, h: 47, r: 4, z: 11, fit: "contain" },
  { kind: "sms", src: "evidence/sms-07-mvr-sp.jpg", caption: "MVR-SP/2026-05821/SK", label: "Fake reference", x: 67, y: 35, w: 16, h: 40, r: -3, z: 10, fit: "contain" },
  { kind: "site", src: "evidence/phishing-site-mvrgov-uno.png", caption: "mvrgov.uno — live phishing site", label: "Phishing site", x: 55, y: 60, w: 29, h: 31, r: 1.8, z: 6, fit: "cover", pos: "center top" },
  { kind: "news", src: "evidence/news-01-frontline.png", caption: "FRONTLINE — official MVR warning", label: "Press coverage", x: 6, y: 66, w: 29, h: 27, r: 2, z: 5, fit: "cover", pos: "center top" },
  { kind: "sms", src: "evidence/sms-03-with-fake-url.png", caption: "Fake URL embedded in message", label: "Fake link", x: 82, y: 28, w: 15, h: 36, r: 3.5, z: 7, fit: "contain" },
  { kind: "sms", src: "evidence/sms-04-mvrgov-uno-link.png", caption: "mvrgov.uno payment path", label: "Fake domain", x: 80, y: 60, w: 17, h: 31, r: -2.5, z: 8, fit: "contain" },
  { kind: "sms", src: "evidence/sms-06-mvrgovm-forum.png", caption: "Copied government language", label: "Impersonation", x: 37, y: 69, w: 17, h: 27, r: -4, z: 7, fit: "contain" },
  { kind: "sms", src: "evidence/sms-08-mac.png", caption: "Mobile thread · scam wave", label: "Phone evidence", x: 20, y: 53, w: 17, h: 35, r: 5, z: 9, fit: "contain" },
  { kind: "sms", src: "evidence/sms-09-uk-finessai.png", caption: "UK-hosted fine scam pattern", label: "Pattern match", x: 71, y: 14, w: 16, h: 31, r: 3, z: 6, fit: "contain" },
];

const EvidenceCollageCard = ({ entry, idx }) => {
  const isSms = entry.kind === "sms";
  const accent = isSms ? "var(--rose)" : entry.kind === "site" ? "var(--cyan)" : "var(--amber)";
  const IconC = isSms ? I.AlertTriangle : entry.kind === "site" ? I.Globe : entry.kind === "search" ? I.ScanLine : I.Newspaper;
  return (
    <div className="rise absolute" style={{
      "--i": Math.min(idx, 10),
      left: `${entry.x}%`,
      top: `${entry.y}%`,
      width: `${entry.w}%`,
      height: `${entry.h}%`,
      zIndex: entry.z,
      transform: `rotate(${entry.r}deg)`,
      transformOrigin: "center center",
    }}>
      <div className="relative h-full rounded-xl overflow-hidden lift" style={{
        background: "#05060D",
        border: `1px solid ${isSms ? "rgba(255,111,132,0.30)" : "rgba(214,180,95,0.24)"}`,
        boxShadow: `0 28px 70px -34px rgba(0,0,0,0.95), 0 0 46px -30px ${accent}`,
      }}>
        <img
          src={entry.src}
          alt={entry.caption}
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: entry.fit || "cover",
            objectPosition: entry.pos || "center",
            padding: entry.fit === "contain" ? 4 : 0,
            filter: "saturate(0.92) contrast(1.04)",
          }}
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-2 px-2.5 py-1.5" style={{
          background: "linear-gradient(180deg, rgba(3,5,12,0.88), rgba(3,5,12,0.42) 76%, transparent)",
        }}>
          <span className="flex items-center gap-1.5 min-w-0">
            <IconC size={10.5} style={{ color: accent }} />
            <span className="font-mono uppercase truncate" style={{
              fontSize: 8.5,
              letterSpacing: "0.13em",
              color: "rgba(255,255,255,0.78)",
            }}>{entry.label}</span>
          </span>
          <span className="font-mono shrink-0" style={{
            fontSize: 8,
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.45)",
          }}>EXH {String(idx + 1).padStart(2, "0")}</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 px-2.5 py-2" style={{
          background: "linear-gradient(0deg, rgba(3,5,12,0.90), rgba(3,5,12,0.52) 72%, transparent)",
        }}>
          <div className="font-mono truncate" style={{
            fontSize: 8.5,
            color: "rgba(255,255,255,0.66)",
          }}>{entry.caption}</div>
        </div>
      </div>
    </div>
  );
};

const Slide2_5 = ({ active }) => {
  return (
    <SlideRoot mood="rose">
      <div className="absolute inset-0 flex flex-col"
           style={{ padding: "clamp(48px,6vh,72px) clamp(38px,3.8vw,76px) clamp(34px,3.8vh,50px)" }}>
        {active && <>
          <div className="rise flex items-end justify-between gap-6" style={{ "--i": 0 }}>
            <div>
              <Eyebrow tone="rose">Public Warning — Evidence Wall</Eyebrow>
              <h2 className="display text-white mt-3.5"
                  style={{ fontSize: "clamp(28px, 3vw, 48px)", lineHeight: 1.04 }}>
                The scam has escaped the inbox.{" "}
                <span className="ac-rose">People are already being warned.</span>
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-2 shrink-0 pb-2">
              <I.AlertTriangle size={13} className="ac-rose" />
              <Label>{EVIDENCE.length} exhibits · SMS · news · search · phishing site</Label>
            </div>
          </div>

          <div className="rise relative mt-5 flex-1 min-h-0 overflow-hidden rounded-2xl panel-quiet" style={{
            "--i": 1,
            background:
              "radial-gradient(ellipse 58% 54% at 50% 48%, rgba(255,111,132,0.12), transparent 68%), linear-gradient(180deg, rgba(255,255,255,0.026), rgba(255,255,255,0.008))",
          }}>
            <div className="absolute inset-0 opacity-40" style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage: "radial-gradient(ellipse 80% 72% at 50% 46%, #000 18%, transparent 88%)",
            }} />
            <div className="absolute left-[43%] top-[39%] -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              fontSize: "clamp(74px, 10vw, 154px)",
              fontWeight: 700,
              letterSpacing: "-0.08em",
              lineHeight: 0.86,
              color: "rgba(255,111,132,0.055)",
              whiteSpace: "nowrap",
            }}>
              REAL SCAM
            </div>
            {EVIDENCE.map((entry, i) => (
              <EvidenceCollageCard key={entry.src} entry={entry} idx={i} />
            ))}
            <div className="absolute left-5 bottom-5 z-30 panel rounded-2xl px-5 py-4 max-w-xl" style={{
              borderColor: "rgba(255,111,132,0.24)",
              boxShadow: "0 24px 80px -38px rgba(255,111,132,0.62)",
            }}>
              <div className="flex items-center gap-2">
                <I.AlertTriangle size={15} className="ac-rose" />
                <Label style={{ color: "rgba(255,255,255,0.68)" }}>Awareness gap</Label>
              </div>
              <p className="display mt-2" style={{ fontSize: "clamp(17px,1.7vw,25px)", lineHeight: 1.18, color: "#fff" }}>
                If citizens need Google and news articles to know what is real,
                the system is already broken.
              </p>
            </div>
          </div>

          <p className="rise mt-4 font-mono text-center" style={{ "--i": 12,
             fontSize: 11, letterSpacing: "0.08em", color: "var(--text-dim)" }}>
            Real screenshots · real media coverage · real confusion · one missing verification layer
          </p>
        </>}
      </div>
    </SlideRoot>
  );
};

/* ─────────────────────────  03 — THE PROBLEM  ──────────────────── */
const ProblemCard = ({ idx, Icon: IconC, stat, statLabel, body }) => (
  <div className="rise h-full" style={{ "--i": idx + 1 }}>
    <div className="panel lift rounded-2xl h-full flex flex-col p-8">
      <div className="flex items-center justify-between">
        <div className="rounded-xl flex items-center justify-center panel-glass"
             style={{ width: 46, height: 46 }}>
          <IconC size={21} className="ac-violet" strokeWidth={1.7} />
        </div>
        <Label>{`0${idx + 1}`}</Label>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div className="display-tight text-white glow-soft"
             style={{ fontSize: "clamp(42px, 3.5vw, 60px)" }}>
          {stat}
        </div>
        <div className="mt-2.5" style={{ fontSize: 14.5, color: "var(--text)", fontWeight: 500 }}>
          {statLabel}
        </div>
      </div>

      <div className="hr-soft my-5" />
      <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--text-dim)" }}>{body}</p>
    </div>
  </div>
);

const Slide3 = ({ active }) => (
  <SlideRoot>
    <Frame>
      {active && <>
        <div className="rise" style={{ "--i": 0 }}><Eyebrow>The Problem — Why It Matters</Eyebrow></div>
        <h2 className="rise display text-white glow-soft mt-5 max-w-[1180px]"
            style={{ "--i": 1, fontSize: "clamp(38px, 4.1vw, 64px)", lineHeight: 1.07 }}>
          Trust between citizens and the state is being
          silently <span className="ac-violet">eroded</span>.
        </h2>

        <div className="grid grid-cols-3 gap-6 mt-12" style={{ height: "clamp(330px,42vh,400px)" }}>
          <ProblemCard idx={0} Icon={I.ShieldOff} stat="10,000"
            statLabel="Fake SMS sent in a single afternoon"
            body="One coordinated wave of fraud — and it repeats, quietly, every single day." />
          <ProblemCard idx={1} Icon={I.AlertTriangle} stat="0"
            statLabel="Visual difference, real vs. fake"
            body="A genuine government message and a scam are pixel-identical. The citizen cannot tell them apart." />
          <ProblemCard idx={2} Icon={I.HelpCircle} stat="700K+"
            statLabel="Vehicles, and no way to verify"
            body="A nation of drivers receiving official notices — with not one layer to confirm what is real." />
        </div>
      </>}
    </Frame>
  </SlideRoot>
);

/* ─────────────────────────  04 — THE QUESTION  ─────────────────── */
const Slide4 = ({ active }) => (
  <SlideRoot>
    <Frame center>
      {active && <>
        <div className="rise" style={{ "--i": 0 }}>
          <Eyebrow>The Question We Asked Ourselves</Eyebrow>
        </div>

        <h2 className="rise display text-white glow-soft mt-9 max-w-[1320px]"
            style={{ "--i": 1, fontSize: "clamp(40px, 5vw, 84px)", lineHeight: 1.06 }}>
          What should an SMS that citizens can{" "}
          <span className="ac-violet">actually trust</span>{" "}
          look like?
        </h2>

        <p className="rise mt-9" style={{ "--i": 3, fontSize: "clamp(16px,1.4vw,21px)", color: "var(--text-dim)" }}>
          We asked the question. Then we built the answer.
        </p>

        <div className="rise mt-11 flex items-center gap-4" style={{ "--i": 5 }}>
          <span className="hr-soft" style={{ width: 64 }} />
          <div className="display-tight text-white glow-soft"
               style={{ fontSize: "clamp(40px, 4.6vw, 76px)" }}>
            SafeChain&nbsp;MK.
          </div>
          <span className="hr-soft" style={{ width: 64 }} />
        </div>
      </>}
    </Frame>
  </SlideRoot>
);

/* ─────────────────────────  05 — THE SOLUTION  ─────────────────── */
const Step = ({ n, Icon: IconC, title, last }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="rounded-xl flex items-center justify-center shrink-0 panel-glass"
           style={{ width: 46, height: 46 }}>
        <IconC size={20} className="ac-violet" strokeWidth={1.7} />
      </div>
      {!last && <div className="w-px flex-1 my-1.5" style={{ minHeight: 24,
        background: "linear-gradient(180deg, var(--hairline-strong), transparent)" }} />}
    </div>
    <div className="pt-1 pb-6">
      <Label>{`Step ${String(n).padStart(2, "0")}`}</Label>
      <div className="display text-white mt-1.5 max-w-sm"
           style={{ fontSize: 18.5, lineHeight: 1.36, color: "rgba(255,255,255,0.92)" }}>
        {title}
      </div>
    </div>
  </div>
);

const Slide5 = ({ active }) => (
  <SlideRoot>
    <div className="absolute inset-0 grid grid-cols-12 items-center gap-12"
         style={{ padding: "clamp(52px,6vh,90px) clamp(60px,6.4vw,138px)" }}>
      {active && <>
        <div className="col-span-7">
          <div className="rise" style={{ "--i": 0 }}><Eyebrow>The Solution</Eyebrow></div>
          <h2 className="rise display-tight text-white glow-soft mt-6"
              style={{ "--i": 1, fontSize: "clamp(44px, 4.9vw, 78px)" }}>
            One SMS.<br />One code.<br />
            <span className="inline-flex items-center gap-3">
              Zero links to click.
            </span>
          </h2>
          <p className="rise mt-7 max-w-xl" style={{ "--i": 3,
             fontSize: 17, lineHeight: 1.6, color: "var(--text-dim)" }}>
            The citizen receives a cryptographic code by SMS — no link,
            no button. The phishing attack is dead on arrival: there is
            simply nothing to click.
          </p>

          {/* SMS mock */}
          <div className="rise mt-8 panel rounded-2xl p-5" style={{ "--i": 4, maxWidth: 416 }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="rounded-lg flex items-center justify-center panel-glass"
                     style={{ width: 30, height: 30 }}>
                  <I.ShieldCheck size={15} className="ac-violet" />
                </div>
                <div className="leading-tight">
                  <div className="text-white" style={{ fontSize: 12.5, fontWeight: 600 }}>MVR.GOV.MK</div>
                  <div className="font-mono" style={{ fontSize: 8.5, color: "var(--text-mut)", letterSpacing: "0.08em" }}>
                    VERIFIED SENDER
                  </div>
                </div>
              </div>
              <span className="font-mono" style={{ fontSize: 10, color: "var(--text-mut)" }}>08:14</span>
            </div>
            <div className="hr-soft my-3.5" />
            <div style={{ fontSize: 13.5, color: "var(--text-dim)", lineHeight: 1.5 }}>
              Verification code for your new fine:
            </div>
            <div className="mt-3 panel-glass rounded-xl flex items-center justify-center py-3">
              <span className="font-mono ac-cyan" style={{ fontSize: 24, letterSpacing: "0.32em", fontWeight: 600 }}>
                9F-MK-204C
              </span>
            </div>
            <div className="mt-3 flex items-start gap-2" style={{ fontSize: 11.5, color: "var(--text-mut)" }}>
              <I.Ban size={13} className="ac-rose shrink-0 mt-0.5" />
              <span>Open safechain.mk and enter this code. We will never send you a link.</span>
            </div>
          </div>
        </div>

        <div className="col-span-5 pl-2">
          <div className="rise" style={{ "--i": 2 }}><Eyebrow tone="cyan">Verified in 3 seconds</Eyebrow></div>
          <div className="mt-8">
            <div className="rise" style={{ "--i": 4 }}>
              <Step n={1} Icon={I.Hexagon} title="The violation is signed and written to the Solana blockchain." />
            </div>
            <div className="rise" style={{ "--i": 5 }}>
              <Step n={2} Icon={I.Mail} title="The citizen receives an SMS with a code only — no link, no button." />
            </div>
            <div className="rise" style={{ "--i": 6 }}>
              <Step n={3} Icon={I.ScanLine} title="The code is entered in the app — real or fake, answered in 3 seconds." last />
            </div>
          </div>
        </div>
      </>}
    </div>
  </SlideRoot>
);

/* ─────────────────────────  06 — THE PLATFORM  ─────────────────── */
const Feature = ({ children, i }) => (
  <li className="rise flex items-start gap-3" style={{ "--i": i }}>
    <span className="shrink-0 rounded-md flex items-center justify-center" style={{
      width: 21, height: 21, marginTop: 1,
      background: "rgba(214,180,95,0.12)", border: "1px solid rgba(214,180,95,0.34)" }}>
      <I.Check size={12} className="ac-amber" strokeWidth={2.4} />
    </span>
    <span style={{ fontSize: 14.2, lineHeight: 1.45, color: "var(--text-dim)" }}>{children}</span>
  </li>
);

const Slide6 = ({ active }) => (
  <SlideRoot>
    <div className="absolute inset-0 grid grid-cols-12 items-center gap-8"
         style={{ padding: "clamp(48px,5.8vh,86px) clamp(42px,5vw,96px)" }}>
      {active && <>
        <div className="col-span-4">
          <div className="rise" style={{ "--i": 0 }}><Eyebrow>The Platform</Eyebrow></div>
          <h2 className="rise display-tight text-white glow-soft mt-6"
              style={{ "--i": 1, fontSize: "clamp(32px, 3.2vw, 52px)" }}>
            Open the web app.<br />Enter your email.
          </h2>
          <p className="rise mt-5 max-w-sm" style={{ "--i": 2,
             fontSize: 15.5, lineHeight: 1.56, color: "var(--text-dim)" }}>
            No crypto wallet? One is created for you{" "}
            <span className="ac-violet" style={{ fontWeight: 500 }}>automatically</span>{" "}
            — the chain stays invisible.
          </p>
          <ul className="mt-7 space-y-3">
            <Feature i={3}>Every fine in one place — paid, unpaid, cancelled, under appeal</Feature>
            <Feature i={4}>Colour-coded violation categories</Feature>
            <Feature i={5}>Full detail — photos, location, amount due</Feature>
            <Feature i={6}>Pay by crypto or by card</Feature>
            <Feature i={7}>Available in Macedonian, English and Serbian</Feature>
          </ul>
        </div>

        <div className="col-span-8 flex justify-center">
          <div className="rise panel rounded-2xl p-3 w-full" style={{ "--i": 2, maxWidth: 980 }}>
            {/* browser chrome */}
            <div className="flex items-center gap-2 px-1.5 pb-2.5">
              <span style={{ width: 9, height: 9, borderRadius: 9, background: "rgba(255,111,132,0.55)" }} />
              <span style={{ width: 9, height: 9, borderRadius: 9, background: "rgba(230,163,78,0.55)" }} />
              <span style={{ width: 9, height: 9, borderRadius: 9, background: "rgba(86,200,140,0.55)" }} />
              <div className="ml-2 flex-1 flex items-center gap-2 rounded-lg px-3"
                   style={{ height: 26, background: "rgba(255,255,255,0.03)", border: "1px solid var(--hairline)" }}>
                <I.Lock size={11} style={{ color: "var(--text-mut)" }} />
                <span className="font-mono" style={{ fontSize: 11, color: "var(--text-dim)" }}>
                  safechain.mk
                </span>
              </div>
            </div>
            {/* viewport */}
            <div className="relative rounded-xl overflow-hidden"
                 style={{ aspectRatio: "16 / 10", background: "linear-gradient(160deg,#0B0C16,#08090F)",
                          border: "1px solid var(--hairline)" }}>
              <video
                src="video-output-3335C52B-C281-44BD-865E-21B803E43B4F-2.MP4"
                className="absolute inset-0 w-full h-full"
                style={{ objectFit: "contain", background: "#030817" }}
                autoPlay={active}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="SafeChain MK product demo video"
              />
              <div className="absolute inset-x-0 top-0 pointer-events-none" style={{
                height: "28%",
                background: "linear-gradient(180deg, rgba(2,4,10,0.72), transparent)",
              }} />
              <div className="absolute inset-x-0 bottom-0 pointer-events-none" style={{
                height: "34%",
                background: "linear-gradient(0deg, rgba(2,4,10,0.72), transparent)",
              }} />
              <div className="absolute left-4 top-4 flex items-center gap-2 panel-glass rounded-full px-3 py-1.5">
                <span className="rounded-full" style={{
                  width: 6, height: 6, background: "var(--cyan)",
                  boxShadow: "0 0 12px rgba(97,230,216,0.82)",
                }} />
                <span className="font-mono uppercase" style={{
                  fontSize: 9.5,
                  letterSpacing: "0.18em",
                  color: "rgba(255,255,255,0.82)",
                }}>
                  Product Demo
                </span>
              </div>
              <div className="absolute right-4 bottom-4 flex items-center gap-2 panel-glass rounded-full px-3 py-1.5">
                <I.Play size={11} className="ac-cyan" />
                <span className="font-mono uppercase" style={{
                  fontSize: 9,
                  letterSpacing: "0.16em",
                  color: "var(--text-dim)",
                }}>
                  Autoplay · Muted
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between px-1.5 pt-2.5">
              <span className="font-mono" style={{ fontSize: 9.5, color: "var(--text-mut)" }}>
                Progressive web app — no install
              </span>
              <span className="flex items-center gap-1.5 font-mono"
                    style={{ fontSize: 9.5, color: "var(--text-dim)" }}>
                <I.Languages size={11} /> MK · EN · SR
              </span>
            </div>
          </div>
        </div>
      </>}
    </div>
  </SlideRoot>
);

/* ─────────────────────────  07 — TRUST & BLOCKCHAIN  ───────────── */
const SolanaGlyph = ({ size = 152 }) => (
  <div className="relative" style={{ width: size, height: size }}>
    <div className="absolute" style={{ inset: -size * 0.44, borderRadius: "9999px",
      background: "radial-gradient(circle, rgba(97,230,216,0.32), rgba(214,180,95,0.12) 46%, transparent 72%)" }} />
    <div className="absolute inset-0 hex-clip" style={{
      background: "linear-gradient(150deg, #8EA4FF, #61E6D8 66%, #D6B45F)" }} />
    <div className="absolute hex-clip flex items-center justify-center" style={{
      inset: 2, background: "linear-gradient(180deg,#10172A,#080B15)" }}>
      <span className="display-tight" style={{ fontSize: size * 0.21,
        background: "linear-gradient(135deg,#E7D7A1,#61E6D8)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        SOL
      </span>
    </div>
  </div>
);

const Impossible = ({ Icon: IconC, children, i }) => (
  <div className="rise panel rounded-xl flex items-center gap-3.5 px-5 py-4" style={{ "--i": i }}>
    <div className="rounded-lg flex items-center justify-center shrink-0"
         style={{ width: 38, height: 38, background: "rgba(255,111,132,0.10)",
                  border: "1px solid rgba(255,111,132,0.3)" }}>
      <IconC size={17} className="ac-rose" strokeWidth={1.8} />
    </div>
    <span style={{ fontSize: 15, color: "rgba(255,255,255,0.9)", lineHeight: 1.32 }}>{children}</span>
  </div>
);

const Slide7 = ({ active }) => (
  <SlideRoot mood="cyan">
    <Frame center>
      {active && <>
        <div className="rise" style={{ "--i": 0 }}><SolanaGlyph size={144} /></div>

        <div className="rise mt-8" style={{ "--i": 1 }}>
          <Eyebrow tone="cyan">Trust — On-Chain Verification</Eyebrow>
        </div>

        <h2 className="rise display text-white glow-soft mt-5"
            style={{ "--i": 2, fontSize: "clamp(36px, 3.9vw, 60px)" }}>
          Can you trust this system?
        </h2>

        <p className="rise mt-5 max-w-3xl" style={{ "--i": 3,
           fontSize: 16.5, lineHeight: 1.6, color: "var(--text-dim)" }}>
          Every fine is written to Solana as a unique, immutable record. No institution,
          employee, or attacker can quietly delete, alter, or hide a single transaction.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-10 w-full" style={{ maxWidth: 980 }}>
          <Impossible Icon={I.Ban} i={4}>Phishing messages</Impossible>
          <Impossible Icon={I.Ban} i={5}>Fake or invented fines</Impossible>
          <Impossible Icon={I.Ban} i={6}>Payment manipulation</Impossible>
        </div>

        <div className="rise mt-8 panel-quiet rounded-xl flex items-center gap-3 px-5 py-3.5"
             style={{ "--i": 8 }}>
          <I.Lock size={15} className="ac-cyan shrink-0" />
          <span style={{ fontSize: 13.5, color: "var(--text-dim)" }}>
            Sensitive data stays encrypted — only{" "}
            <span className="text-white" style={{ fontWeight: 500 }}>you</span>{" "}
            can ever see your fines. Not a neighbour. Not a friend.
          </span>
        </div>
      </>}
    </Frame>
  </SlideRoot>
);

/* ─────────────────────────  08 — SCENE 02  ─────────────────────── */
const Slide8 = ({ active }) => (
  <SlideRoot mood="rose">
    <Frame>
      {active && (
        <div className="flex gap-9 max-w-[1260px]">
          <div className="rise w-px shrink-0" style={{ "--i": 0,
            background: "linear-gradient(180deg, transparent, rgba(255,111,132,0.48) 18%, rgba(97,230,216,0.46) 82%, transparent)" }} />
          <div className="w-full">
            <div className="rise" style={{ "--i": 0 }}>
              <Eyebrow tone="rose">Scene 02 — 07:02, the morning after</Eyebrow>
            </div>

            <p className="rise display text-white mt-9"
               style={{ "--i": 1, fontSize: "clamp(30px, 3.4vw, 52px)", lineHeight: 1.2 }}>
              You wake up. You grab your phone. There is a fine —
            </p>
            <p className="rise display mt-5"
               style={{ "--i": 3, fontSize: "clamp(26px, 2.9vw, 44px)", lineHeight: 1.22, color: "var(--text-dim)" }}>
              but your car is in the driveway. You were asleep.
            </p>

            <div className="rise mt-10 panel rounded-2xl flex items-center gap-5 p-6 max-w-3xl"
                 style={{ "--i": 5 }}>
              <div className="rounded-xl flex items-center justify-center shrink-0 panel-glass halo-cyan"
                   style={{ width: 58, height: 58 }}>
                <I.FileSignature size={26} className="ac-cyan" strokeWidth={1.6} />
              </div>
              <p className="display" style={{ fontSize: "clamp(20px,1.95vw,30px)", lineHeight: 1.3, color: "#fff" }}>
                In a few taps, the app builds a digitally signed PDF appeal —{" "}
                <span className="ac-cyan">ready to submit.</span>
              </p>
            </div>

            <div className="rise mt-9 flex items-center gap-6" style={{ "--i": 7 }}>
              {[
                [I.HelpCircle, "FAQ tailored to your fine"],
                [I.Smartphone, "Full PWA — no download"],
                [I.ScanLine, "Answers, the moment you ask"],
              ].map(([Ic, t], k) => (
                <div key={k} className="flex items-center gap-2.5">
                  <Ic size={15} style={{ color: "var(--text-mut)" }} />
                  <span style={{ fontSize: 13, color: "var(--text-dim)" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Frame>
  </SlideRoot>
);

/* ─────────────────────────  09 — THE MARKET  ───────────────────── */
const Metric = ({ idx, active, Icon: IconC, value, suffix = "", label, sub, fill }) => {
  const n = useCountUp(value, { active, duration: 1800 });
  return (
    <div className="rise h-full" style={{ "--i": idx }}>
      <div className="panel lift rounded-2xl h-full flex flex-col p-7">
        <div className="flex items-center justify-between">
          <div className="rounded-lg flex items-center justify-center panel-glass"
               style={{ width: 38, height: 38 }}>
            <IconC size={17} className="ac-cyan" strokeWidth={1.7} />
          </div>
          <Label>{`Metric 0${idx}`}</Label>
        </div>

        <div className="flex-1 flex flex-col justify-end">
          <div className="display-tight tabular text-white glow-soft"
               style={{ fontSize: "clamp(38px, 3.3vw, 56px)" }}>
            {Math.round(n).toLocaleString()}<span className="ac-cyan">{suffix}</span>
          </div>
          <div className="mt-2" style={{ fontSize: 14.5, color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
            {label}
          </div>
          <div className="mt-1.5" style={{ fontSize: 12, color: "var(--text-mut)" }}>{sub}</div>
        </div>

        <div className="mt-5 h-px" style={{ background: "var(--hairline)" }}>
          <div style={{ height: "100%", width: active ? `${fill}%` : "0%",
            background: "linear-gradient(90deg, var(--amber), var(--cyan))",
            boxShadow: "0 0 10px rgba(97,230,216,0.5)",
            transition: `width 1.4s cubic-bezier(.2,.7,.2,1) ${idx * 0.12 + 0.5}s` }} />
        </div>
      </div>
    </div>
  );
};

const Slide9 = ({ active }) => (
  <SlideRoot>
    <Frame>
      {active && <>
        <div className="rise flex items-end justify-between gap-6" style={{ "--i": 0 }}>
          <div>
            <Eyebrow>The Market — A Verification Gap</Eyebrow>
            <h2 className="display text-white glow-soft mt-4"
                style={{ fontSize: "clamp(34px, 3.9vw, 60px)", lineHeight: 1.06 }}>
              The numbers behind a national trust gap.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 shrink-0 pb-1.5">
            <I.TrendingUp size={14} style={{ color: "var(--text-mut)" }} />
            <Label>North Macedonia · Feb 2026</Label>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 mt-9" style={{ height: "clamp(290px,36vh,348px)" }}>
          <Metric idx={1} active={active} Icon={I.Camera} value={700} suffix="+"
            label="Active Safe City cameras" sub="Live across the country" fill={54} />
          <Metric idx={2} active={active} Icon={I.FileSignature} value={700}
            label="Fines issued every day" sub="Roughly one every two minutes" fill={54} />
          <Metric idx={3} active={active} Icon={I.AlertTriangle} value={19000} suffix="+"
            label="Violations in February 2026" sub="A single month of activity" fill={82} />
          <Metric idx={4} active={active} Icon={I.Car} value={700000} suffix="+"
            label="Registered vehicles" sub="Every one a potential target" fill={100} />
        </div>

        <div className="rise mt-7 panel rounded-2xl flex items-center gap-4 px-7 py-5" style={{ "--i": 6 }}>
          <div className="rounded-lg flex items-center justify-center shrink-0 panel-glass"
               style={{ width: 42, height: 42 }}>
            <I.Globe size={19} className="ac-cyan" strokeWidth={1.7} />
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.5, color: "var(--text-dim)" }}>
            The same trust gap runs across the{" "}
            <span className="text-white" style={{ fontWeight: 500 }}>Balkans</span>, the{" "}
            <span className="text-white" style={{ fontWeight: 500 }}>Middle East</span> and{" "}
            <span className="text-white" style={{ fontWeight: 500 }}>Southeast Asia</span>.
            No verification layer exists anywhere.
          </p>
        </div>
      </>}
    </Frame>
  </SlideRoot>
);

/* ─────────────────────────  10 — BUSINESS MODEL  ───────────────── */
const FeeBars = ({ active }) => {
  const bars = [
    { l: "Year 1", h: 24, v: "$0.4M" },
    { l: "Year 2", h: 40, v: "$1.1M" },
    { l: "Year 3", h: 57, v: "$2.6M" },
    { l: "Year 4", h: 79, v: "$5.4M" },
    { l: "Year 5", h: 100, v: "$9.8M" },
  ];
  return (
    <div className="panel rounded-2xl p-7 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <Label>Fee × Volume — Modelled</Label>
        <span className="flex items-center gap-1.5 font-mono"
              style={{ fontSize: 10, letterSpacing: "0.16em", color: "var(--cyan)" }}>
          <I.TrendingUp size={11} /> 0.8% PER TX
        </span>
      </div>
      <div className="relative flex-1 grid grid-cols-5 gap-5 items-end mt-7">
        <div className="absolute inset-0 pointer-events-none">
          {[0, 1, 2, 3].map(g => (
            <div key={g} className="absolute left-0 right-0"
                 style={{ top: `${g * 25}%`, height: 1, background: "var(--hairline)" }} />
          ))}
        </div>
        {bars.map((b, idx) => (
          <div key={b.l} className="relative flex flex-col items-center justify-end h-full">
            <div className="font-mono tabular mb-2" style={{ fontSize: 11, color: "rgba(255,255,255,0.82)" }}>
              {b.v}
            </div>
            <div className="w-full rounded-t-md relative overflow-hidden" style={{
              height: active ? `${b.h}%` : "0%",
              background: "linear-gradient(180deg, #E7D7A1, #61E6D8)",
              boxShadow: "0 0 24px -6px rgba(97,230,216,0.45)",
              transition: `height 1.2s cubic-bezier(.2,.7,.2,1) ${idx * 0.11 + 0.45}s` }} />
            <div className="font-mono mt-2.5" style={{ fontSize: 9.5, color: "var(--text-mut)" }}>{b.l}</div>
          </div>
        ))}
      </div>
      <div className="hr-soft mt-3" />
      <div className="flex items-center justify-between mt-3 font-mono"
           style={{ fontSize: 9.5, color: "var(--text-mut)" }}>
        <span>Government transaction throughput →</span>
        <span>SafeChain revenue ↑</span>
      </div>
    </div>
  );
};

const Slide10 = ({ active }) => (
  <SlideRoot>
    <div className="absolute inset-0 grid grid-cols-12 gap-12 items-center"
         style={{ padding: "clamp(56px,6.6vh,96px) clamp(60px,6.2vw,134px)" }}>
      {active && <>
        <div className="col-span-5">
          <div className="rise" style={{ "--i": 0 }}><Eyebrow>Business Model</Eyebrow></div>
          <h2 className="rise display-tight text-white glow-soft mt-6"
              style={{ "--i": 1, fontSize: "clamp(40px, 4.4vw, 70px)" }}>
            A fee on every<br />verified transaction.
          </h2>
          <p className="rise mt-6 max-w-md" style={{ "--i": 2,
             fontSize: 16.5, lineHeight: 1.6, color: "var(--text-dim)" }}>
            Each fine written to the chain carries a small,
            government-paid fee. Silent. Automatic. Invisible to the citizen.
          </p>

          <div className="rise mt-8 panel rounded-xl flex items-center gap-4 px-5 py-4"
               style={{ "--i": 3 }}>
            <div className="rounded-lg flex items-center justify-center panel-glass"
                 style={{ width: 44, height: 44 }}>
              <I.Coins size={20} className="ac-violet" strokeWidth={1.7} />
            </div>
            <div>
              <Label>Pricing</Label>
              <div className="display text-white mt-1" style={{ fontSize: 23 }}>
                0.8% <span style={{ color: "var(--text-dim)", fontSize: 16 }}>per verified transaction</span>
              </div>
            </div>
          </div>

          <div className="rise mt-7 pl-5 relative max-w-md" style={{ "--i": 4 }}>
            <div className="absolute left-0 top-1 bottom-1 rounded-full" style={{ width: 2,
              background: "linear-gradient(180deg, var(--amber), var(--cyan))" }} />
            <p className="display" style={{ fontSize: 17.5, lineHeight: 1.45, color: "rgba(255,255,255,0.9)" }}>
              The same model as Visa — we sit in the middle of every verified
              transaction. <span className="ac-cyan">Low cost. High volume. Infinite scale.</span>
            </p>
          </div>
        </div>

        <div className="col-span-7 h-full flex items-center">
          <div className="rise w-full" style={{ "--i": 2, height: "clamp(380px,52vh,480px)" }}>
            <FeeBars active={active} />
          </div>
        </div>
      </>}
    </div>
  </SlideRoot>
);

/* ─────────────────────────  11 — THE CLOSE  ────────────────────── */
const Slide11 = ({ active, onCTA }) => (
  <SlideRoot hero>
    <Frame center>
      {active && <>
        <div className="rise" style={{ "--i": 0 }}><Eyebrow>Closing</Eyebrow></div>

        <h2 className="rise display text-white mt-8"
            style={{ "--i": 1, fontSize: "clamp(38px, 4.4vw, 70px)", color: "rgba(255,255,255,0.62)" }}>
          We are not here to fix traffic.
        </h2>
        <h2 className="rise display-tight grad-climax glow-violet mt-3"
            style={{ "--i": 2, fontSize: "clamp(52px, 6.6vw, 108px)" }}>
          We are here to fix trust.
        </h2>

        <p className="rise mt-9 max-w-2xl" style={{ "--i": 4,
           fontSize: 16.5, lineHeight: 1.6, color: "var(--text-dim)" }}>
          SafeChain MK — a verification layer between citizens and government,
          where every message is cryptographically proven.
        </p>

        <p className="rise display text-white glow-soft mt-9 max-w-3xl"
           style={{ "--i": 6, fontSize: "clamp(24px, 2.7vw, 40px)", lineHeight: 1.2 }}>
          In a world full of fake messages, we make the real ones{" "}
          <span className="ac-amber">undeniable.</span>
        </p>

        <div className="rise mt-12 flex items-center gap-7" style={{ "--i": 8 }}>
          <button onClick={onCTA}
                  className="btn-primary rounded-full flex items-center gap-2.5 px-7 py-3.5 display"
                  style={{ fontSize: 15.5 }}>
            <I.Play size={15} /> See the live demo <I.ArrowRight size={16} />
          </button>
          <div className="text-left">
            <Label>Team SafeChain MK</Label>
            <div className="flex items-center gap-5 mt-1.5 font-mono"
                 style={{ fontSize: 12.5, color: "var(--text-dim)" }}>
              <span className="flex items-center gap-1.5"><I.Mail size={12} /> hello@safechain.mk</span>
              <span className="flex items-center gap-1.5"><I.Globe size={12} /> safechain.mk</span>
            </div>
          </div>
        </div>
      </>}
    </Frame>
  </SlideRoot>
);

window.Slides = [Slide1, Slide2, Slide2_5, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11];
window.SlideMeta = [
  { label: "01 — Title",            short: "Title" },
  { label: "02 — The Scene",        short: "Scene" },
  { label: "03 — Evidence Wall",    short: "Evidence" },
  { label: "04 — The Problem",      short: "Problem" },
  { label: "05 — The Question",     short: "Question" },
  { label: "06 — The Solution",     short: "Solution" },
  { label: "07 — The Platform",     short: "Platform" },
  { label: "08 — On-Chain Trust",   short: "Trust" },
  { label: "09 — The Morning After",short: "Scene II" },
  { label: "10 — The Market",       short: "Market" },
  { label: "11 — Business Model",   short: "Model" },
  { label: "12 — The Close",        short: "Close" },
];
