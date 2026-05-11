import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ProgramModal, { type ProgramDetail } from "@/components/ProgramModal";
import { programDetails } from "@/data/programDetails";
import { Check, ArrowRight } from "lucide-react";

const Programs = () => {
  const [selected, setSelected] = useState<ProgramDetail | null>(null);
  const [open, setOpen] = useState(false);

  const openProgram = (p: ProgramDetail) => {
    setSelected(p);
    setOpen(true);
  };

  return (
    <main className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Programs"
          subtitle="Structured robotics curriculum from Grade 5 to Grade 9 — click any card for full details"
          gradient
        />

        <div className="space-y-16 mt-8">
          {programDetails.map((g, i) => (
            <AnimatedSection key={g.grade} delay={i * 100}>
              <button
                onClick={() => openProgram(g)}
                className={`group text-left w-full flex flex-col lg:flex-row gap-8 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""} focus:outline-none`}
              >
                {/* Image block */}
                <div className="flex-shrink-0 w-full lg:w-72 flex justify-center">
                  <div className="w-56 h-56 rounded-2xl overflow-hidden elevated-shadow group-hover:scale-105 transition-transform duration-300">
                    <img src={g.image} alt={g.title} className="w-full h-full object-cover" loading="lazy" width={640} height={640} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-xl p-8 card-shadow group-hover:elevated-shadow transition-shadow">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">{g.grade}</span>
                  <h3 className="text-2xl font-bold mt-1 mb-3 text-foreground">{g.title}</h3>
                  <p className="text-muted-foreground mb-6">{g.shortDesc}</p>
                  <ul className="space-y-3">
                    {g.includes.slice(0, 5).map((t) => (
                      <li key={t} className="flex items-center gap-3 text-foreground/80">
                        <Check size={16} className="text-accent flex-shrink-0" />
                        <span className="text-sm">{t}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-secondary font-semibold text-sm mt-6 group-hover:gap-2 transition-all">
                    View full details <ArrowRight size={14} />
                  </span>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <ProgramModal program={selected} open={open} onOpenChange={setOpen} />
    </main>
  );
};

export default Programs;
