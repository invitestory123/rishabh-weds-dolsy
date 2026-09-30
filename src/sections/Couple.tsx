import { motion } from "framer-motion";
import Reveal, { SectionHeading } from "../components/Reveal";
import Aurora from "../components/Aurora";
import Tilt from "../components/Tilt";
import { wedding } from "../config";

interface ArchCardProps {
  role: string;
  name: string;
  grandparents: string;
  parents: string;
  delay: number;
  initialLetter: string;
}

// Mughal-arch card for each of the couple — tilts in 3D on touch/hover
function ArchCard({
  role,
  name,
  grandparents,
  parents,
  delay,
  initialLetter,
}: ArchCardProps) {
  return (
    <Reveal delay={delay} className="relative flex-1 w-full">
      <Tilt max={8} className="h-full">
        <div className="relative h-full overflow-hidden rounded-t-[10rem] rounded-b-3xl border border-[#e2c88f]/40 bg-white/[0.05] px-5 pb-8 pt-10 text-center backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
          {/* arch inner line */}
          <div className="pointer-events-none absolute inset-2.5 rounded-t-[9.2rem] rounded-b-2xl border border-[#e2c88f]/20" />

          {/* Role badge */}
          <span className="inline-block rounded-full border border-[#eeb2c0]/40 bg-[#1c1640]/70 px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-[#eeb2c0]">
            {role}
          </span>

          {/* Initial Letter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.4, rotate: -14 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="my-3"
          >
            <span className="font-script inline-block text-6xl leading-none text-[#eeb2c0] drop-shadow-[0_0_15px_rgba(238,178,192,0.4)]">
              {initialLetter}
            </span>
          </motion.div>

          <h3 className="font-script text-gold text-3xl sm:text-4xl leading-tight">
            {name}
          </h3>

          <div className="hairline-gold mx-auto my-4 w-20 opacity-60" />

          {/* Lineage details */}
          <div className="flex flex-col gap-3 text-left bg-black/20 p-3.5 rounded-2xl border border-[#e2c88f]/15">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#e2c88f]/70 font-semibold">
                Grandparents
              </p>
              <p className="text-[12px] leading-relaxed tracking-wide text-[#f5eee2]/85">
                {grandparents}
              </p>
            </div>

            <div className="border-t border-[#e2c88f]/10 pt-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#eeb2c0]/70 font-semibold">
                Parents
              </p>
              <p className="text-[12px] leading-relaxed tracking-wide text-[#f5eee2]/85">
                {parents}
              </p>
            </div>
          </div>
        </div>
      </Tilt>
    </Reveal>
  );
}

export default function Couple() {
  return (
    <section className="relative overflow-hidden px-5 py-24">
      <Aurora className="opacity-60" />
      <SectionHeading kicker="The Happy Couple" title="Two Souls, One Destiny" />

      <div className="relative mx-auto flex max-w-xl flex-col items-center gap-8">
        {/* Arch cards for Groom and Bride */}
        <div className="flex w-full flex-col sm:flex-row items-stretch gap-6">
          <ArchCard
            role="The Groom"
            name={wedding.groomFull}
            grandparents={wedding.groomGrandparents}
            parents={wedding.groomParents}
            delay={0.1}
            initialLetter="R"
          />
          <ArchCard
            role="The Bride"
            name={wedding.brideFull}
            grandparents={wedding.brideGrandparents}
            parents={wedding.brideParents}
            delay={0.2}
            initialLetter="D"
          />
        </div>

        <Reveal delay={0.3} className="flex flex-col items-center gap-2 text-center">
          <span className="font-display text-2xl tracking-[0.4em] text-[#e2c88f]">
            {wedding.monogram}
          </span>
          <p className="font-display text-base italic text-[#f5eee2]/75 max-w-md">
            "Joined by destiny, celebrated with family, and blessed with love for eternity."
          </p>
        </Reveal>
      </div>
    </section>
  );
}
