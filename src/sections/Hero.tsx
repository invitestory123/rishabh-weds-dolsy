import { motion } from "framer-motion";
import Aurora from "../components/Aurora";
import FairyLights from "../components/FairyLights";
import { wedding } from "../config";
import { MapPin, Calendar } from "lucide-react";

// Glowing lantern flanking the stage
function Lantern({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 1 }}
      className={`pointer-events-none absolute ${className}`}
    >
      <div
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[26px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,190,90,0.55), rgba(255,140,60,0.18) 60%, transparent 75%)",
          animation: "glow-pulse 3.2s ease-in-out infinite",
        }}
      />
      <img
        src="https://media.invitestory.in/midnight-stargaze/assets/lantern.webp"
        alt=""
        className="relative w-16 drop-shadow-[0_10px_20px_rgba(0,0,0,0.55)] sm:w-20"
        style={{ animation: "lantern-bob 6s ease-in-out infinite" }}
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col items-center overflow-hidden px-6 pb-20 pt-0">
      {/* navy paisley texture + aurora */}
      <img
        src="https://media.invitestory.in/midnight-stargaze/assets/navy-texture.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a24]/40 via-transparent to-[#0c0a24]" />
      <Aurora className="opacity-70" />

      {/* hanging jasmine & rose garland with fairy lights */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-x-0 top-0 z-20"
        style={{ transformOrigin: "top center" }}
      >
        <img
          src="https://media.invitestory.in/midnight-stargaze/assets/garland-top.webp"
          alt=""
          className="w-full object-cover object-top"
          style={{
            transformOrigin: "top center",
            animation: "hang-sway 9s ease-in-out infinite",
          }}
        />
        <FairyLights count={22} className="!inset-x-0 !top-0 h-[55%]" />
      </motion.div>

      <div className="relative z-10 mt-[16svh] flex flex-col items-center sm:mt-[15svh]">
        {/* ── Mughal arch card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-[88vw] max-w-[340px]"
        >
          {/* halo behind the arch */}
          <div
            className="absolute left-1/2 top-1/2 h-[110%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px]"
            style={{
              background:
                "radial-gradient(circle, rgba(238,178,192,0.25), rgba(99,102,241,0.18) 55%, transparent 75%)",
              animation: "arch-glow 5s ease-in-out infinite",
            }}
          />

          <svg viewBox="0 0 340 450" className="relative w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.65)]">
            <defs>
              <linearGradient id="archFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#faf5ea" />
                <stop offset="100%" stopColor="#f1e6d2" />
              </linearGradient>
            </defs>
            {/* outer arch */}
            <path
              d="M 35 435 L 35 185 C 35 110 95 75 170 30 C 245 75 305 110 305 185 L 305 435 Z"
              fill="url(#archFill)"
            />
            {/* inner border */}
            <path
              d="M 48 422 L 48 188 C 48 122 102 90 170 48 C 238 90 292 122 292 188 L 292 422 Z"
              fill="none"
              stroke="#c9a86a"
              strokeWidth="1.5"
              opacity="0.85"
            />
          </svg>

          {/* arch content */}
          <div className="absolute inset-0 flex flex-col items-center px-6 pt-[33%] text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-display text-[9px] sm:text-[9.5px] tracking-[0.14em] text-[#8a6f4d] whitespace-nowrap"
            >
              {wedding.verse.hindi}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="mt-1.5 font-display text-[9px] sm:text-[9.5px] font-semibold uppercase tracking-[0.13em] text-[#3a3260] whitespace-nowrap"
            >
              The Royal Wedding of
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.9 }}
              className="mt-1 font-script text-[44px] leading-tight text-[#4a3f78] sm:text-5xl"
            >
              {wedding.groom}
            </motion.h1>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.8 }}
              className="font-script text-2xl leading-none text-[#c96e8c] my-0"
            >
              &
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.9 }}
              className="font-script text-[44px] leading-tight text-[#4a3f78] sm:text-5xl"
            >
              {wedding.bride}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="mt-2 flex flex-col items-center"
            >
              <div className="hairline-gold w-20 my-1 opacity-70" />
              <p className="font-display text-[11px] italic tracking-wide text-[#735d43]">
                "Forever Begins Here"
              </p>
              <p className="mt-0.5 text-[8.5px] uppercase tracking-[0.3em] text-[#8a6f4d]">
                6 · 7 December 2026
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Real couple portrait overlapping the arch base ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative -mt-[14vw] z-10 sm:-mt-16 flex flex-col items-center"
        >
          <div
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[45px]"
            style={{
              background:
                "radial-gradient(circle, rgba(226,200,143,0.35), rgba(238,178,192,0.2) 60%, transparent 75%)",
              animation: "glow-pulse 4.5s ease-in-out infinite",
            }}
          />

          {/* Arched photo container */}
          <div className="relative overflow-hidden rounded-t-[7.5rem] rounded-b-3xl border-2 border-[#e2c88f]/80 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md bg-white/[0.04]">
            <img
              src="/assets/rishabh-dolsy-portrait.jpg"
              alt={`${wedding.groomFull} and ${wedding.brideFull}`}
              className="h-64 w-52 sm:h-72 sm:w-60 rounded-t-[7rem] rounded-b-2xl object-cover object-top"
            />
            {/* Inner golden rim */}
            <div className="pointer-events-none absolute inset-2 rounded-t-[6.7rem] rounded-b-xl border border-[#e2c88f]/40" />
          </div>
        </motion.div>

        {/* date + venue badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.9 }}
          className="relative z-10 mt-6 flex flex-col items-center gap-2 text-center"
        >
          <div className="flex items-center gap-2 rounded-full border border-[#e2c88f]/30 bg-white/[0.06] px-5 py-2 backdrop-blur-md">
            <Calendar size={14} className="text-[#eeb2c0]" />
            <p className="font-display text-sm tracking-widest text-[#f5eee2]">
              {wedding.dateLabel}
            </p>
          </div>

          <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] text-[#e2c88f]">
            <MapPin size={13} className="text-[#eeb2c0]" />
            {wedding.venue.name} · {wedding.venue.city}
          </p>
        </motion.div>
      </div>

      {/* lanterns flanking the stage */}
      <Lantern className="bottom-24 left-3 sm:left-10" delay={1.9} />
      <Lantern className="bottom-24 right-3 sm:right-10" delay={2.1} />

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3 }}
        className="absolute bottom-4 z-10 flex flex-col items-center gap-1.5"
        style={{ animation: "float-soft 3s ease-in-out infinite" }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#e2c88f]/80">
          Scroll To Explore
        </span>
        <svg width="18" height="26" viewBox="0 0 18 26" fill="none">
          <rect x="1" y="1" width="16" height="24" rx="8" stroke="#e2c88f" strokeOpacity="0.6" />
          <motion.circle
            cx="9"
            cy="8"
            r="2.5"
            fill="#eeb2c0"
            animate={{ cy: [8, 16, 8], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </section>
  );
}
