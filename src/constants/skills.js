const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const SIMPLE = "https://cdn.simpleicons.org";

export const skillsData = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Technologies I use to build responsive, modern, and interactive user interfaces.",
    skills: [
      { name: "HTML", logo: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS", logo: `${DEVICON}/css3/css3-original.svg` },
      { name: "JavaScript", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-plain.svg` },
      { name: "Sass", logo: `${DEVICON}/sass/sass-original.svg` },
      { name: "React.js", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Redux Toolkit", logo: `${DEVICON}/redux/redux-original.svg` },
      { name: "Zustand", logo: `${SIMPLE}/zustand` }, // verify: may not exist, fallback needed
      { name: "TanStack Query", logo: `${SIMPLE}/reactquery` },
    ],
  },

  {
    id: 2,
    title: "Backend Development",
    description:
      "Technologies I use to build APIs, authentication systems, and server-side business logic.",
    skills: [
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Express.js", logo: `${DEVICON}/express/express-original.svg` },
      { name: "REST API", logo: `${SIMPLE}/openapiinitiative` }, // closest available equivalent
      { name: "JWT", logo: `${SIMPLE}/jsonwebtokens` },
      { name: "Socket.IO", logo: `${DEVICON}/socketio/socketio-original.svg` },
    ],
  },

  {
    id: 3,
    title: "Database & Caching",
    description:
      "Database and caching technologies I use for data modeling, queries, aggregation, and performance.",
    skills: [
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "MongoDB Atlas", logo: `${DEVICON}/mongodb/mongodb-original.svg` }, // no separate Atlas mark
      { name: "Mongoose", logo: `${DEVICON}/mongoose/mongoose-original.svg` },
      { name: "MongoDB Aggregation Pipeline", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Redis", logo: `${DEVICON}/redis/redis-original.svg` },
    ],
  },

  {
    id: 4,
    title: "File Upload & Media Handling",
    description:
      "Tools I use for file upload, image storage, image optimization, and media management.",
    skills: [
      { name: "Multer", logo: `${SIMPLE}/npm` }, // Multer has no official logo, npm used as stand-in
      { name: "Cloudinary", logo: `${SIMPLE}/cloudinary` },
      { name: "ImageKit", logo: `${SIMPLE}/imagekit` }, // verify: may not exist
    ],
  },

  {
    id: 5,
    title: "DevOps & Cloud",
    description:
      "Cloud and deployment tools I have used for hosting, containerization, and CI/CD workflows.",
    skills: [
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
      { name: "Kubernetes", logo: `${DEVICON}/kubernetes/kubernetes-plain.svg` },
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "AWS EKS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "AWS S3 Bucket", logo: `${SIMPLE}/amazons3` },
      { name: "AWS Route 53", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "GitHub Actions", logo: `${SIMPLE}/githubactions` },
      { name: "GitHub CI/CD Pipeline", logo: `${SIMPLE}/githubactions` },
    ],
  },

  {
    id: 6,
    title: "Developer Tools",
    description:
      "Tools I use for development workflow, version control, API testing, and code management.",
    skills: [
      { name: "Git", logo: `${DEVICON}/git/git-original.svg` },
      { name: "GitHub", logo: `${DEVICON}/github/github-original.svg` },
      { name: "Postman", logo: `${DEVICON}/postman/postman-original.svg` },
      { name: "VS Code", logo: `${DEVICON}/vscode/vscode-original.svg` },
    ],
  },

  {
    id: 7,
    title: "AI & Advanced Concepts",
    description:
      "Advanced concepts I have explored for automation, analysis, and AI-based project workflows.",
    skills: [
      { name: "Generative AI", logo: `${SIMPLE}/openai` }, // closest available equivalent
    ],
  },
];

export const skillCategories = [
  "All",
  "Frontend Development",
  "Backend Development",
  "Database & Caching",
  "File Upload & Media Handling",
  "DevOps & Cloud",
  "Developer Tools",
  "AI & Advanced Concepts",
];