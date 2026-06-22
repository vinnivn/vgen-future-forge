import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Eye, Rocket, Cpu, Lightbulb, Briefcase, HeartHandshake } from "lucide-react";

const values = [
  { icon: Lightbulb, label: "Innovation", desc: "We nurture creative thinking, design mindset, and the ability to turn ideas into real solutions — empowering students to invent, prototype, and bring meaningful innovations to life." },
  { icon: Cpu, label: "Technology", desc: "From Robotics and AI to IoT, Coding, and Emerging Technologies, students gain practical exposure to the tools shaping tomorrow's industries and careers." },
  { icon: Rocket, label: "Leadership", desc: "We build confidence, communication, and decision-making skills so students grow into responsible leaders ready to guide teams and drive change." },
  { icon: Briefcase, label: "Entrepreneurship", desc: "Learners explore how to convert ideas into ventures — through design thinking, business pitching, and real product development experiences." },
  { icon: HeartHandshake, label: "Community Impact", desc: "Students apply technology to solve real community challenges, learning that innovation matters most when it improves lives around them." },
  { icon: Eye, label: "Experiential Learning", desc: "Hands-on projects, prototypes, workshops, and innovation challenges turn theory into deep, lasting understanding." },
];

const About = () => (
  <main className="py-20">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="About VGEN"
        subtitle="VGEN is a Future Skills & Innovation Platform preparing students for tomorrow's world through experiential learning. By integrating Robotics, Artificial Intelligence, Entrepreneurship, Design Thinking, Coding, Emerging Technologies, and Community Innovation, VGEN empowers learners to become innovators, creators, entrepreneurs, and responsible problem-solvers capable of creating meaningful impact."
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
            <ul className="space-y-2 text-primary-foreground/90 leading-relaxed text-sm list-disc list-inside">
              <li>Inspire innovation through experiential learning.</li>
              <li>Equip learners with future-ready technology skills.</li>
              <li>Foster entrepreneurship and leadership from an early age.</li>
              <li>Encourage students to solve real community problems using technology.</li>
              <li>Build an innovation ecosystem connecting schools, colleges, industries, and communities.</li>
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <div className="bg-card rounded-2xl p-10 h-full card-shadow border border-border">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Eye className="text-accent" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To create a generation of innovative thinkers, ethical leaders, entrepreneurs, and technology creators who solve real-world problems and contribute positively to society.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </main>
);

export default About;
