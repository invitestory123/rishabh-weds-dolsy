import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Sparkles, Heart } from "lucide-react";
import Reveal, { SectionHeading } from "../components/Reveal";
import { wedding } from "../config";

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const photos = wedding.gallery;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + photos.length) % photos.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % photos.length);
  };

  return (
    <section className="relative overflow-hidden px-5 py-24" id="gallery">
      {/* Memories & Love kicker removed, title protected from clipping */}
      <SectionHeading title="Moments of Forever" />

      <div className="relative mx-auto max-w-5xl">
        <Reveal className="mb-6 text-center">
          <p className="font-display text-base italic text-[#f7f0e6]/80 max-w-md mx-auto">
            "Every glance, every smile, and every promise leading to our big day."
          </p>
        </Reveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((item, idx) => (
            <Reveal key={item.src} delay={idx * 0.1} className={idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onClick={() => setSelectedIdx(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-t-[5rem] rounded-b-2xl border-t border-x border-[#ffd978]/40 border-b-0 bg-[#1f194e]/90 p-2 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
              >
                {/* Photo frame */}
                <div className="relative overflow-hidden rounded-t-[4.5rem] rounded-b-xl aspect-[3/4] w-full">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141138]/95 via-transparent to-transparent opacity-65 group-hover:opacity-85 transition-opacity" />

                  {/* Inner golden arch line - bottom line removed */}
                  <div className="pointer-events-none absolute inset-2 rounded-t-[4.1rem] border-t border-x border-[#ffd978]/30 border-b-0" />

                  {/* Caption badge at bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-4 text-center transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    {/* Calligraphy style bold + bigger font size */}
                    <span className="font-script-bold text-2xl sm:text-3xl text-gold-bright block drop-shadow-[0_2px_12px_rgba(255,217,102,0.6)] py-1 leading-snug">
                      {item.title}
                    </span>
                    <p className="font-display text-xs italic text-[#f7f0e6]/85 line-clamp-1 mt-0.5">
                      {item.caption}
                    </p>
                  </div>

                  {/* Center hover sparkle */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="rounded-full bg-[#1c1640]/80 p-3 border border-[#ffd978]/60 text-[#ffd978] shadow-[0_0_20px_rgba(255,217,102,0.5)]">
                      <Sparkles size={18} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIdx(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 z-50 rounded-full border border-[#ffd978]/40 bg-[#141138]/80 p-2.5 text-[#ffd978] hover:border-[#ffd978] hover:bg-[#1a1645] transition-colors"
            >
              <X size={20} />
            </button>

            {/* Prev button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 rounded-full border border-[#ffd978]/40 bg-[#141138]/80 p-2.5 text-[#ffd978] hover:border-[#ffd978] hover:bg-[#1a1645] transition-colors"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 rounded-full border border-[#ffd978]/40 bg-[#141138]/80 p-2.5 text-[#ffd978] hover:border-[#ffd978] hover:bg-[#1a1645] transition-colors"
            >
              <ChevronRight size={22} />
            </button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-lg overflow-hidden rounded-t-[5rem] rounded-b-2xl border-t border-x border-[#ffd978]/60 border-b-0 bg-[#141138] shadow-[0_0_50px_rgba(255,217,102,0.3)] p-2"
            >
              <div className="relative overflow-hidden rounded-t-[4.5rem] rounded-b-xl">
                <img
                  src={photos[selectedIdx].src}
                  alt={photos[selectedIdx].title}
                  className="max-h-[68vh] w-auto mx-auto object-contain"
                />
              </div>

              <div className="p-4 text-center">
                <h4 className="font-script-bold text-3xl sm:text-4xl text-gold-bright flex items-center justify-center gap-2 py-1 leading-snug">
                  <Heart size={20} className="text-[#eeb2c0] fill-[#eeb2c0] shrink-0" />
                  {photos[selectedIdx].title}
                </h4>
                <p className="font-display text-sm italic text-[#f7f0e6]/85 mt-1">
                  {photos[selectedIdx].caption}
                </p>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#ffd978]/70 mt-2 block">
                  Photo {selectedIdx + 1} of {photos.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
