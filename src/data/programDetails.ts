import rcSoccerImg from "@/assets/rc-soccer-bot.jpg";
import ottoBotImg from "@/assets/otto-bot.jpg";
import lineFollowerImg from "@/assets/line-follower-bot.jpg";
import rcBotImg from "@/assets/rc-bot.jpg";
import pickPlaceImg from "@/assets/pick-place-bot.jpg";
import type { ProgramDetail } from "@/components/ProgramModal";

export const programDetails: ProgramDetail[] = [
  {
    grade: "Grade 5",
    title: "Grade 5 – Robotics Foundations & AI Awareness",
    image: rcSoccerImg,
    shortDesc:
      "A beginner-friendly Future Skills program introducing students to robotics, basic AI concepts, creative thinking, and teamwork through hands-on activities like RC Bot building and Robo Soccer.",
    includes: [
      "Robotics Foundations",
      "AI Awareness",
      "Creative Thinking",
      "RC Bot building & control",
      "Team Activities & Robo Soccer",
    ],
    outcomes: [
      "Understand basic robotics and AI concepts",
      "Develop creativity and curiosity",
      "Improve teamwork and coordination",
      "Build confidence with future technologies",
    ],
    features: [
      "Weekly hands-on sessions",
      "Assignments and team activities",
      "Monthly expert sessions",
      "Final Robo Soccer challenge and certification",
    ],
  },
  {
    grade: "Grade 6",
    title: "Grade 6 – Electronics, Milo Bot & Innovation",
    image: ottoBotImg,
    shortDesc:
      "Students explore electronics, beginner robotics with Milo Bot, basic AI concepts, and innovation projects that build problem-solving skills from an early age.",
    includes: [
      "Electronics fundamentals",
      "Milo Bot building",
      "Basic AI concepts",
      "Innovation Projects",
      "Problem Solving activities",
    ],
    outcomes: [
      "Understand electronics and robotics basics",
      "Apply AI thinking to simple problems",
      "Develop innovation mindset",
      "Strengthen analytical and problem-solving skills",
    ],
    features: [
      "Weekly practical sessions",
      "Guided innovation activities",
      "Monthly innovation workshops",
      "Final project demonstration",
    ],
  },
  {
    grade: "Grade 7",
    title: "Grade 7 – Arduino, Generative AI & Entrepreneurship",
    image: lineFollowerImg,
    shortDesc:
      "A Future Skills program integrating Arduino, sensors, Generative AI, design thinking, and entrepreneurship basics through structured project-based learning.",
    includes: [
      "Arduino programming",
      "Sensors and automation",
      "Generative AI fundamentals",
      "Entrepreneurship Basics",
      "Design Thinking",
    ],
    outcomes: [
      "Build functional robotic and AI-driven projects",
      "Understand Generative AI and its applications",
      "Learn the basics of entrepreneurship and ideation",
      "Apply design thinking to real problems",
    ],
    features: [
      "Weekly expert-guided sessions",
      "Hands-on assignments and ideation activities",
      "Innovation and entrepreneurship workshops",
      "Mid-program and final demonstrations",
    ],
  },
  {
    grade: "Grade 8",
    title: "Grade 8 – IoT, Neo Bot, Agentic AI & Product Design",
    image: rcBotImg,
    shortDesc:
      "An intermediate program focused on IoT, smart robotics with Neo Bot, Agentic AI, product design, and startup thinking — preparing students to build intelligent, real-world solutions.",
    includes: [
      "Internet of Things (IoT)",
      "Neo Bot — smart robotics",
      "Agentic AI concepts",
      "Product Design",
      "Startup Thinking",
    ],
    outcomes: [
      "Build connected, intelligent systems",
      "Understand Agentic AI and automation",
      "Design products with real user needs in mind",
      "Develop startup and innovation mindset",
    ],
    features: [
      "Real-world IoT and AI projects",
      "Monthly advanced workshops",
      "Mentorship from technology experts",
      "Final smart product showcase",
    ],
  },
  {
    grade: "Grade 9",
    title: "Grade 9 – Automation, Community Innovation & Business Pitch",
    image: pickPlaceImg,
    shortDesc:
      "An advanced Future Skills program combining automation, robotic systems, AI applications, community innovation, prototype development, and business pitching.",
    includes: [
      "Automation",
      "Robotic Systems",
      "AI Applications",
      "Community Innovation",
      "Business Pitch & Prototype Development",
    ],
    outcomes: [
      "Build advanced automated and AI-driven systems",
      "Apply technology to solve real community problems",
      "Develop functional prototypes end-to-end",
      "Pitch ideas like a real entrepreneur",
    ],
    features: [
      "Advanced project guidance",
      "Prototype testing and iteration",
      "Community innovation challenges",
      "Final pitch, prototype showcase and certification",
    ],
  },
];
