import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import {
  GraduationCap, Target, Lightbulb, CalendarDays, Award, Users,
  Presentation, Trophy, CheckCircle2, ArrowRight, Settings, HeartHandshake,
} from "lucide-react";

const objectives = [
  { icon: GraduationCap, label: "STEM Learning", desc: "Integrate robotics into school curriculum to make learning more practical and engaging. Students connect science, technology, engineering, and mathematics through hands-on activities, helping them understand concepts better and apply them in real-life situations." },
  { icon: Target, label: "Skill Development", desc: "Build critical thinking, logical reasoning, and problem-solving abilities through interactive projects and challenges. Students develop confidence, teamwork, and analytical skills that are essential for both academic success and future careers." },
  { icon: Lightbulb, label: "Innovation", desc: "Encourage creative solutions through technology by allowing students to explore, design, and experiment with their ideas. This fosters an innovative mindset, enabling them to think independently and develop unique approaches to real-world problems." },
];

const highlights = [
  { icon: CalendarDays, label: "Weekly Sessions" },
  { icon: Award, label: "Monthly Workshops" },
  { icon: Presentation, label: "Expert Sessions" },
  { icon: Users, label: "Team Assignments" },
  { icon: Trophy, label: "Robotics Events" },
  { icon: CheckCircle2, label: "Final Demo Day" },
];

const benefits = [
  "Improves academic profile and STEM reputation",
  "Engages students with interactive learning",
  "Builds future-ready technology skills",
  "Provides structured extracurricular programs",
];

const ForSchools = () => (
  <main className="py-20">
    <div className="container mx-auto px-4">
      {/* Intro */}
      <SectionHeading
        title="For Schools"
        subtitle="Bring cutting-edge robotics education to your campus with a turnkey program."
        gradient
      />

      {/* Objectives */}
      <section className="mb-20">
        <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Objectives</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {objectives.map((o, i) => (
            <AnimatedSection key={o.label} delay={i * 100}>
              <div className="bg-card rounded-xl p-8 card-shadow text-center h-full">
                <div className="w-14 h-14 rounded-full bg-hero-gradient flex items-center justify-center mx-auto mb-4">
                  <o.icon className="text-primary-foreground" size={24} />
                </div>
                <h4 className="font-bold text-foreground mb-2">{o.label}</h4>
                <p className="text-muted-foreground text-sm">{o.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Program Highlights */}
      <section className="mb-20">
        <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Program Highlights</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {highlights.map((h, i) => (
            <AnimatedSection key={h.label} delay={i * 60}>
              <div className="flex items-center gap-3 bg-muted/60 rounded-lg p-4">
                <h.icon size={20} className="text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{h.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-20">
        <AnimatedSection>
          <div className="bg-card rounded-2xl p-10 card-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-foreground text-center">Benefits to Your School</h3>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <ArrowRight size={18} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </section>

      {/* Implementation */}
      <section className="mb-16">
        <AnimatedSection>
          <div className="bg-muted/50 rounded-2xl p-10 max-w-2xl mx-auto text-center">
            <div className="flex justify-center gap-6 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Settings className="text-secondary" size={22} />
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <HeartHandshake className="text-accent" size={22} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Easy Implementation</h3>
            <p className="text-muted-foreground mb-6">
              Simple setup, weekly schedule, and full support provided. We handle everything so your school can focus on what matters.
            </p>
            <Button asChild className="bg-hero-gradient text-primary-foreground hover:opacity-90 font-semibold px-8">
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  </main>
);

export default ForSchools;
