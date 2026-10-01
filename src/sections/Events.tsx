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
        <div className="relative h-full overflow-hidden rounded-t-[7rem] rounded-b-[2rem] border border-[#e2c88f]/40 bg-white/[0.05] p-6 sm:p-8 text-center backdrop-blur-md shadow-[0_12px_45px_rgba(0,0,0,0.5)]">
          {/* Inner arch border */}
          <div className="pointer-events-none absolute inset-2.5 rounded-t-[6.3rem] rounded-b-[1.5rem] border border-[#e2c88f]/20" />

          {/* Icon Badge */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#e2c88f]/50 bg-[#17143c] shadow-[0_0_24px_rgba(226,200,143,0.35)]"
          >
            <Icon size={24} style={{ color: event.accentColor }} />
          </motion.div>

          {/* Date pill */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#eeb2c0]">
              {event.dayLabel} · {event.dayNum} {event.monthLabel.split(" ")[0]}
            </span>
          </div>

          {/* Tagline */}
          {event.tagline && (
            <p className="mt-1 font-display text-xs italic tracking-wider text-[#e2c88f]">
              "{event.tagline}"
            </p>
          )}

          {/* Title */}
          <h3 className="font-display text-2xl sm:text-3xl text-[#f6e2ae] mt-2 font-medium">
            {event.name}
          </h3>

          {/* Quote if present */}
          {event.quote && (
            <p className="mt-2 max-w-sm mx-auto font-display text-sm italic leading-relaxed text-[#f5eee2]/80">
              "{event.quote}"
            </p>
          )}

          <div className="hairline-gold mx-auto my-4 w-24 opacity-60" />

          {/* Time & Venue */}
          <div className="flex flex-col items-center gap-2.5 text-center">
            <p className="flex items-center gap-2 text-sm sm:text-base text-[#f6e2ae] font-display">
              <Clock size={16} className="text-[#eeb2c0]" />
              {event.time}
            </p>
            <p className="flex items-center gap-2 text-[13px] tracking-wide text-[#f5eee2]/85">
              <MapPin size={15} className="text-[#e2c88f]" />
              {event.venue}
            </p>
          </div>

          {/* Attire Badge */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#eeb2c0]/40 bg-[#1c1640]/80 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-[#eeb2c0]">
            <Shirt size={13} className="text-[#e2c88f]" />
            <span>Attire: {event.attire}</span>
          </div>

          {/* Note / Description */}
          {event.note && (
            <p className="mt-4 text-[12px] leading-relaxed text-[#f5eee2]/70 max-w-xs mx-auto">
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
      <SectionHeading kicker="Festive Celebrations" title="Signature Ceremonies" />

      {/* Grid of 4 events */}
      <div className="relative mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {wedding.events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </section>
  );
}
