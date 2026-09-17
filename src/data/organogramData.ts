export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  description: string;
  photo?: string;
  email?: string;
  phone?: string;
  responsibilities?: string[];
  managerId?: string | null; // null = root (CEO)
  color?: string;
}

export const employees: Employee[] = [
  {
    id: "meki",
    name: "Meki",
    role: "Community Director",
    department: "Community Leadership",
    description: "Strategic leader driving Workforce Global's mission of making practical learning and meaningful participation more accessible.",
    photo: "/Meki.png",
    email: "connect@workforceglobal.com",
    responsibilities: [
      "Community vision & strategy",
      "Innovation programmes",
      "Learning partnerships",
      "Community relationships",
    ],
    managerId: null,
    color: "#C6A15B",
  },
  {
    id: "mohammed",
    name: "Mohammed",
    role: "Technology Director",
    department: "Technology & Learning",
    description: "Engineer and architect shaping the tools, technical practice, and learning experiences that support the community.",
    photo: "/Mohammed.png",
    email: "connect@workforceglobal.com",
    responsibilities: [
      "Learning platform architecture",
      "Technical mentorship",
      "Practice pathways",
      "Experiments and tools",
    ],
    managerId: "meki",
    color: "#D4B57A",
  },
  {
    id: "head-product",
    name: "Product Lead",
    role: "Head of Learning Experiences",
    department: "Learning Experiences",
    description: "Shapes practical learning journeys from discovery to reflection, helping participants gain useful experience.",
    email: "connect@workforceglobal.com",
    responsibilities: [
      "Opportunity roadmap",
      "User research",
      "Experience design",
      "Participant alignment",
    ],
    managerId: "mohammed",
    color: "#9E7B3D",
  },
  {
    id: "head-engineering",
    name: "Engineering Lead",
    role: "Head of Engineering",
    department: "Engineering",
    description: "Leads our engineering squads to deliver high-quality, scalable software solutions.",
    email: "connect@workforceglobal.com",
    responsibilities: [
      "Squad management",
      "Code quality & standards",
      "DevOps & infrastructure",
      "Technical hiring",
    ],
    managerId: "mohammed",
    color: "#9E7B3D",
  },
  {
    id: "head-design",
    name: "Design Lead",
    role: "Head of Design",
    department: "Design",
    description: "Crafts beautiful, accessible digital experiences that connect users with products meaningfully.",
    email: "connect@workforceglobal.com",
    responsibilities: [
      "UX/UI design systems",
      "Brand & identity",
      "Prototyping & research",
      "Design operations",
    ],
    managerId: "meki",
    color: "#9E7B3D",
  },
  {
    id: "head-biz",
    name: "Business Dev Lead",
    role: "Head of Partnerships",
    department: "Partnerships",
    description: "Builds relationships with people and organisations that bring meaningful challenges, guidance, and opportunities to the community.",
    email: "connect@workforceglobal.com",
    responsibilities: [
      "Partner relationships",
      "Opportunity briefs",
      "Community partnerships",
      "Needs discovery",
    ],
    managerId: "meki",
    color: "#9E7B3D",
  },
  {
    id: "head-innovation",
    name: "Innovation Lead",
    role: "Head of Opportunity Programs",
    department: "Opportunity Programs",
    description: "Creates and facilitates challenges, learning sprints, mentorship, and community experiences.",
    email: "connect@workforceglobal.com",
    responsibilities: [
      "Hackathon organisation",
      "Student programmes",
      "Learning sprints",
      "Mentored practice",
    ],
    managerId: "meki",
    color: "#9E7B3D",
  },
  {
    id: "frontend-dev",
    name: "Frontend Engineer",
    role: "Senior Frontend Developer",
    department: "Engineering",
    description: "Builds performant, accessible interfaces using React, TypeScript, and modern web standards.",
    email: "connect@workforceglobal.com",
    responsibilities: [
      "React / Next.js development",
      "UI performance optimisation",
      "Accessibility (WCAG)",
      "Component library maintenance",
    ],
    managerId: "head-engineering",
    color: "#A8A8A8",
  },
  {
    id: "backend-dev",
    name: "Backend Engineer",
    role: "Senior Backend Developer",
    department: "Engineering",
    description: "Designs and maintains scalable APIs, microservices, and data pipelines powering our products.",
    email: "connect@workforceglobal.com",
    responsibilities: [
      "Node.js / Python services",
      "Database design",
      "API architecture",
      "CI/CD pipelines",
    ],
    managerId: "head-engineering",
    color: "#A8A8A8",
  },
];

/** Builds a map of id → children for the graph renderer */
export function buildTree(data: Employee[]): Map<string | null, Employee[]> {
  const tree = new Map<string | null, Employee[]>();
  data.forEach((emp) => {
    const key = emp.managerId ?? null;
    if (!tree.has(key)) tree.set(key, []);
    tree.get(key)!.push(emp);
  });
  return tree;
}
