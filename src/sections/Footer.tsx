import { useState } from "react";
import { motion } from "framer-motion";
import { Share2, Check, Heart, Phone } from "lucide-react";
import Reveal from "../components/Reveal";
import { wedding } from "../config";

// Grand footer: navy texture behind, hanging garland over the top,
// giant outlined names, marquee strip, closing message
export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const copyHashtag = async () => {
    try {
      await navigator.clipboard.writeText(wedding.hashtag);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard fallback */
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `${wedding.groom} & ${wedding.bride}'s Wedding Invitation`,
      text: `You are cordially invited to celebrate the royal wedding of ${wedding.groomFull} and ${wedding.brideFull} at Lal Vilas, Neemrana on ${wedding.dateLabel}!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or unsupported
      }
    } else {
      try {
        await navigator.clipboard.writeText(
          `${shareData.text} \n${shareData.url}`
        );
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch {
        /* fallback */
      }
    }
  };

  return (
    <footer className="relative flex min-h-[80svh] flex-col justify-end overflow-hidden pb-12 pt-20">
      {/* background texture */}
      <img
        src="https://media.invitestory.in/midnight-stargaze/assets/navy-texture.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a24] via-[#0c0a24]/60 to-[#060514]/95" />

      {/* hanging garland overlay — drapes over the footer top */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-20 w-[150%] max-w-none -translate-x-1/2 sm:w-full">
        <img
          src="https://media.invitestory.in/midnight-stargaze/assets/garland-top.webp"
          alt=""
          className="w-full object-cover object-top"
          style={{
            transformOrigin: "top center",
            animation: "hang-sway 11s ease-in-out infinite",
          }}
        />
      </div>

      {/* marquee strip */}
      <div className="relative z-10 mb-8 overflow-hidden border-y border-[#e2c88f]/25 py-3">
        <div
          className="flex w-max whitespace-nowrap"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {[0, 1].map((n) => (
            <span
              key={n}
              className="font-display px-4 text-sm uppercase tracking-[0.4em] text-[#e2c88f]"
            >
              {Array(6)
                .fill(`${wedding.hashtag} ✦ ${wedding.dateLabel} ✦ Lal Vilas, Neemrana ✦ `)
                .join("")}
            </span>
          ))}
        </div>
      </div>

      {/* giant outlined names in the flow */}
      <div className="pointer-events-none relative z-0 -mb-6 flex select-none justify-center overflow-hidden">
        <span className="font-display text-outline-gold whitespace-nowrap text-[10vw] font-semibold uppercase leading-none tracking-tight opacity-40 sm:text-[8vw]">
          {wedding.groom} ♥ {wedding.bride}
        </span>
      </div>

      {/* closing message */}
      <Reveal className="relative z-10 mx-auto mt-4 flex max-w-md flex-col items-center gap-4 px-6 text-center">
        <img
          src="https://media.invitestory.in/midnight-stargaze/assets/mandala.png"
          alt=""
          className="w-14 opacity-80"
        />

        <p className="font-script text-gold text-4xl sm:text-5xl leading-snug">
          We can't wait to celebrate with you
        </p>

        <p className="text-[12px] uppercase tracking-[0.3em] text-[#f5eee2]/80 font-medium">
          With love & blessings, the Gulati & Arora families
        </p>

        <div className="hairline-gold mt-1 w-36" />

        <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
          {/* Copy Hashtag */}
          <motion.button
            onClick={copyHashtag}
            whileTap={{ scale: 0.92 }}
            className={`rounded-full border px-5 py-2.5 text-[11px] tracking-[0.2em] transition-all ${
              copied
                ? "border-[#eeb2c0] bg-[#eeb2c0]/15 text-[#eeb2c0]"
                : "border-[#e2c88f]/40 text-[#f5eee2]/80 hover:border-[#e2c88f] hover:bg-[#e2c88f]/10"
            }`}
          >
            {copied ? "Copied ✓" : `${wedding.hashtag} · tap to copy`}
          </motion.button>

          {/* Share Invitation */}
          <motion.button
            onClick={handleShare}
            whileTap={{ scale: 0.92 }}
            className="flex items-center gap-2 rounded-full border border-[#e2c88f]/50 bg-gradient-to-r from-[#e2c88f]/15 to-[#eeb2c0]/15 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-[#f6e2ae] hover:border-[#e2c88f] transition-all"
          >
            {shared ? (
              <>
                <Check size={14} className="text-[#e2c88f]" />
                <span>Link Copied</span>
              </>
            ) : (
              <>
                <Share2 size={14} className="text-[#eeb2c0]" />
                <span>Share Invitation</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Contact / Credits */}
        <div className="mt-5 flex flex-col items-center justify-center gap-1 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#e2c88f]/85 font-medium">
            A One Wed Day Films
          </p>
          <a
            href="tel:9315688830"
            className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.2em] text-[#f5eee2]/65 hover:text-[#e2c88f] transition-colors"
          >
            <Phone size={10} className="text-[#e2c88f]/80" />
            <span>9315688830</span>
          </a>
        </div>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-[10px] tracking-widest text-[#f5eee2]/40">
          <span>Crafted with</span>
          <Heart size={11} className="fill-[#eeb2c0] text-[#eeb2c0]" />
          <span>for Rishabh & Dolsy</span>
        </p>
      </Reveal>
    </footer>
  );
}
