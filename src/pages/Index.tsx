import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import ProgramModal, { type ProgramDetail } from "@/components/ProgramModal";
import { programDetails } from "@/data/programDetails";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Cpu, Lightbulb, Rocket, GraduationCap, Briefcase, HeartHandshake, Sparkles,
} from "lucide-react";

const cardSubtitles: Record<string, string> = {
  "Grade 5": "Robotics & AI Awareness",
  "Grade 6": "Electronics & Innovation",
  "Grade 7": "Generative AI & Entrepreneurship",
  "Grade 8": "IoT, Agentic AI & Product Design",
  "Grade 9": "Automation & Community Innovation",
};

const whyUs = [
  { icon: GraduationCap, label: "Future Skills Curriculum", desc: "Preparing students for tomorrow's careers through interdisciplinary learning." },
  { icon: Cpu, label: "Artificial Intelligence", desc: "Introducing Generative AI, Agentic AI, automation, and responsible AI." },
  { icon: Lightbulb, label: "Innovation", desc: "Developing creativity, design thinking, and product innovation skills." },
  { icon: Briefcase, label: "Entrepreneurship", desc: "Helping learners transform ideas into impactful ventures." },
  { icon: HeartHandshake, label: "Community Problem Solving", desc: "Encouraging students to solve real-world challenges affecting society." },
  { icon: Sparkles, label: "Experiential Learning", desc: "Hands-on projects, prototypes, competitions, and innovation challenges." },
];

const Index = () => {
  const [selected, setSelected] = useState<ProgramDetail | null>(null);
  const [open, setOpen] = useState(false);

  const openProgram = (p: ProgramDetail) => {
    setSelected(p);
    setOpen(true);
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Students building robots" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
              Preparing Future Innovators,<br />
              <span className="text-accent">Entrepreneurs & Technology Leaders</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              VGEN empowers students through hands-on learning in Robotics, Artificial Intelligence, Entrepreneurship, Innovation, Emerging Technologies, and Community Problem Solving — building future-ready skills beyond traditional education.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold text-base px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <SectionHeading title="About VGEN" subtitle="Building Future Innovators." gradient />
            <p className="text-center text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              VGEN is a Future Skills and Innovation Platform dedicated to preparing students for tomorrow's world through experiential learning. By integrating Robotics, Artificial Intelligence, Entrepreneurship, Design Thinking, Coding, Emerging Technologies, and Community Innovation, VGEN empowers learners to become innovators, creators, entrepreneurs, and responsible problem-solvers capable of creating meaningful impact.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Future Skills Programs" subtitle="Click any card to explore the full program details" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {programDetails.map((p, i) => (
              <AnimatedSection key={p.grade} delay={i * 100}>
                <button
                  onClick={() => openProgram(p)}
                  className="text-left w-full bg-card rounded-xl overflow-hidden card-shadow hover:elevated-shadow hover:-translate-y-1 transition-all duration-300 h-full flex flex-col focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <div className="w-full h-40 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" width={640} height={640} />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{p.grade}</span>
                    <h3 className="text-lg font-bold mt-1 mb-2 text-foreground">{cardSubtitles[p.grade] ?? p.title}</h3>
                    <p className="text-muted-foreground text-sm flex-1">{p.shortDesc.split(".")[0]}.</p>
                    <span className="text-secondary text-sm font-medium mt-4 inline-block">
                      Learn more →
                    </span>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why VGEN */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Why VGEN?" subtitle="A complete Future Skills ecosystem for tomorrow's innovators" gradient />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyUs.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 80}>
                <div className="bg-card rounded-xl p-6 card-shadow h-full hover:elevated-shadow hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-hero-gradient flex items-center justify-center mb-4">
                    <item.icon className="text-primary-foreground" size={22} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Bring Future Skills Learning to Your School
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Partner with VGEN to build innovators, entrepreneurs, and future technology leaders.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-10">
              <Link to="/contact">Contact Now</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <ProgramModal program={selected} open={open} onOpenChange={setOpen} />
    </main>
  );
};

export default Index;
