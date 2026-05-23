import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import WorkshopModal from "@/components/WorkshopModal";
import WorkshopEnquiryForm from "@/components/WorkshopEnquiryForm";
import { workshops, workshopCategories, type Workshop } from "@/data/workshops";
import {
  Search, Clock, Users, ArrowRight, GraduationCap, School, Briefcase,
  Lightbulb, Sparkles, UserCircle2, Send, CalendarCheck, MessageSquare,
} from "lucide-react";

const audienceCards = [
  { icon: School, label: "School Students" },
  { icon: GraduationCap, label: "College Students" },
  { icon: UserCircle2, label: "Teachers & Institutions" },
  { icon: Briefcase, label: "Professionals" },
  { icon: Lightbulb, label: "Innovators & Startups" },
  { icon: Sparkles, label: "Technology Enthusiasts" },
];

const Workshops = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [selected, setSelected] = useState<Workshop | null>(null);
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    return workshops.filter((w) => {
      const matchesCat = category === "All" || w.category === category;
      const q = query.trim().toLowerCase();
      const matchesQ =
        !q ||
        w.title.toLowerCase().includes(q) ||
        w.description.toLowerCase().includes(q) ||
        w.topics.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQ;
    });
  }, [query, category]);

  const openWorkshop = (w: Workshop) => {
    setSelected(w);
    setOpen(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(263 91% 66% / 0.6), transparent 40%), radial-gradient(circle at 80% 60%, hsl(217 91% 60% / 0.5), transparent 45%)",
          }}
        />
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest bg-card/15 backdrop-blur-md px-3 py-1.5 rounded-full mb-5 animate-fade-up">
              VGEN Innovation Programs
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up leading-tight" style={{ animationDelay: "0.1s" }}>
              Technology Workshops &<br />
              <span className="text-accent">Innovation Programs</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Hands-on workshops, bootcamps, and future technology experiences designed for students, colleges, institutions, professionals, and innovators.
            </p>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
              VGEN conducts practical, industry-oriented workshops focused on emerging technologies, innovation, problem-solving, and real-world applications. Our programs are designed to bridge the gap between education and future technology through immersive learning experiences.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link to="/contact">Enquire Now</Link>
              </Button>
              <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold">
                <Link to="/contact">Book a Workshop</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold">
                <Link to="/contact">Contact VGEN</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Explore Workshops" subtitle="Filter by category or search by topic" gradient />

          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search workshops, topics, technologies..."
                className="pl-11 h-12 rounded-full bg-card border-border"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["All", ...workshopCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  category === cat
                    ? "bg-hero-gradient text-primary-foreground shadow-md"
                    : "bg-muted text-foreground/70 hover:bg-muted/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">No workshops match your search.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((w, i) => {
                const Icon = w.icon;
                return (
                  <AnimatedSection key={w.id} delay={i * 60}>
                    <div className="group h-full bg-card rounded-2xl p-6 card-shadow hover:elevated-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col border border-border/50">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{w.category}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">{w.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">{w.description}</p>

                      <div className="space-y-2 mb-4 text-xs">
                        <div className="flex items-center gap-2 text-foreground/70">
                          <Clock size={13} className="text-secondary" />
                          <span><strong className="text-foreground">Duration:</strong> {w.duration}</span>
                        </div>
                        <div className="flex items-start gap-2 text-foreground/70">
                          <Users size={13} className="text-secondary mt-0.5" />
                          <span><strong className="text-foreground">Audience:</strong> {w.audience}</span>
                        </div>
                      </div>

                      <div className="mb-5">
                        <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">Outcomes</p>
                        <ul className="space-y-1">
                          {w.outcomes.slice(0, 2).map((o) => (
                            <li key={o} className="text-xs text-foreground/75 flex items-start gap-1.5">
                              <span className="text-accent mt-0.5">•</span>{o}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        onClick={() => openWorkshop(w)}
                        variant="outline"
                        className="w-full group/btn font-semibold border-secondary/30 hover:bg-hero-gradient hover:text-primary-foreground hover:border-transparent transition-all"
                      >
                        View Details
                        <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Who Can Attend */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <SectionHeading title="Who Can Attend?" subtitle="Designed for everyone curious about future technology" gradient />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {audienceCards.map((a, i) => (
              <AnimatedSection key={a.label} delay={i * 70}>
                <div className="bg-card rounded-2xl p-6 text-center card-shadow hover:elevated-shadow hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 mx-auto rounded-full bg-hero-gradient flex items-center justify-center text-primary-foreground mb-3">
                    <a.icon size={24} />
                  </div>
                  <p className="font-semibold text-foreground text-sm">{a.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 30%, hsl(217 91% 60% / 0.5), transparent 50%)",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Bring Future Technology Learning to Your Institution
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg max-w-2xl mx-auto">
              Partner with VGEN to conduct practical, hands-on technology workshops and innovation programs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link to="/contact"><MessageSquare size={18} className="mr-2" />Contact VGEN</Link>
              </Button>
              <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90 font-semibold">
                <Link to="/contact"><CalendarCheck size={18} className="mr-2" />Book a Workshop</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold">
                <Link to="/contact"><Send size={18} className="mr-2" />Request Details</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WorkshopModal workshop={selected} open={open} onOpenChange={setOpen} />
    </main>
  );
};

export default Workshops;
