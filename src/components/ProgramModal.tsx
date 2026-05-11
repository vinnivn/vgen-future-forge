import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Target, Send, X } from "lucide-react";

export interface ProgramDetail {
  grade: string;
  title: string;
  image: string;
  shortDesc: string;
  includes: string[];
  outcomes: string[];
  features: string[];
}

interface Props {
  program: ProgramDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProgramModal = ({ program, open, onOpenChange }: Props) => {
  if (!program) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-2xl w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto overflow-x-hidden p-0 rounded-2xl border-0 bg-card [&>button]:hidden"
        style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.2)" }}
      >
        {/* Banner */}
        <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-t-2xl bg-muted">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent pointer-events-none" />
          <DialogClose className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center text-foreground shadow-md hover:bg-primary hover:text-primary-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary">
            <X size={18} />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>

        {/* Content */}
        <div className="px-6 sm:px-8 py-6">
          <DialogHeader className="text-left space-y-2">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">{program.grade}</span>
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">{program.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {program.shortDesc}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-5">
            <Section icon={<Sparkles size={16} />} title="Program Includes" items={program.includes} />
            <Section icon={<Target size={16} />} title="Learning Outcomes" items={program.outcomes} />
            <Section icon={<Check size={16} />} title="Additional Features" items={program.features} />
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button asChild className="flex-1 bg-hero-gradient text-primary-foreground hover:opacity-90 font-semibold">
              <Link to="/contact" onClick={() => onOpenChange(false)}>
                <Send size={16} className="mr-2" /> Enroll Now
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1 font-semibold">
              <Link to="/programs" onClick={() => onOpenChange(false)}>View All Programs</Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Section = ({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) => (
  <div>
    <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
      <span className="w-7 h-7 rounded-md bg-hero-gradient text-primary-foreground flex items-center justify-center">{icon}</span>
      {title}
    </h4>
    <ul className="space-y-2 pl-1">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2 text-sm text-foreground/80">
          <Check size={14} className="text-accent flex-shrink-0 mt-0.5" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ProgramModal;
