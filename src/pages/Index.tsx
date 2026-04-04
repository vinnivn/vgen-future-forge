import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Cpu, Cog, Lightbulb, Users, BookOpen, Rocket,
  Bot, CircuitBoard, Wrench, BrainCircuit,
} from "lucide-react";

const programs = [
  { grade: "Grade 6", title: "Milo Bot", icon: Bot, desc: "Introduction to robotics fundamentals and simple electronics." },
  { grade: "Grade 7", title: "Geary Tech", icon: CircuitBoard, desc: "Arduino programming, sensors, and motor control." },
  { grade: "Grade 8", title: "Neo Bot", icon: Wrench, desc: "Automation, Bluetooth control, and smart robots." },
  { grade: "Grade 9", title: "Grab-It", icon: BrainCircuit, desc: "Servo motors, mechanical design, and prototypes." },
];

const whyUs = [
  { icon: Cpu, label: "Hands-on Learning" },
  { icon: BookOpen, label: "Structured Curriculum" },
  { icon: Cog, label: "Real-world Projects" },
  { icon: Users, label: "Expert Guidance" },
  { icon: Lightbulb, label: "Innovation-focused" },
  { icon: Rocket, label: "Student Engagement" },
];

const Index = () => (
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
            Explore the Future<br />
            <span className="text-accent">With Us</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Hands-on Robotics Programs for School Students
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
          <SectionHeading title="About VGEN" gradient />
          <p className="text-center text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            At VGEN, we are dedicated to enhancing the gyan (knowledge) of students through hands-on robotics and technology-driven learning. Our programs are designed to transform curiosity into creativity by enabling students to explore electronics, coding, and real-world problem-solving in an engaging way.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Programs */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Programs" subtitle="Structured learning paths from beginner to advanced robotics" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <AnimatedSection key={p.grade} delay={i * 100}>
              <div className="bg-card rounded-xl p-6 card-shadow hover:elevated-shadow transition-shadow duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <p.icon className="text-secondary" size={24} />
                </div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">{p.grade}</span>
                <h3 className="text-lg font-bold mt-1 mb-2 text-foreground">{p.title}</h3>
                <p className="text-muted-foreground text-sm flex-1">{p.desc}</p>
                <Link to="/programs" className="text-secondary text-sm font-medium mt-4 hover:underline inline-block">
                  Learn more →
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Why Choose VGEN?" gradient />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {whyUs.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 80}>
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-muted/50 transition-colors">
                <div className="w-14 h-14 rounded-full bg-hero-gradient flex items-center justify-center mb-3">
                  <item.icon className="text-primary-foreground" size={24} />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
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
            Bring Robotics to Your School Today
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Partner with VGEN to create future-ready students.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-10">
            <Link to="/contact">Contact Now</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </main>
);

export default Index;
