import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Eye, Rocket, Cpu, Wrench, Lightbulb, GraduationCap } from "lucide-react";

const values = [
  { icon: Cpu, label: "Hands-on Learning", desc: "Students learn by building real robots and circuits." },
  { icon: Lightbulb, label: "Creativity & Innovation", desc: "We encourage creative thinking and unique solutions." },
  { icon: Wrench, label: "Real-world Application", desc: "Projects mirror real industry challenges and technologies." },
  { icon: GraduationCap, label: "Structured Education", desc: "A grade-wise curriculum designed for progressive learning." },
];

const About = () => (
  <main className="py-20">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="About VGEN"
        subtitle="We're on a mission to make robotics education accessible, exciting, and impactful."
        gradient
      />

      {/* Values */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
        {values.map((v, i) => (
          <AnimatedSection key={v.label} delay={i * 100}>
            <div className="bg-card rounded-xl p-8 card-shadow h-full">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <v.icon className="text-secondary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">{v.label}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="bg-hero-gradient rounded-2xl p-10 h-full text-primary-foreground">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-4">
              <Rocket className="text-primary-foreground" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-primary-foreground/85 leading-relaxed">
              To provide hands-on robotics education that simplifies technology and encourages innovation among school students.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <div className="bg-card rounded-2xl p-10 h-full card-shadow border border-border">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Eye className="text-accent" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To create future-ready students who can build and innovate using technology, empowered by practical robotics knowledge.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </main>
);

export default About;
