import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarPlus,
  Navigation,
  MapPin,
  Map as MapIcon,
  Compass,
  Utensils,
  GlassWater,
  Sun,
  Crown,
  Sparkles,
} from "lucide-react";
import Reveal, { SectionHeading } from "../components/Reveal";
import {
  wedding,
  googleCalendarUrl,
  downloadICS,
  mapsEmbedUrl,
  mapsDirectionsUrl,
} from "../config";

type View = "map" | "locations";

const locationHighlights = [
  {
    name: "Rajwada Restaurant",
    event: "Welcome Lunch & Breakfasts",
    icon: Utensils,
    note: "Authentic Rajasthani hospitality and feast",
  },
  {
    name: "Lawn 1",
    event: "Sagan, Engagement & Cocktail",
    icon: GlassWater,
    note: "Starlit glamour, dance floor & celebrations",
  },
  {
    name: "Pool Side",
    event: "Haldi Ceremony",
    icon: Sun,
    note: "Vibrant yellow vibes, poolside masti & dhol",
  },
  {
    name: "Mandir at Hotel",
    event: "Procession of Baraat",
    icon: Sparkles,
    note: "Auspicious assembly point for the Baraat",
  },
  {
    name: "Lawn 2",
    event: "Royal Wedding, Jaimala & Dinner",
    icon: Crown,
    note: "Sacred pheras, royal dining & doli farewell",
  },
];

export default function Venue() {
  const [view, setView] = useState<View>("map");

  return (
    <section className="relative px-5 py-24" id="venue">
      <SectionHeading kicker="Destination Neemrana" title="The Royal Venue" />

      <div className="mx-auto flex max-w-lg flex-col gap-6">
        <Reveal className="flex flex-col items-center gap-2 text-center">
          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center transition-opacity hover:opacity-90"
          >
            <span className="font-display text-4xl sm:text-5xl text-[#ffd978] font-bold drop-shadow-[0_2px_14px_rgba(255,217,102,0.4)]">
              {wedding.venue.name}
            </span>
            <p className="flex items-center justify-center gap-2 text-[15px] sm:text-base text-white/95 max-w-md font-medium mt-1.5">
              <MapPin size={17} className="text-[#eeb2c0] shrink-0" />
              {wedding.venue.address}
            </p>
          </a>
        </Reveal>

        {/* segmented toggle — Map / Specific Locations */}
        <Reveal delay={0.05} className="flex justify-center">
          <div className="relative flex rounded-full border border-[#ffd978]/50 bg-[#1f194e]/85 p-1 backdrop-blur-md">
            {(
              [
                ["map", "Interactive Map", MapIcon],
                ["locations", "Venue Spaces", Compass],
              ] as const
            ).map(([key, label, Icon]) => (
              <button
                key={key}
                onClick={() => setView(key)}
                className={`relative z-10 flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-[13px] uppercase tracking-[0.18em] transition-colors ${
                  view === key ? "text-[#1c1640] font-bold" : "text-[#f7f0e6]/80 hover:text-white"
                }`}
              >
                {view === key && (
                  <motion.span
                    layoutId="venue-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#ffd978] to-[#eeb2c0]"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  />
                )}
                <Icon size={14} /> {label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* map / locations panel */}
        <Reveal
          delay={0.1}
          className="relative overflow-hidden rounded-3xl border border-[#ffd978]/40 shadow-[0_16px_50px_rgba(0,0,0,0.55)] bg-[#1f194e]/80 backdrop-blur-md min-h-[300px]"
        >
          <AnimatePresence mode="wait" initial={false}>
            {view === "map" ? (
              <motion.iframe
                key="map"
                title="Wedding venue map"
                src={mapsEmbedUrl}
                className="h-80 w-full grayscale-[25%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
              />
            ) : (
              <motion.div
                key="locations"
                className="p-5 sm:p-6 flex flex-col gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#ffd978] font-semibold mb-1">
                  Spaces inside Lal Vilas:
                </p>
                {locationHighlights.map((loc) => {
                  const Icon = loc.icon;
                  return (
                    <div
                      key={loc.name}
                      className="flex items-center gap-3.5 rounded-xl border border-[#e2c88f]/20 bg-black/25 p-3.5 hover:border-[#e2c88f]/50 transition-colors"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e2c88f]/40 bg-[#17143c] text-[#eeb2c0]">
                        <Icon size={18} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <h4 className="font-display text-lg sm:text-xl text-[#f6e2ae] font-semibold">
                            {loc.name}
                          </h4>
                          <span className="text-xs uppercase tracking-wider text-[#f8c7d4] font-medium">
                            {loc.event}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-white/85 mt-0.5">
                          {loc.note}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>

        {/* actions */}
        <Reveal delay={0.15} className="flex flex-col gap-3">
          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#e2c88f] via-[#eeb2c0] to-[#e2c88f] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#1c1640] shadow-[0_8px_30px_rgba(238,178,192,0.35)] transition-transform active:scale-95"
          >
            {/* light sweep */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              style={{ animation: "sweep 3.4s ease-in-out infinite" }}
            />
            <Navigation size={17} /> Get Driving Directions
          </a>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={googleCalendarUrl()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-[#e2c88f]/50 px-4 py-3.5 text-xs sm:text-[13px] uppercase tracking-[0.2em] font-semibold text-[#f6e2ae] transition-colors hover:bg-[#e2c88f]/15 active:scale-95"
            >
              <CalendarPlus size={16} /> Google Cal
            </a>
            <button
              onClick={downloadICS}
              className="flex items-center justify-center gap-2 rounded-full border border-[#e2c88f]/50 px-4 py-3.5 text-xs sm:text-[13px] uppercase tracking-[0.2em] font-semibold text-[#f6e2ae] transition-colors hover:bg-[#e2c88f]/15 active:scale-95"
            >
              <CalendarPlus size={16} /> Apple / ICS
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
