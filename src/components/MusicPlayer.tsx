import { useState, useEffect, useRef } from "react";
import { Music } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/assets/audio.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    // Listen for custom trigger from IntroGate "Open Invitation"
    const handleTrigger = () => {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay policy fallback
      });
    };

    window.addEventListener("play-wedding-music", handleTrigger);

    return () => {
      window.removeEventListener("play-wedding-music", handleTrigger);
      audio.pause();
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex items-center gap-2">
      <motion.button
        onClick={togglePlay}
        whileTap={{ scale: 0.9 }}
        aria-label={isPlaying ? "Mute music" : "Play music"}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-[#e2c88f]/40 bg-[#0c0a24]/85 text-[#f6e2ae] shadow-[0_4px_24px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:border-[#e2c88f] hover:bg-[#1a1645]"
      >
        {/* Glow halo */}
        <span
          className="absolute inset-0 rounded-full bg-[#e2c88f]/20 blur-sm"
          style={{ animation: isPlaying ? "glow-pulse 2s ease-in-out infinite" : "none" }}
        />

        {isPlaying ? (
          <div className="relative flex items-end gap-[3px] h-4">
            <span className="w-1 bg-[#e2c88f] rounded-full animate-bounce [animation-delay:-0.3s] h-4" />
            <span className="w-1 bg-[#eeb2c0] rounded-full animate-bounce [animation-delay:-0.15s] h-3" />
            <span className="w-1 bg-[#e2c88f] rounded-full animate-bounce [animation-delay:-0.45s] h-4" />
            <span className="w-1 bg-[#f6e2ae] rounded-full animate-bounce h-2" />
          </div>
        ) : (
          <Music size={18} className="relative text-[#e2c88f]/70 group-hover:text-[#e2c88f]" />
        )}
      </motion.button>
    </div>
  );
}
