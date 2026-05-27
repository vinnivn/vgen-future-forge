// Brochure registry. PDFs are placed in /public/brochures/ and referenced by absolute path.
// Workshop brochures are intentionally NOT displayed yet — structure is ready for future uploads.

export interface Brochure {
  id: string;
  title: string;
  description: string;
  file: string; // public path
  available: boolean; // false = "Coming Soon"
}

// Toggle `available` to true once each PDF has been uploaded to /public/brochures/
export const overallBrochure: Brochure = {
  id: "vgen-overall",
  title: "VGEN Overall Brochure",
  description: "Complete VGEN program overview, vision, curriculum framework, and offerings.",
  file: "/brochures/vgen-overall.pdf",
  available: false,
};

export const programBrochures: Record<string, Brochure> = {
  "Grade 5": {
    id: "grade-5",
    title: "Grade 5 Program Brochure",
    description: "Detailed curriculum, learning outcomes, fee structure, and program overview.",
    file: "/brochures/grade-5.pdf",
    available: false,
  },
  "Grade 6": {
    id: "grade-6",
    title: "Grade 6 Program Brochure",
    description: "Detailed curriculum, learning outcomes, fee structure, and program overview.",
    file: "/brochures/grade-6.pdf",
    available: false,
  },
  "Grade 7": {
    id: "grade-7",
    title: "Grade 7 Program Brochure",
    description: "Detailed curriculum, learning outcomes, fee structure, and program overview.",
    file: "/brochures/grade-7.pdf",
    available: false,
  },
  "Grade 8": {
    id: "grade-8",
    title: "Grade 8 Program Brochure",
    description: "Detailed curriculum, learning outcomes, fee structure, and program overview.",
    file: "/brochures/grade-8.pdf",
    available: false,
  },
  "Grade 9": {
    id: "grade-9",
    title: "Grade 9 Program Brochure",
    description: "Detailed curriculum, learning outcomes, fee structure, and program overview.",
    file: "/brochures/grade-9.pdf",
    available: false,
  },
};

// Reserved for future use — do NOT render these yet.
export const workshopBrochures: Record<string, Brochure> = {};

export const getProgramBrochure = (grade: string): Brochure | undefined =>
  programBrochures[grade];
