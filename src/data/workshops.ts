import {
  Bot, BrainCircuit, Cpu, Code2, Globe, ShieldCheck, Lightbulb, Rocket, Sprout, Sparkles,
  type LucideIcon,
} from "lucide-react";

export type WorkshopCategory =
  | "Robotics"
  | "Artificial Intelligence"
  | "IoT & Embedded Systems"
  | "Software & Development"
  | "Innovation & Entrepreneurship"
  | "Cyber & Digital Skills"
  | "Future Technologies"
  | "College Bootcamps";

export interface Workshop {
  id: string;
  title: string;
  category: WorkshopCategory;
  duration: string;
  audience: string;
  description: string;
  topics: string[];
  outcomes: string[];
  activities: string[];
  icon: LucideIcon;
}

export const workshopCategories: WorkshopCategory[] = [
  "Robotics",
  "Artificial Intelligence",
  "IoT & Embedded Systems",
  "Software & Development",
  "Innovation & Entrepreneurship",
  "Cyber & Digital Skills",
  "Future Technologies",
  "College Bootcamps",
];

export const workshops: Workshop[] = [
  {
    id: "robotics-innovation",
    title: "Robotics & Innovation Workshop",
    category: "Robotics",
    duration: "1–3 Days",
    audience: "Students, Beginners, Schools, Colleges",
    description:
      "Hands-on robotics workshop covering robot building, electronics, motors, sensors, obstacle avoidance, line follower bots, RC robots, robo soccer, and real-world robotics applications.",
    topics: [
      "Robot components",
      "Motors & sensors",
      "Basic electronics",
      "Arduino basics",
      "Obstacle avoidance",
      "Line follower robots",
      "Robo soccer",
      "Mini robotics projects",
    ],
    outcomes: [
      "Understand robotics fundamentals",
      "Build working robots",
      "Improve engineering thinking",
    ],
    activities: [
      "Assemble a working robot from scratch",
      "Program movement and obstacle avoidance",
      "Compete in mini robo challenges",
    ],
    icon: Bot,
  },
  {
    id: "ai-future-tech",
    title: "AI & Future Technology Workshop",
    category: "Artificial Intelligence",
    duration: "1–2 Days",
    audience: "Students, College Students, Professionals",
    description:
      "Explore artificial intelligence, generative AI, automation, prompt engineering, and future technologies shaping the world.",
    topics: [
      "AI basics",
      "Generative AI",
      "ChatGPT & AI tools",
      "Prompt engineering",
      "Automation",
      "Ethical AI",
      "AI careers",
    ],
    outcomes: [
      "Understand modern AI",
      "Learn practical AI tools",
      "Build productivity skills",
    ],
    activities: [
      "Hands-on with leading AI tools",
      "Build a prompt engineering playbook",
      "Create an AI-powered productivity workflow",
    ],
    icon: BrainCircuit,
  },
  {
    id: "iot-smart-systems",
    title: "IoT & Smart Systems Workshop",
    category: "IoT & Embedded Systems",
    duration: "2–3 Days",
    audience: "Schools, Colleges, Engineering Students",
    description:
      "Build smart connected systems using sensors, microcontrollers, and automation technologies.",
    topics: [
      "IoT basics",
      "Arduino & ESP32",
      "Sensors",
      "Automation systems",
      "Smart home concepts",
      "Smart agriculture applications",
    ],
    outcomes: [
      "Build IoT systems",
      "Understand automation",
      "Learn sensor integration",
    ],
    activities: [
      "Wire up sensors with ESP32",
      "Build a smart home mini-project",
      "Connect devices to the cloud",
    ],
    icon: Cpu,
  },
  {
    id: "beginner-coding-games",
    title: "Beginner Coding & Game Development Workshop",
    category: "Software & Development",
    duration: "1–2 Days",
    audience: "Beginners, Students",
    description:
      "Learn coding fundamentals through creative logic-building and beginner-friendly game development.",
    topics: ["Logic building", "Scratch/Blockly", "Python basics", "Interactive games", "Problem solving"],
    outcomes: ["Improve coding logic", "Build mini projects", "Learn programming basics"],
    activities: [
      "Build a Scratch-based game",
      "Write your first Python program",
      "Design a logic puzzle",
    ],
    icon: Code2,
  },
  {
    id: "web-development",
    title: "Web Development & Deployment Workshop",
    category: "Software & Development",
    duration: "2–3 Days",
    audience: "College Students, Beginners",
    description: "Learn how to create modern websites and deploy them to production.",
    topics: ["HTML, CSS, JavaScript", "React basics", "UI design", "GitHub", "Deployment with Vercel"],
    outcomes: ["Build websites", "Deploy live projects", "Understand frontend workflows"],
    activities: [
      "Build a responsive landing page",
      "Push code to GitHub",
      "Deploy a live site on Vercel",
    ],
    icon: Globe,
  },
  {
    id: "cyber-safety",
    title: "Cyber Safety & Digital Awareness Workshop",
    category: "Cyber & Digital Skills",
    duration: "1 Day",
    audience: "Students, Parents, Institutions",
    description: "Learn safe and responsible digital practices.",
    topics: [
      "Cyber security basics",
      "Scam awareness",
      "Password protection",
      "Responsible AI use",
      "Digital citizenship",
    ],
    outcomes: ["Improve cyber awareness", "Stay safe online"],
    activities: [
      "Spot phishing and scam attempts",
      "Set up strong passwords & 2FA",
      "Audit your digital footprint",
    ],
    icon: ShieldCheck,
  },
  {
    id: "innovation-design-thinking",
    title: "Innovation & Design Thinking Workshop",
    category: "Innovation & Entrepreneurship",
    duration: "1 Day",
    audience: "Students, Colleges, Institutions",
    description: "Learn structured problem-solving, creativity, innovation, and product thinking.",
    topics: [
      "Problem identification",
      "Creative thinking",
      "Design thinking",
      "Innovation methods",
      "Prototype mindset",
    ],
    outcomes: ["Better creativity", "Problem-solving skills", "Innovation mindset"],
    activities: [
      "Run a design thinking sprint",
      "Build a rapid paper prototype",
      "Pitch an innovation idea",
    ],
    icon: Lightbulb,
  },
  {
    id: "startup-bootcamp",
    title: "Startup & Entrepreneurship Bootcamp",
    category: "College Bootcamps",
    duration: "1–2 Days",
    audience: "College Students, Young Innovators",
    description: "Understand startup thinking, innovation, and technology entrepreneurship.",
    topics: [
      "Startup basics",
      "Business models",
      "Product thinking",
      "Pitching ideas",
      "Technology entrepreneurship",
    ],
    outcomes: ["Entrepreneurial mindset", "Innovation exposure"],
    activities: [
      "Design a startup business model canvas",
      "Build a 3-minute pitch",
      "Validate an idea with users",
    ],
    icon: Rocket,
  },
  {
    id: "smart-agriculture",
    title: "Smart Agriculture & Rural Innovation Workshop",
    category: "IoT & Embedded Systems",
    duration: "1–2 Days",
    audience: "Colleges, Institutions, Rural Communities",
    description: "Technology-driven innovation for agriculture and rural development.",
    topics: ["Smart irrigation", "IoT in agriculture", "Automation", "Sensors", "Rural innovation"],
    outcomes: ["Understand agri-tech", "Real-world innovation exposure"],
    activities: [
      "Build a smart irrigation prototype",
      "Use soil & moisture sensors",
      "Design a rural innovation concept",
    ],
    icon: Sprout,
  },
  {
    id: "emerging-tech-bootcamp",
    title: "Emerging Technology Bootcamp",
    category: "Future Technologies",
    duration: "2–3 Days",
    audience: "Everyone",
    description: "Explore the latest technologies transforming the future.",
    topics: ["AI", "Robotics", "IoT", "Automation", "Digital tools", "Smart systems"],
    outcomes: ["Future technology exposure", "Career awareness"],
    activities: [
      "Hands-on demos across AI, IoT & robotics",
      "Build a mini cross-tech project",
      "Explore future career pathways",
    ],
    icon: Sparkles,
  },
];
