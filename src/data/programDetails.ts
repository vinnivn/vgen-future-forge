import rcSoccerImg from "@/assets/rc-soccer-bot.jpg";
import ottoBotImg from "@/assets/otto-bot.jpg";
import lineFollowerImg from "@/assets/line-follower-bot.jpg";
import rcBotImg from "@/assets/rc-bot.jpg";
import pickPlaceImg from "@/assets/pick-place-bot.jpg";
import type { ProgramDetail } from "@/components/ProgramModal";

export const programDetails: ProgramDetail[] = [
  {
    grade: "Grade 5",
    title: "Grade 5 – RC Bot & Robo Soccer",
    image: rcSoccerImg,
    shortDesc:
      "A beginner-friendly robotics program designed to introduce students to electronics, robot movement, and remote-controlled robotics through engaging hands-on activities and Robo Soccer challenges.",
    includes: [
      "Introduction to robotics and robot components",
      "Basics of circuits and power systems",
      "DC motors and movement control",
      "Understanding wired and wireless control",
      "Building a simple RC Bot",
      "Robo Soccer activities and competitions",
    ],
    outcomes: [
      "Understand basic robotics concepts",
      "Learn motor-based robot movement",
      "Improve teamwork and coordination",
      "Develop creativity and logical thinking",
    ],
    features: [
      "Weekly hands-on sessions",
      "Assignments and activities",
      "Monthly expert sessions",
      "Final Robo Soccer challenge and certification",
    ],
  },
  {
    grade: "Grade 6",
    title: "Grade 6 – Beginner Robotics",
    image: ottoBotImg,
    shortDesc:
      "This program introduces students to robotics through simple electronics, robot movement, and practical robot-building activities using beginner-friendly concepts.",
    includes: [
      "Basics of robotics and components",
      "Simple electronics and circuits",
      "Servo and motor-based movement",
      "Building a simple robot",
      "Basic interaction and controls",
    ],
    outcomes: [
      "Understand electronics fundamentals",
      "Learn robot movement concepts",
      "Build confidence with technology",
      "Develop problem-solving skills",
    ],
    features: [
      "Weekly practical sessions",
      "Guided activities and assignments",
      "Monthly innovation workshops",
      "Final project demonstration",
    ],
  },
  {
    grade: "Grade 7",
    title: "Grade 7 – Foundations of Robotics",
    image: lineFollowerImg,
    shortDesc:
      "Students learn electronics, Arduino programming, motors, and sensors through structured project-based robotics learning.",
    includes: [
      "Electronics and circuit fundamentals",
      "Arduino programming basics",
      "Motor control and movement systems",
      "IR and ultrasonic sensors",
      "Building Geary Tech Bot",
    ],
    outcomes: [
      "Understand robotics systems",
      "Learn programming logic",
      "Work with sensors and automation",
      "Build functional robot projects",
    ],
    features: [
      "Weekly expert-guided sessions",
      "Assignments and practice activities",
      "Robotics event participation",
      "Mid-program and final demonstrations",
    ],
  },
  {
    grade: "Grade 8",
    title: "Grade 8 – Intermediate Robotics",
    image: rcBotImg,
    shortDesc:
      "An advanced robotics program focused on smart systems, autonomous robots, and wireless communication technologies.",
    includes: [
      "Advanced sensors and automation",
      "Autonomous robot behavior",
      "Bluetooth and wireless control",
      "Smart robotics systems",
      "Multi-function Neo Bot development",
    ],
    outcomes: [
      "Build intelligent robotic systems",
      "Understand automation concepts",
      "Learn wireless communication basics",
      "Develop innovation and analytical skills",
    ],
    features: [
      "Real-world robotics projects",
      "Monthly advanced workshops",
      "Expert mentorship",
      "Final smart robot showcase",
    ],
  },
  {
    grade: "Grade 9",
    title: "Grade 9 – Humanoid Robotics",
    image: pickPlaceImg,
    shortDesc:
      "This program introduces students to humanoid robotics through robotic hand mechanisms, servo systems, and mechanical prototyping.",
    includes: [
      "Servo hand mechanics",
      "Servo motors and control systems",
      "Mechanical structure design",
      "Robotic arm and wrist movement",
      "Prototype development",
    ],
    outcomes: [
      "Understand humanoid robotics concepts",
      "Learn mechanical and motion systems",
      "Build functional robotic prototypes",
      "Improve engineering and design thinking",
    ],
    features: [
      "Advanced project guidance",
      "Mechanical design exposure",
      "Prototype testing and development",
      "Final project presentation and certification",
    ],
  },
];
