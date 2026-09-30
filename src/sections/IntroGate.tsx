import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { wedding } from "../config";

const doorEase: [number, number, number, number] = [0.65, 0, 0.35, 1];

// Midnight gate + palace-door opening transition
export default function IntroGate({
  onOpening,
  onOpened,
}: {
  onOpening: () => void;
  onOpened: () => void;
}) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    // Dispatch music start
    window.dispatchEvent(new CustomEvent("play-wedding-music"));
    onOpening();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── Left door ── */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-[#0c0a24]"
        animate={opening ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1.5, delay: 0.35, ease: doorEase }}
      >
        <img
          src="https://media.invitestory.in/midnight-stargaze/assets/navy-texture.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-right opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a24]/70 to-transparent" />
        {/* half mandala — splits as doors part */}
        <img
          src="https://media.invitestory.in/midnight-stargaze/assets/mandala.png"
          alt=""
          className="absolute right-[-42vmin] top-1/2 w-[84vmin] max-w-none -translate-y-1/2 opacity-25"
        />
      </motion.div>

      {/* ── Right door ── */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-[#0c0a24]"
        animate={opening ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1.5, delay: 0.35, ease: doorEase }}
        onAnimationComplete={() => opening && onOpened()}
      >
        <img
          src="https://media.invitestory.in/midnight-stargaze/assets/navy-texture.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-left opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0c0a24]/70 to-transparent" />
        <img
          src="https://media.invitestory.in/midnight-stargaze/assets/mandala.png"
          alt=""
          className="absolute left-[-42vmin] top-1/2 w-[84vmin] max-w-none -translate-y-1/2 opacity-25"
        />
      </motion.div>

      {/* ── Light spilling through the seam ── */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[70px] -translate-x-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,224,168,0.85), transparent)",
          filter: "blur(10px)",
        }}
        initial={{ opacity: 0, scaleX: 0.1 }}
        animate={opening ? { opacity: [0, 1, 0.9], scaleX: [0.1, 1, 2.2] } : {}}
        transition={{ duration: 1.5, delay: 0.35, ease: doorEase }}
      />

      {/* ── Gate content ── */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
        animate={opening ? { opacity: 0, y: -26 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {/* garland crown above the gate content */}
        <motion.img
          src="https://media.invitestory.in/midnight-stargaze/assets/garland-top.webp"
          alt=""
          className="pointer-events-none absolute inset-x-0 top-0 w-full object-cover object-top opacity-90"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative flex flex-col items-center gap-5 text-center max-w-md"
        >
          <motion.img
            src="https://media.invitestory.in/midnight-stargaze/assets/ganesha.png"
            alt="Lord Ganesha"
            className="w-20 drop-shadow-[0_0_24px_rgba(226,200,143,0.5)] sm:w-24"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />

          <span className="font-display text-xs sm:text-sm tracking-[0.35em] text-[#e2c88f]">
            {wedding.verse.hindi}
          </span>

          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.45em] text-[#f5eee2]/70">
            <span>Cordially Inviting You</span>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="font-script text-gold text-5xl leading-tight sm:text-7xl">
              {wedding.groom}
            </h1>
            <span className="font-script text-3xl leading-none text-[#eeb2c0] my-1">
              &
            </span>
            <h1 className="font-script text-gold text-5xl leading-tight sm:text-7xl">
              {wedding.bride}
            </h1>
          </div>

          <div className="hairline-gold w-36 my-1" />

          <p className="font-display text-sm tracking-widest text-[#f5eee2]/90">
            {wedding.dateLabel}
          </p>
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#e2c88f]">
            {wedding.venue.name} · {wedding.venue.city}
          </p>

          <motion.button
            onClick={handleOpen}
            whileTap={{ scale: 0.94 }}
            className="group relative mt-5 flex items-center gap-2.5 rounded-full border border-[#e2c88f]/70 bg-gradient-to-r from-[#e2c88f]/20 via-[#eeb2c0]/15 to-[#e2c88f]/20 px-9 py-3.5 text-[12px] font-medium uppercase tracking-[0.3em] text-[#f6e2ae] shadow-[0_4px_30px_rgba(226,200,143,0.25)] backdrop-blur-md transition-all hover:border-[#e2c88f] hover:bg-[#e2c88f]/25"
          >
            <Sparkles size={14} className="text-[#e2c88f] animate-spin-slow" />
            <span>Open Royal Invitation</span>
            <Sparkles size={14} className="text-[#e2c88f] animate-spin-slow" />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
