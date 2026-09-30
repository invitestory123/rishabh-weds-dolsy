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
      <SectionHeading kicker="Memories & Love" title="Moments of Forever" />

      <div className="relative mx-auto max-w-5xl">
        <Reveal className="mb-6 text-center">
          <p className="font-display text-base italic text-[#f5eee2]/75 max-w-md mx-auto">
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
                className="group relative cursor-pointer overflow-hidden rounded-t-[5rem] rounded-b-2xl border border-[#e2c88f]/40 bg-white/[0.04] p-2 backdrop-blur-md shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a24]/90 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                  {/* Inner golden arch line */}
                  <div className="pointer-events-none absolute inset-2 rounded-t-[4.1rem] rounded-b-lg border border-[#e2c88f]/35" />

                  {/* Caption badge at bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-4 text-center transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <span className="font-display text-lg text-[#f6e2ae] block drop-shadow-md">
                      {item.title}
                    </span>
                    <p className="font-display text-xs italic text-[#f5eee2]/80 line-clamp-1 mt-0.5">
                      {item.caption}
                    </p>
                  </div>

                  {/* Center hover sparkle */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="rounded-full bg-[#1c1640]/80 p-3 border border-[#e2c88f]/60 text-[#e2c88f] shadow-[0_0_20px_rgba(226,200,143,0.5)]">
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
              className="absolute top-6 right-6 z-50 rounded-full border border-[#e2c88f]/40 bg-[#0c0a24]/80 p-2.5 text-[#f6e2ae] hover:border-[#e2c88f] hover:bg-[#1a1645] transition-colors"
            >
              <X size={20} />
            </button>

            {/* Prev button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 rounded-full border border-[#e2c88f]/40 bg-[#0c0a24]/80 p-2.5 text-[#f6e2ae] hover:border-[#e2c88f] hover:bg-[#1a1645] transition-colors"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 rounded-full border border-[#e2c88f]/40 bg-[#0c0a24]/80 p-2.5 text-[#f6e2ae] hover:border-[#e2c88f] hover:bg-[#1a1645] transition-colors"
            >
              <ChevronRight size={22} />
            </button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-lg overflow-hidden rounded-t-[5rem] rounded-b-2xl border-2 border-[#e2c88f]/60 bg-[#0c0a24] shadow-[0_0_50px_rgba(226,200,143,0.3)] p-2"
            >
              <div className="relative overflow-hidden rounded-t-[4.5rem] rounded-b-xl">
                <img
                  src={photos[selectedIdx].src}
                  alt={photos[selectedIdx].title}
                  className="max-h-[68vh] w-auto mx-auto object-contain"
                />
              </div>

              <div className="p-4 text-center">
                <h4 className="font-display text-xl text-[#f6e2ae] flex items-center justify-center gap-2">
                  <Heart size={16} className="text-[#eeb2c0] fill-[#eeb2c0]" />
                  {photos[selectedIdx].title}
                </h4>
                <p className="font-display text-sm italic text-[#f5eee2]/80 mt-1">
                  {photos[selectedIdx].caption}
                </p>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#e2c88f]/70 mt-2 block">
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
