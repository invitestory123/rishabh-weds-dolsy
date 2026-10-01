import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Shirt, Calendar } from "lucide-react";
import Reveal, { SectionHeading } from "../components/Reveal";
import { wedding, type TimelineDay } from "../config";

export default function Timeline() {
  const [activeDayIndex, setActiveDayIndex] = useState(1); // Default to the big wedding day (Day 2)

  const currentDay: TimelineDay = wedding.timelineDays[activeDayIndex] || wedding.timelineDays[0];

  return (
    <section className="relative overflow-hidden px-5 py-24" id="itinerary">
      <SectionHeading kicker="Celebration Schedule" title="Wedding Itinerary" />

      <div className="relative mx-auto max-w-2xl">
        {/* Day selection tabs */}
        <Reveal className="flex justify-center mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#e2c88f]/30 bg-white/[0.04] p-1.5 backdrop-blur-md">
            {wedding.timelineDays.map((day, idx) => {
              const isActive = activeDayIndex === idx;
              return (
                <button
                  key={day.day}
                  onClick={() => setActiveDayIndex(idx)}
                  className={`relative z-10 flex items-center gap-1.5 sm:gap-2 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-[12px] uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-colors ${
                    isActive ? "text-[#1c1640] font-semibold" : "text-[#f5eee2]/70 hover:text-[#f5eee2]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-timeline-tab"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#e2c88f] via-[#f6e2ae] to-[#eeb2c0] shadow-[0_2px_15px_rgba(226,200,143,0.4)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <Calendar size={13} className={isActive ? "text-[#1c1640]" : "text-[#e2c88f]"} />
                  <span>{day.day} ({day.date.split(" ")[0]} {day.date.split(" ")[1]})</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Selected Day Header */}
        <Reveal delay={0.08} className="text-center mb-8">
          <p className="font-display text-2xl text-[#f6e2ae]">
            {currentDay.dayName}, {currentDay.date}
          </p>
          <div className="hairline-gold mx-auto mt-2 w-24 opacity-50" />
        </Reveal>

        {/* Timeline Flow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDay.day}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="relative"
          >
            {/* Golden spine line */}
            <div className="absolute bottom-4 left-[15px] sm:left-[23px] top-4 w-[2px] bg-gradient-to-b from-[#e2c88f]/60 via-[#eeb2c0]/50 to-[#e2c88f]/20" />

            <div className="flex flex-col gap-6 sm:gap-7">
              {currentDay.events.map((evt, idx) => (
                <motion.div
                  key={`${evt.time}-${evt.title}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="relative flex items-start gap-4 sm:gap-6 pl-10 sm:pl-14"
                >
                  {/* Glowing dot */}
                  <span className="absolute left-[10px] sm:left-[18px] top-2 h-[12px] w-[12px] -translate-x-1/2 rounded-full border-2 border-[#1c1640] bg-[#eeb2c0] shadow-[0_0_12px_2px_rgba(238,178,192,0.6)]" />

                  {/* Event content box */}
                  <div className="flex-1 rounded-2xl border border-[#e2c88f]/25 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-md hover:border-[#e2c88f]/50 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e2c88f]/40 bg-[#17143c] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[#e2c88f]">
                        <Clock size={12} className="text-[#eeb2c0]" />
                        {evt.time}
                      </span>

                      {evt.attire && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-[#eeb2c0]/40 bg-[#eeb2c0]/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[#eeb2c0]">
                          <Shirt size={11} /> {evt.attire}
                        </span>
                      )}
                    </div>

                    <h4 className="font-display text-lg sm:text-xl text-[#f5eee2] font-medium mt-1">
                      {evt.title}
                    </h4>

                    {evt.location && (
                      <p className="flex items-center gap-1.5 text-[12px] text-[#e2c88f]/80 mt-1">
                        <MapPin size={13} className="text-[#eeb2c0]" />
                        {evt.location}
                      </p>
                    )}

                    {evt.note && (
                      <p className="text-[12px] leading-relaxed text-[#f5eee2]/70 mt-2 font-sans border-t border-white/[0.06] pt-2">
                        {evt.note}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
