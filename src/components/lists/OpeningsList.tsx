export interface JobOpening {
  id: string;
  title: string;
  team: string;
  location: string;
  description: string;
  requirements?: string[];
  benefits?: string[];
}

export const CURRENT_OPENINGS: JobOpening[] = [
  {
    id: "backend-engineer-1",
    title: "Backend Engineer",
    team: "Engineering",
    location: "Remote",
    description: "Join our engineering team to build scalable backend systems and APIs. Work with modern technologies and contribute to high-impact projects that serve thousands of users.",
    requirements: [
      "3+ years of backend development experience",
      "Proficiency in Node.js, Python, or Java",
      "Experience with databases and cloud platforms",
      "Strong problem-solving skills"
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Professional development opportunities"
    ]
  },
  {
    id: "frontend-engineer-1",
    title: "Frontend Engineer",
    team: "Engineering",
    location: "Remote",
    description: "Create beautiful and intuitive user interfaces using modern frontend technologies. Collaborate with designers and backend engineers to deliver exceptional user experiences.",
    requirements: [
      "3+ years of frontend development experience",
      "Expertise in React, Vue, or Angular",
      "Strong CSS and JavaScript skills",
      "Experience with responsive design"
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Latest development tools and equipment"
    ]
  },
  {
    id: "fullstack-engineer-1",
    title: "Fullstack Engineer",
    team: "Engineering",
    location: "Remote",
    description: "Work across the entire technology stack, from frontend user interfaces to backend services. Take ownership of features from conception to deployment.",
    requirements: [
      "4+ years of fullstack development experience",
      "Proficiency in both frontend and backend technologies",
      "Experience with modern development practices",
      "Strong communication and collaboration skills"
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Opportunity to work on diverse projects"
    ]
  }
];

// Legacy export for backward compatibility
export const LEGACY_CURRENT_OPENINGS = [
  {
    heading: "Team",
    tabs: [
      {
        label: "Engineering",
      },
    ],
  },
  {
    heading: "Role",
    tabs: [
      {
        label: "Backend Engineer",
      },
      {
        label: "Frontend Engineer",
      },
      {
        label: "Fullstack Engineer",
      },
    ],
  },
  {
    heading: "Location",
    tabs: [
      {
        label: "Remote",
      },
      {
        label: "Remote",
      },
      {
        label: "Remote",
      },
    ],
  },
];
