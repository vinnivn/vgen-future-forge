import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Bot, CircuitBoard, Wrench, BrainCircuit, Check } from "lucide-react";

const grades = [
  {
    grade: "Grade 6",
    title: "Beginner Robotics",
    icon: Bot,
    desc: "Start your robotics journey with the basics of electronics and simple robot building.",
    topics: [
      "Basics of robotics and components",
      "Simple electronics and circuits",
      "Basic robot movement",
      "Build a simple robot",
    ],
  },
  {
    grade: "Grade 7",
    title: "Foundations of Robotics",
    icon: CircuitBoard,
    desc: "Dive deeper into electronics, programming, and sensor-based projects.",
    topics: [
      "Electronics and circuits",
      "Arduino programming",
      "Motor control",
      "Sensors (IR, Ultrasonic)",
      "Robot projects",
    ],
  },
  {
    grade: "Grade 8",
    title: "Intermediate Robotics",
    icon: Wrench,
    desc: "Build smart, autonomous robots with advanced sensors and wireless control.",
    topics: [
      "Advanced sensors",
      "Automation",
      "Bluetooth control",
      "Smart robots",
      "Multi-function systems",
    ],
  },
  {
    grade: "Grade 9",
    title: "Humanoid Robotics",
    icon: BrainCircuit,
    desc: "Design and prototype humanoid robotic components with servo-based systems.",
    topics: [
      "Human hand mechanics",
      "Servo motors",
      "Mechanical design",
      "Robotic wrist and fingers",
      "Prototype development",
    ],
  },
];

const Programs = () => (
  <main className="py-20">
    <div className="container mx-auto px-4">
      <SectionHeading
        title="Our Programs"
        subtitle="Structured robotics curriculum from Grade 6 to Grade 9"
        gradient
      />

      <div className="space-y-16 mt-8">
        {grades.map((g, i) => (
          <AnimatedSection key={g.grade} delay={i * 100}>
            <div className={`flex flex-col lg:flex-row gap-8 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Icon block */}
              <div className="flex-shrink-0 w-full lg:w-72 flex justify-center">
                <div className="w-32 h-32 rounded-2xl bg-hero-gradient flex items-center justify-center elevated-shadow">
                  <g.icon className="text-primary-foreground" size={56} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-card rounded-xl p-8 card-shadow">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">{g.grade}</span>
                <h3 className="text-2xl font-bold mt-1 mb-3 text-foreground">{g.title}</h3>
                <p className="text-muted-foreground mb-6">{g.desc}</p>
                <ul className="space-y-3">
                  {g.topics.map((t) => (
                    <li key={t} className="flex items-center gap-3 text-foreground/80">
                      <Check size={16} className="text-accent flex-shrink-0" />
                      <span className="text-sm">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </main>
);

export default Programs;
