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
            <span className="text-[12px] uppercase tracking-[0.3em] text-[#eeb2c0] font-medium">
              {event.dayLabel} · {event.dayNum} {event.monthLabel.split(" ")[0]}
            </span>
          </div>

          {/* Tagline */}
          {event.tagline && (
            <p className="mt-1 font-display text-sm italic tracking-wider text-[#ffd978]">
              "{event.tagline}"
            </p>
          )}

          {/* Title - bolder and brighter golden */}
          <h3 className="font-display text-2xl sm:text-3xl text-[#ffd978] mt-2.5 font-bold tracking-wide drop-shadow-[0_2px_10px_rgba(255,217,102,0.3)]">
            {event.name}
          </h3>

          {/* Quote if present */}
          {event.quote && (
            <p className="mt-2 max-w-sm mx-auto font-display text-sm sm:text-base italic leading-relaxed text-[#f7f0e6]/90">
              "{event.quote}"
            </p>
          )}

          <div className="hairline-gold mx-auto my-4 w-28 opacity-75" />

          {/* Time & Venue */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="flex items-center gap-2 text-base sm:text-lg text-[#ffd978] font-display font-medium">
              <Clock size={17} className="text-[#eeb2c0]" />
              {event.time}
            </p>
            <p className="flex items-center gap-2 text-sm sm:text-[15px] tracking-wide text-[#f7f0e6] font-medium">
              <MapPin size={16} className="text-[#ffd978]" />
              {event.venue}
            </p>
          </div>

          {/* Attire Badge */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#eeb2c0]/50 bg-[#17133e] px-4 py-2 text-[12px] uppercase tracking-[0.2em] text-[#f8c7d4] font-medium">
            <Shirt size={14} className="text-[#ffd978]" />
            <span>Attire: {event.attire}</span>
          </div>

          {/* Note / Description */}
          {event.note && (
            <p className="mt-4 text-[13.5px] leading-relaxed text-[#f7f0e6]/90 max-w-sm mx-auto font-normal">
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
