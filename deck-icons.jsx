/* Inline Lucide-style icons — monoline, no external dependency */
const Icon = ({ children, size = 24, strokeWidth = 1.6, className = "", style = {} }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
    className={className} style={style}
  >{children}</svg>
);

const ShieldOff = (p) => (<Icon {...p}><path d="M19.7 14a8 8 0 0 0 .3-2V5l-8-3-3.2 1.2"/><path d="M4.7 4.7 4 5v7c0 6 8 10 8 10a20.4 20.4 0 0 0 5.6-4.4"/><line x1="2" y1="2" x2="22" y2="22"/></Icon>);
const AlertTriangle = (p) => (<Icon {...p}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></Icon>);
const HelpCircle = (p) => (<Icon {...p}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></Icon>);
const Newspaper = (p) => (<Icon {...p}><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8z"/></Icon>);
const Check = (p) => (<Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>);
const ChevronLeft = (p) => (<Icon {...p}><polyline points="15 18 9 12 15 6"/></Icon>);
const ChevronRight = (p) => (<Icon {...p}><polyline points="9 18 15 12 9 6"/></Icon>);
const Play = (p) => (<Icon {...p} strokeWidth={1.4}><polygon points="6 4 20 12 6 20 6 4" fill="currentColor" /></Icon>);
const Smartphone = (p) => (<Icon {...p}><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></Icon>);
const ShieldCheck = (p) => (<Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></Icon>);
const KeyRound = (p) => (<Icon {...p}><path d="M2 18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2H2z"/><circle cx="16" cy="9" r="6"/><path d="m13.5 7.5 1 1"/></Icon>);
const ScanLine = (p) => (<Icon {...p}><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></Icon>);
const Globe = (p) => (<Icon {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></Icon>);
const FileSignature = (p) => (<Icon {...p}><path d="M20 19.5V7l-4-4H6a2 2 0 0 0-2 2v15"/><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M3 21a4 4 0 0 1 4-3h6"/><path d="m17 17 4 4"/></Icon>);
const Wallet = (p) => (<Icon {...p}><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M20 12v4H6a2 2 0 0 0-2 2c0 1.1.9 2 2 2h14v-4"/><path d="M4 6v12"/></Icon>);
const Hexagon = (p) => (<Icon {...p}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></Icon>);
const Lock = (p) => (<Icon {...p}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></Icon>);
const Coins = (p) => (<Icon {...p}><circle cx="8" cy="8" r="6"/><path d="M18.1 18.1A9 9 0 0 0 21 12a9 9 0 0 0-9-9 9 9 0 0 0-6.1 2.4"/><path d="M7 6h1v4"/><path d="m16.7 13.7.7-.7"/></Icon>);
const TrendingUp = (p) => (<Icon {...p}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></Icon>);
const Car = (p) => (<Icon {...p}><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-1l-4.3-.7a2 2 0 0 1-1.3-.84l-1.5-2.27A2 2 0 0 0 12.36 7H4a2 2 0 0 0-2 2v7h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></Icon>);
const Mail = (p) => (<Icon {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></Icon>);
const ArrowRight = (p) => (<Icon {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></Icon>);
const X = (p) => (<Icon {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></Icon>);
const Eye = (p) => (<Icon {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></Icon>);
const Languages = (p) => (<Icon {...p}><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></Icon>);
const Sparkles = (p) => (<Icon {...p}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></Icon>);
const Camera = (p) => (<Icon {...p}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3.2"/></Icon>);
const Clock = (p) => (<Icon {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></Icon>);
const Layers = (p) => (<Icon {...p}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></Icon>);
const ArrowUpRight = (p) => (<Icon {...p}><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></Icon>);
const Ban = (p) => (<Icon {...p}><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></Icon>);
const CircleCheck = (p) => (<Icon {...p}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></Icon>);
const Fingerprint = (p) => (<Icon {...p}><path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"/><path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"/></Icon>);

window.Icons = {
  ShieldOff, AlertTriangle, HelpCircle, Newspaper, Check, ChevronLeft, ChevronRight,
  Play, Smartphone, ShieldCheck, KeyRound, ScanLine, Globe, FileSignature, Wallet,
  Hexagon, Lock, Coins, TrendingUp, Car, Mail, ArrowRight, X, Eye, Languages, Sparkles,
  Camera, Clock, Layers, ArrowUpRight, Ban, CircleCheck, Fingerprint,
};
