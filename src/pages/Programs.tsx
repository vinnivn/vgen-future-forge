import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Check } from "lucide-react";
import rcSoccerImg from "@/assets/rc-soccer-bot.jpg";
import ottoBotImg from "@/assets/otto-bot.jpg";
import lineFollowerImg from "@/assets/line-follower-bot.jpg";
import rcBotImg from "@/assets/rc-bot.jpg";
import pickPlaceImg from "@/assets/pick-place-bot.jpg";

const grades = [
  {
    grade: "Grade 5",
    title: "RC Bot & Robo Soccer",
    image: rcSoccerImg,
    desc: "Beginner-friendly introduction to robotics through building an RC bot and play-based Robo Soccer challenges.",
    topics: [
      "Introduction to robotics and basic components",
      "Basics of circuits and power systems",
      "DC motors and movement control",
      "Remote control (wired / wireless basics)",
      "Building an RC Bot",
      "Robo Soccer gameplay and challenges",
    ],
  },
  {
    grade: "Grade 6",
    title: "Milo Bot",
    image: ottoBotImg,
    desc: "Start your robotics journey with the basics of electronics and simple robot building.",
    topics: [
      "Basics of robotics and components",
      "Simple electronics and circuits",
      "Basic robot movement",
      "Build a simple Milo bot",
    ],
  },
  {
    grade: "Grade 7",
    title: "Geary Tech",
    image: lineFollowerImg,
    desc: "Dive deeper into electronics, programming, and sensor-based projects.",
    topics: [
      "Electronics and circuits",
      "Arduino programming",
      "Motor control",
      "Sensors (IR, Ultrasonic)",
      "Build a Geary Tech Bot",
    ],
  },
  {
    grade: "Grade 8",
    title: "Neo Bot",
    image: rcBotImg,
    desc: "Build smart, autonomous robots with advanced sensors and wireless control.",
    topics: [
      "Advanced sensors",
      "Autonomous",
      "Bluetooth control",
      "Smart robots",
      "Multi-function Bot",
    ],
  },
  {
    grade: "Grade 9",
    title: "Grab-It",
    image: pickPlaceImg,
    desc: "Design and prototype humanoid robotic components with servo-based systems.",
    topics: [
      "Servo hand mechanics",
      "Servo motors",
      "Mechanical design",
      "Robotic arm movement",
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
              {/* Image block */}
              <div className="flex-shrink-0 w-full lg:w-72 flex justify-center">
                <div className="w-56 h-56 rounded-2xl overflow-hidden elevated-shadow">
                  <img src={g.image} alt={g.title} className="w-full h-full object-cover" loading="lazy" width={640} height={640} />
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
