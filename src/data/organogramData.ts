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
    role: "Co-Founder & CEO",
    department: "Executive",
    description: "Strategic leader driving Workforce Global's mission of transforming ideas into impactful solutions.",
    photo: "/Meki.png",
    email: "connect@workforceglobal.com",
    responsibilities: [
      "Company vision & strategy",
      "Innovation programmes",
      "Partnerships & growth",
      "Stakeholder relations",
    ],
    managerId: null,
    color: "#C6A15B",
  },
  {
    id: "mohammed",
    name: "Mohammed",
    role: "Co-Founder & CTO",
    department: "Engineering",
    description: "Visionary engineer and architect of Workforce Global's technical strategy and scalable systems.",
    photo: "/Mohammed.png",
    email: "connect@workforceglobal.com",
    responsibilities: [
      "Technical architecture & roadmap",
      "Engineering leadership",
      "Product strategy",
      "R&D initiatives",
    ],
    managerId: "meki",
    color: "#D4B57A",
  },
  {
    id: "head-product",
    name: "Product Lead",
    role: "Head of Product",
    department: "Product",
    description: "Owns the product lifecycle from discovery to delivery, ensuring we ship value to every client.",
    email: "connect@workforceglobal.com",
    responsibilities: [
      "Product roadmap",
      "User research",
      "Feature prioritisation",
      "Stakeholder alignment",
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
    role: "Head of Business Development",
    department: "Business Development",
    description: "Drives commercial growth by building relationships and identifying new market opportunities.",
    email: "connect@workforceglobal.com",
    responsibilities: [
      "Client acquisition",
      "Proposals & pitches",
      "Partnership development",
      "Market analysis",
    ],
    managerId: "meki",
    color: "#9E7B3D",
  },
  {
    id: "head-innovation",
    name: "Innovation Lead",
    role: "Head of Innovation Programs",
    department: "Innovation",
    description: "Cultivates talent pipelines and runs hackathons, sprints, and incubation programmes.",
    email: "connect@workforceglobal.com",
    responsibilities: [
      "Hackathon organisation",
      "Student programmes",
      "Product sprints",
      "Startup incubation",
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
