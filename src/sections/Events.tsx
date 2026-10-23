import { motion } from "framer-motion";
import { Heart, MapPin, Clock, Sparkles, Sun, Utensils, Shirt } from "lucide-react";
import Reveal, { SectionHeading } from "../components/Reveal";
import FairyLights from "../components/FairyLights";
import Tilt from "../components/Tilt";
import { wedding, type SignatureEvent } from "../config";

const iconMap = {
  utensils: Utensils,
  sparkles: Sparkles,
  sun: Sun,
  heart: Heart,
  bell: Sparkles,
};

function EventCard({ event, index }: { event: SignatureEvent; index: number }) {
  const Icon = iconMap[event.icon] || Heart;

  return (
    <Reveal delay={index * 0.12} className="relative w-full">
      <Tilt max={6} className="h-full">
        <div className="relative h-full overflow-hidden rounded-t-[7rem] rounded-b-[2rem] border border-[#ffd978]/45 bg-[#1f194e]/90 p-6 sm:p-8 text-center backdrop-blur-md shadow-[0_16px_45px_rgba(0,0,0,0.55)]">
          {/* Inner arch border */}
          <div className="pointer-events-none absolute inset-2.5 rounded-t-[6.3rem] rounded-b-[1.5rem] border border-[#ffd978]/25" />

          {/* Icon Badge */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#ffd978]/60 bg-[#161240] shadow-[0_0_24px_rgba(255,217,102,0.4)]"
          >
            <Icon size={24} style={{ color: event.accentColor }} />
          </motion.div>

          {/* Date pill */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-xs sm:text-[13px] uppercase tracking-[0.25em] text-[#f8c7d4] font-semibold">
              {event.dayLabel} · {event.dayNum} {event.monthLabel.split(" ")[0]}
            </span>
          </div>

          {/* Tagline */}
          {event.tagline && (
            <p className="mt-1 font-display text-sm sm:text-base italic tracking-wider text-[#ffd978]">
              "{event.tagline}"
            </p>
          )}

          {/* Title - bolder and brighter golden */}
          <h3 className="font-display text-3xl sm:text-4xl text-[#ffd978] mt-2.5 font-bold tracking-wide drop-shadow-[0_2px_12px_rgba(255,217,102,0.35)]">
            {event.name}
          </h3>

          {/* Quote if present */}
          {event.quote && (
            <p className="mt-2 max-w-sm mx-auto font-display text-base sm:text-lg italic leading-relaxed text-[#f7f0e6]">
              "{event.quote}"
            </p>
          )}

          <div className="hairline-gold mx-auto my-4 w-28 opacity-75" />

          {/* Time & Venue */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="flex items-center gap-2 text-lg sm:text-xl text-[#ffd978] font-display font-semibold">
              <Clock size={19} className="text-[#eeb2c0]" />
              {event.time}
            </p>
            <p className="flex items-center gap-2 text-base sm:text-[17px] tracking-wide text-white font-medium">
              <MapPin size={18} className="text-[#ffd978]" />
              {event.venue}
            </p>
          </div>

          {/* Attire Badge */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#eeb2c0]/60 bg-[#17133e] px-4 py-2 text-xs sm:text-sm uppercase tracking-[0.18em] text-[#f8c7d4] font-semibold">
            <Shirt size={15} className="text-[#ffd978]" />
            <span>Attire: {event.attire}</span>
          </div>

          {/* Note / Description */}
          {event.note && (
            <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-white/95 max-w-sm mx-auto font-normal">
              {event.note}
            </p>
          )}
        </div>
      </Tilt>
    </Reveal>
  );
}

export default function Events() {
  return (
    <section className="relative overflow-hidden px-5 py-24" id="events">
      <FairyLights count={16} className="opacity-50" />
      {/* Festive celebrations kicker removed, title protected from clipping */}
      <SectionHeading title="Signature Ceremonies" />

      {/* Grid of 4 events */}
      <div className="relative mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {wedding.events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </section>
  );
}
