import Reveal, { SectionHeading } from "../components/Reveal";
import Aurora from "../components/Aurora";
import Tilt from "../components/Tilt";
import { wedding } from "../config";

interface ArchCardProps {
  name: string;
  parents: string;
  delay: number;
}

// Mughal-arch card for each of the couple — tilts in 3D on touch/hover
function ArchCard({
  name,
  parents,
  delay,
}: ArchCardProps) {
  return (
    <Reveal delay={delay} className="relative flex-1 w-full">
      <Tilt max={8} className="h-full">
        <div className="relative h-full overflow-hidden rounded-t-[10rem] rounded-b-3xl border border-[#ffd978]/45 bg-[#1f194e]/90 px-5 pb-8 pt-12 text-center backdrop-blur-md shadow-[0_16px_50px_rgba(0,0,0,0.6)]">
          {/* arch inner line */}
          <div className="pointer-events-none absolute inset-2.5 rounded-t-[9.2rem] rounded-b-2xl border border-[#ffd978]/25" />

          {/* Couple Name - bigger font size & bright radiant gold */}
          <h3 className="font-script-bold text-gold-bright text-4xl sm:text-5xl leading-tight py-2 px-1">
            {name}
          </h3>

          <div className="hairline-gold mx-auto my-5 w-24 opacity-80" />

          {/* Parents details - grandparents & 'Son/Daughter of' removed */}
          <div className="flex flex-col gap-1 text-center bg-black/30 p-4 rounded-2xl border border-[#ffd978]/25 shadow-inner">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#ffd978] font-semibold">
              Parents
            </p>
            <p className="text-[13px] leading-relaxed tracking-wide text-[#f7f0e6] font-medium mt-0.5">
              {parents}
            </p>
          </div>
        </div>
      </Tilt>
    </Reveal>
  );
}

export default function Couple() {
  const groomParentsClean = wedding.groomParents.replace(/^Son of\s+/i, "");
  const brideParentsClean = wedding.brideParents.replace(/^Daughter of\s+/i, "");

  return (
    <section className="relative overflow-hidden px-5 py-24">
      <Aurora className="opacity-60" />
      {/* Kicker removed, exact casing, top overflow protected */}
      <SectionHeading title="Two souls, One destiny" />

      <div className="relative mx-auto flex max-w-xl flex-col items-center gap-8">
        {/* Arch cards for Groom and Bride */}
        <div className="flex w-full flex-col sm:flex-row items-stretch gap-6">
          <ArchCard
            name={wedding.groomFull}
            parents={groomParentsClean}
            delay={0.1}
          />
          <ArchCard
            name={wedding.brideFull}
            parents={brideParentsClean}
            delay={0.2}
          />
        </div>

        {/* Closing blessing quote split into 2 lines, no monogram initials */}
        <Reveal delay={0.3} className="flex flex-col items-center gap-2 text-center pt-2">
          <p className="font-display text-base sm:text-lg italic text-[#f7f0e6]/90 max-w-md leading-relaxed">
            "Joined by destiny, celebrated with family,
            <br />
            and blessed with love for eternity."
          </p>
        </Reveal>
      </div>
    </section>
  );
}
