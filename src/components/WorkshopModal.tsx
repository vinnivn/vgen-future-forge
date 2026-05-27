import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { Check, Clock, Users, Sparkles, Target, Wrench, X, Send } from "lucide-react";
import type { Workshop } from "@/data/workshops";

interface Props {
  workshop: Workshop | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WorkshopModal = ({ workshop, open, onOpenChange }: Props) => {
  if (!workshop) return null;
  const Icon = workshop.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[calc(100%-2rem)] max-h-[90vh] overflow-y-auto overflow-x-hidden p-0 rounded-2xl border-0 bg-card [&>button]:hidden">
        <div className="relative bg-hero-gradient px-6 sm:px-8 pt-8 pb-10 rounded-t-2xl text-primary-foreground">
          <DialogClose className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center hover:bg-card/40 transition">
            <X size={18} />
          </DialogClose>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-card/20 backdrop-blur-md flex items-center justify-center flex-shrink-0">
              <Icon size={28} />
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-widest opacity-80">{workshop.category}</span>
              <DialogTitle className="text-2xl sm:text-3xl font-bold mt-1 leading-tight">{workshop.title}</DialogTitle>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-card/20 backdrop-blur-md px-3 py-1.5 rounded-full">
              <Clock size={13} /> {workshop.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-card/20 backdrop-blur-md px-3 py-1.5 rounded-full">
              <Users size={13} /> {workshop.audience}
            </span>
          </div>
        </div>

        <div className="px-6 sm:px-8 py-6">
          <DialogHeader>
            <DialogDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed text-left">
              {workshop.description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-5">
            <Section icon={<Sparkles size={16} />} title="Topics Covered" items={workshop.topics} />
            <Section icon={<Wrench size={16} />} title="Hands-on Activities" items={workshop.activities} />
            <Section icon={<Target size={16} />} title="Learning Outcomes" items={workshop.outcomes} />
          </div>

          <div className="mt-7">
            <Button asChild className="w-full bg-hero-gradient text-primary-foreground hover:opacity-90 font-semibold">
              <Link to="/contact" onClick={() => onOpenChange(false)}>
                <Send size={16} className="mr-2" /> Enquire for Workshop
              </Link>
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

export default WorkshopModal;
