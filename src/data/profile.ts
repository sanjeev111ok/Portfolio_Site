export const profile = {
  name: "Sanjeev Shrestha",
  title: "Full-Stack Software Developer",
  location: "Sindhuwa, Dhankuta, Nepal",
  phone: "+977-9848954691",
  email: "sthasanjeev200@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/sanjeev-shrestha-7378a9280",
    github: "https://github.com/sanjeev111ok",
  },
  summary:
    "Full-Stack Software Developer experienced in building web applications, cross-platform mobile apps, administrative dashboards, and multi-tenant platforms. Skilled in React, Next.js, React Native, Node.js, and Supabase, with experience in project management and client coordination.",
};

export const skills = {
  Languages: ["JavaScript", "TypeScript", "C", "C++"],
  Frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  Mobile: ["React Native", "Expo"],
  "Backend & Database": [
    "Node.js",
    "Express.js",
    "Supabase",
    "Prisma ORM",
    "REST APIs",
  ],
  Tools: ["Docker", "Redux Toolkit", "Git", "GitHub", "Postman"],
  Other: [
    "Multi-Tenant Systems",
    "Authentication & Authorization",
    "Deployment & Release Management",
  ],
};

export const experience = [
  {
    company: "Fifteen Roots Pvt. Ltd.",
    url: "https://fifteenroots.com",
    location: "Nepal",
    period: "Bhadra 10, 2083 – Present",
    logo: "/fifteenroots.png",
    roles: [
      {
        title: "Founder & CEO",
        period: "Bhadra 10, 2083 – Present",
        bullets: [
          "Lead software development projects and proprietary product initiatives.",
          "Contribute to full-stack development across client projects and in-house products.",
        ],
      },
    ],
  },
  {
    company: "Digital Pathshala Pvt. Ltd.",
    url: "https://digitalpathshalanepal.com",
    location: "Nepal",
    period: "Bhadra 11, 2082 – Baisakh 31, 2083",
    logo: "/digitalpathshala.jpg",
    roles: [
      {
        title: "Project Manager",
        period: "Poush 20, 2082 – Baisakh 31, 2083",
        bullets: [
          "Managed client communication, requirements gathering, task coordination, and project tracking.",
          "Coordinated delivery between clients and technical teams.",
        ],
      },
      {
        title: "Mobile App Developer",
        period: "Bhadra 11, 2082 – Poush 20, 2082",
        bullets: [
          "Developed cross-platform mobile applications using React Native and Expo.",
          "Contributed to web, backend, and mobile development across multiple projects.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: "SahaKosh",
    tagline: "Cooperative Management Platform",
    description:
      "A Nepal-based cooperative management system by Axile Solutions. SahaKosh helps cooperatives run day-to-day operations—member records, savings and loans, reporting, and administration—through web dashboards, a member mobile app, and a public marketing site.",
    logo: "/sahakosh.svg",
    url: "https://sahakosh.com",
    company: "Axile Solutions",
    region: "Nepal",
    tech: ["React Native", "Next.js", "Node.js", "Supabase"],
  },
  {
    name: "AgEra",
    tagline: "Farm & Agriculture Management",
    description:
      "An Australia-based farm management system founded by Axile Solutions. AgEra connects farm operators, field workers, and researchers with tools for operational planning, field activity tracking, research workflows, and map-based insights across web and mobile.",
    logo: "/agera.svg",
    url: "https://agera.farm",
    company: "Axile Solutions",
    region: "Australia",
    tech: [
      "React.js",
      "Next.js",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Redux Toolkit",
      "Google Maps",
    ],
  },
  {
    name: "GadiGhoda GPS",
    tagline: "Vehicle Tracking System",
    description:
      "A vehicle tracking platform built for Nepal. GadiGhoda GPS provides real-time fleet visibility, route and location monitoring, and operational control through an admin dashboard, client portal, and dedicated apps for clients and drivers.",
    logo: "/gadighoda.avif",
    url: "https://gadighodagps.com",
    company: "GadiGhoda GPS",
    region: "Nepal",
    tech: [
      "React.js",
      "Next.js",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Redux Toolkit",
      "Google Maps",
    ],
  },
  {
    name: "StudyNP",
    tagline: "Educational Resources Platform",
    description:
      "An education platform by Fifteen Roots that centralizes study materials, syllabi, and practice resources for programs such as BIT, BSc CSIT, and BTech—helping students access structured academic content through a web experience and admin tools for content management.",
    logo: "/studynp.png",
    url: "https://fifteenroots.com",
    company: "Fifteen Roots",
    region: "Nepal",
    tech: ["React", "Node.js", "Docker"],
  },
  {
    name: "Sanskar Numerology",
    tagline: "Numerology Mobile App",
    description:
      "A mobile numerology app by Sanskar Academy for exploring Pythagorean, Chaldean, Mulank, and Bhagyank number systems—helping users generate and understand personal number profiles on Android.",
    logo: null,
    url: "https://play.google.com/store/search?q=sanskar+numerology&c=apps&hl=en",
    company: "Sanskar Academy",
    region: "Mobile · Android",
    tech: ["React Native", "Expo"],
  },
  {
    name: "Sanskar Vastu Compass",
    tagline: "Vastu Compass Mobile App",
    description:
      "A digital Vastu compass app by Sanskar Academy with maps, photo tools, dials, and guided Vastu workflows—designed as a practical field companion for direction and spatial alignment on Android.",
    logo: null,
    url: "https://play.google.com/store/search?q=sanskar+vastu+compass&c=apps&hl=en",
    company: "Sanskar Academy",
    region: "Mobile · Android",
    tech: ["React Native", "Expo"],
  },
];

export const leadership = [
  {
    role: "President",
    org: "Information Technology Alliance (ITA)",
    detail: "Central Campus of Technology, Dharan",
    period: "February 2025 – January 2026",
    bullets: [
      "Organized and participated in programs supporting the BIT student community.",
    ],
  },
  {
    role: "Operations Lead",
    org: "Code for Change",
    detail: "",
    period: "January 2025 – November 2025",
    bullets: [],
  },
];

export const education = {
  degree: "Bachelor of Information Technology (BIT)",
  school: "Central Campus of Technology, Dharan, Nepal",
  period: "2022–2026",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];
