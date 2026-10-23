import Reveal, { SectionHeading } from "../components/Reveal";
import Aurora from "../components/Aurora";
import Tilt from "../components/Tilt";
import { wedding } from "../config";

interface ArchCardProps {
  name: string;
  grandparentLabel: string;
  grandparents: string;
  parentLabel: string;
  parents: string;
  delay: number;
}

// Clean helper to strip any redundant prefix from lineage strings
function cleanLineage(text: string): string {
  return text
    .replace(/^(Grandson of|Granddaughter of|Son of|Daughter of)\s*/i, "")
    .trim();
}

// Mughal-arch card for each of the couple — tilts in 3D on touch/hover
function ArchCard({
  name,
  grandparentLabel,
  grandparents,
  parentLabel,
  parents,
  delay,
}: ArchCardProps) {
  return (
    <Reveal delay={delay} className="relative flex-1 w-full">
      <Tilt max={8} className="h-full">
        <div className="relative h-full overflow-hidden rounded-t-[10rem] rounded-b-3xl border border-[#ffd978]/50 bg-[#1f194e]/95 px-6 pb-9 pt-12 text-center backdrop-blur-md shadow-[0_18px_50px_rgba(0,0,0,0.65)]">
          {/* arch inner line */}
          <div className="pointer-events-none absolute inset-3 rounded-t-[9.2rem] rounded-b-2xl border border-[#ffd978]/30" />

          {/* Decorative crown motif */}
          <div className="mx-auto mb-4 flex items-center justify-center gap-2">
            <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#ffd978]" />
            <span className="text-[#ffd978] text-sm">✦</span>
            <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#ffd978]" />
          </div>

          {/* Couple Name - large, bold, prominent */}
          <h3 className="font-script text-gold-bright text-5xl sm:text-6xl leading-[1.2] py-2 px-1">
            {name}
          </h3>

          <div className="hairline-gold mx-auto my-5 w-28 opacity-75" />

          {/* Lineage details with increased font sizes & high contrast */}
          <div className="flex flex-col gap-4 text-left bg-black/35 p-4 sm:p-5 rounded-2xl border border-[#ffd978]/25 shadow-inner">
            <div>
              <p className="text-xs sm:text-[13px] uppercase tracking-[0.22em] text-[#ffd978] font-semibold">
                {grandparentLabel}
              </p>
              <p className="text-base sm:text-[17px] leading-relaxed tracking-wide text-white font-medium mt-1">
                {cleanLineage(grandparents)}
              </p>
            </div>

            <div className="border-t border-[#ffd978]/20 pt-3">
              <p className="text-xs sm:text-[13px] uppercase tracking-[0.22em] text-[#f8c7d4] font-semibold">
                {parentLabel}
              </p>
              <p className="text-base sm:text-[17px] leading-relaxed tracking-wide text-white font-medium mt-1">
                {cleanLineage(parents)}
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
      {/* 2-line title */}
      <SectionHeading
        title={
          <>
            Two souls
            <br />
            One Destiny
          </>
        }
      />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-8">
        {/* Arch cards for Groom and Bride */}
        <div className="flex w-full flex-col sm:flex-row items-stretch gap-6">
          <ArchCard
            name={wedding.groomFull}
            grandparentLabel="Grandson of"
            grandparents={wedding.groomGrandparents}
            parentLabel="Son of"
            parents={wedding.groomParents}
            delay={0.1}
          />
          <ArchCard
            name={wedding.brideFull}
            grandparentLabel="Granddaughter of"
            grandparents={wedding.brideGrandparents}
            parentLabel="Daughter of"
            parents={wedding.brideParents}
            delay={0.2}
          />
        </div>

        {/* Monogram & blessing quote */}
        <Reveal delay={0.3} className="flex flex-col items-center gap-2.5 text-center pt-3">
          <span className="font-display text-2xl sm:text-3xl tracking-[0.4em] text-[#ffd978] font-semibold">
            {wedding.monogram}
          </span>
          <p className="font-display text-lg sm:text-xl italic text-[#f7f0e6] max-w-lg leading-relaxed">
            "Joined by destiny, celebrated with family, and blessed with love for eternity."
          </p>
        </Reveal>
      </div>
    </section>
  );
}
