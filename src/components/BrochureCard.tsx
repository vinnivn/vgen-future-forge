import { Eye, Download, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Brochure } from "@/data/brochures";

interface Props {
  brochure: Brochure;
}

const BrochureCard = ({ brochure }: Props) => {
  const { title, description, file, available } = brochure;

  return (
    <div className="group relative rounded-2xl p-4 sm:p-5 bg-card/70 backdrop-blur-xl border border-border/60 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-[0_15px_40px_-15px_hsl(263_91%_66%/0.35)] transition-all duration-300 flex gap-4 items-center">
      {/* Thumbnail */}
      <div className="relative w-14 h-16 sm:w-16 sm:h-20 flex-shrink-0 rounded-lg bg-hero-gradient flex items-center justify-center text-primary-foreground shadow-md group-hover:scale-105 transition-transform">
        <FileText size={26} />
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-widest bg-card text-primary border border-primary/20 px-1.5 py-0.5 rounded">
          PDF
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-foreground text-sm sm:text-base leading-snug truncate">{title}</h4>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {available ? (
            <>
              <Button asChild size="sm" variant="outline" className="h-8 px-3 text-xs rounded-full font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary">
                <a href={file} target="_blank" rel="noopener noreferrer">
                  <Eye size={13} className="mr-1.5" /> View
                </a>
              </Button>
              <Button asChild size="sm" className="h-8 px-3 text-xs rounded-full font-medium bg-hero-gradient text-primary-foreground hover:opacity-90">
                <a href={file} download>
                  <Download size={13} className="mr-1.5" /> Download
                </a>
              </Button>
            </>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-full">
              <Clock size={12} /> Brochure Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrochureCard;
