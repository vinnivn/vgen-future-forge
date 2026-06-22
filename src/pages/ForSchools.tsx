import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import {
  GraduationCap, Target, Lightbulb, CalendarDays, Award, Users,
  Presentation, Trophy, CheckCircle2, ArrowRight, Settings, HeartHandshake,
  Cpu, Briefcase, FlaskConical, BadgeCheck, Building2,
} from "lucide-react";

const objectives = [
  { icon: GraduationCap, label: "Future Skills Curriculum", desc: "A year-long, interdisciplinary curriculum integrating Robotics, Artificial Intelligence, Innovation, Entrepreneurship, and Community Problem Solving — aligned with each grade for progressive learning." },
  { icon: Target, label: "Skill Development", desc: "Build critical thinking, problem-solving, communication, and entrepreneurial mindset through hands-on projects, prototypes, and real-world challenges that prepare students for tomorrow's careers." },
  { icon: Lightbulb, label: "Innovation & Impact", desc: "Encourage creative thinking and community-driven innovation, enabling students to design solutions that solve real problems and create meaningful impact around them." },
];

const offerings = [
  { icon: CalendarDays, label: "Year-long Future Skills Curriculum" },
  { icon: Cpu, label: "Robotics" },
  { icon: FlaskConical, label: "Artificial Intelligence" },
  { icon: Briefcase, label: "Entrepreneurship" },
  { icon: Lightbulb, label: "Innovation Labs" },
  { icon: HeartHandshake, label: "Community Problem Solving" },
  { icon: Users, label: "Teacher Capacity Building" },
  { icon: BadgeCheck, label: "Student Certifications" },
  { icon: Building2, label: "Industry Exposure" },
];

const highlights = [
  { icon: CalendarDays, label: "Weekly Sessions" },
  { icon: Award, label: "Monthly Workshops" },
  { icon: Presentation, label: "Expert Sessions" },
  { icon: Users, label: "Team Assignments" },
  { icon: Trophy, label: "Innovation Challenges" },
  { icon: CheckCircle2, label: "Final Demo Day" },
];

const benefits = [
  "Positions your school as a Future Skills & Innovation leader",
  "Engages students through experiential, project-based learning",
  "Builds AI, entrepreneurship, and emerging technology skills",
  "Provides structured curriculum, teacher training, and certifications",
];

const ForSchools = () => (
  <main className="py-20">
    <div className="container mx-auto px-4">
      {/* Intro */}
      <SectionHeading
        title="For Schools"
        subtitle="Partner with VGEN as your academic Future Skills partner — bringing Robotics, AI, Innovation, and Entrepreneurship into your campus through a complete year-long program."
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

      {/* What We Offer */}
      <section className="mb-20">
        <h3 className="text-2xl font-bold text-center mb-8 text-foreground">What We Offer Schools</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {offerings.map((o, i) => (
            <AnimatedSection key={o.label} delay={i * 50}>
              <div className="flex items-center gap-3 bg-card rounded-lg p-4 card-shadow">
                <o.icon size={20} className="text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{o.label}</span>
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
              Simple setup, weekly schedule, teacher training, and complete academic support — so your school can focus on learning while we deliver the Future Skills experience.
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
