export const projects = [
  {
    id: 1,
    slug: "solvex",
    title: "SolveX",
    category: "Fullstack",
    type: "MERN Platform",
    status: "In Progress",
    featured: true,

    shortDescription:
      "A student doubt-solving platform that connects students with verified mentors in real time.",

    description:
      "SolveX is a MERN-based doubt resolution platform where students can submit questions, mentors receive real-time notifications based on skill category, and students can choose a mentor based on price, time, and availability.",

    problem:
      "Many students do not get proper guidance, especially when they live far from schools or colleges. YouTube solutions are often long, outdated, or not personalized.",

    solution:
      "SolveX provides a real-time mentor matching system where students can ask doubts, receive mentor offers, select a mentor, chat, schedule a session, and continue learning with proper guidance.",

    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Socket.IO",
      "JWT",
      "Redux Toolkit",
      "Docker",
      "AWS EKS",
    ],

    features: [
      "Student doubt submission",
      "Skill-based mentor matching",
      "Real-time mentor notification using Socket.IO",
      "Mentor price and time offer system",
      "Student selects mentor based on offer",
      "Chat room creation between student and mentor",
      "JWT authentication with access and refresh tokens",
      "Role-based dashboard for student, mentor, and admin",
      "Docker-based deployment",
      "Static Express deployment with proxy-based frontend API handling",
    ],

    interviewConcepts: [
      "Authentication flow",
      "Role-based access control",
      "Socket.IO real-time communication",
      "MongoDB aggregation",
      "Redux Toolkit state management",
      "REST API design",
      "Deployment with Docker and AWS EKS",
    ],

    image: "https://drive.google.com/file/d/1gtKV72VOeD-z7AKFWTF_fWqlaZFsrWXe/view?usp=drive_link",
    github: "https://github.com/vishu9334/Solve-X",
    live: "https://www.solve2x.com",
  },

  {
    id: 2,
    slug: "mentor-assessment-system",
    title: "Mentor Assessment System",
    category: "Fullstack",
    type: "Verification System",
    status: "In Progress",
    featured: true,

    shortDescription:
      "A mentor verification system with MCQ assessment, proctoring rules, and AI-based result analysis.",

    description:
      "This system verifies mentors before allowing them to teach students. Mentors attend a category-based MCQ assessment, and their performance is analyzed to decide whether they should be verified or rejected.",

    problem:
      "A mentor platform needs verified mentors so students can trust the quality of guidance.",

    solution:
      "The system uses assessment attempts, category-based questions, warning rules, tab switch detection, result analysis, and email notifications to verify mentors.",

    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Redis",
      "Email Service",
      "AI Result Analysis",
    ],

    features: [
      "Mentor registration verification",
      "Category-based MCQ assessment",
      "Three attempt limit",
      "48-hour assessment window",
      "Tab switch and focus loss warning system",
      "Automatic rejection after cheating warnings",
      "AI-based pass/fail analysis",
      "Pass and fail email notification",
      "Mentor verified status update",
    ],

    interviewConcepts: [
      "Assessment workflow design",
      "Proctoring logic",
      "Attempt tracking",
      "Backend validation",
      "MongoDB schema design",
      "Email notification flow",
      "Role-based verification",
    ],

    image: "/images/projects/mentor-assessment.png",
    github: "https://github.com/your-username/mentor-assessment-system",
    live: "",
  },

  {
    id: 3,
    slug: "auth-system",
    title: "Authentication System",
    category: "Backend",
    type: "Auth Module",
    status: "Completed",
    featured: true,

    shortDescription:
      "A secure authentication system with OTP verification, JWT access token, refresh token, and protected routes.",

    description:
      "This authentication module handles user registration, OTP verification, login, refresh token regeneration, logout, and protected route access using access and refresh token strategy.",

    problem:
      "A production-level application needs secure login, registration, token regeneration, and session handling.",

    solution:
      "The system uses short-lived access tokens, HTTP-only refresh token cookies, OTP verification, and protected API middleware for secure user authentication.",

    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Bcrypt",
      "Redis",
      "Nodemailer",
      "Cookies",
    ],

    features: [
      "User registration",
      "OTP email verification",
      "Password hashing using bcrypt",
      "Login with JWT token",
      "Access token and refresh token flow",
      "HTTP-only refresh token cookie",
      "Regenerate access token API",
      "Logout and token clearing",
      "Protected route middleware",
      "Role-based navigation support",
    ],

    interviewConcepts: [
      "JWT authentication",
      "Refresh token flow",
      "HTTP-only cookies",
      "Password hashing",
      "OTP verification",
      "Middleware design",
      "Error handling",
    ],

    image: "/images/projects/auth-system.png",
    github: "https://github.com/your-username/auth-system",
    live: "",
  },

  {
    id: 4,
    slug: "admin-dashboard",
    title: "Admin Dashboard",
    category: "Frontend",
    type: "Dashboard UI",
    status: "Completed",
    featured: false,

    shortDescription:
      "A responsive admin dashboard for showing users, mentors, students, verification status, and platform stats.",

    description:
      "This dashboard displays platform-level statistics such as total users, total students, total mentors, verified users, unverified users, and role-based data visualization.",

    problem:
      "Admin needs a clean interface to understand platform activity and user distribution quickly.",

    solution:
      "The dashboard presents important statistics using reusable cards, responsive UI, clean layout, and structured data rendering.",

    techStack: [
      "React",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Query",
      "Axios",
      "Responsive UI",
    ],

    features: [
      "Total users stats",
      "Total students count",
      "Total mentors count",
      "Verified and unverified users",
      "Reusable stat cards",
      "Responsive layout",
      "Dark UI design",
      "API response handling",
      "Error loading state",
    ],

    interviewConcepts: [
      "Reusable components",
      "Conditional rendering",
      "API data handling",
      "Responsive design",
      "State management",
      "Component composition",
    ],

    image: "/images/projects/admin-dashboard.png",
    github: "https://github.com/your-username/admin-dashboard",
    live: "",
  },

  {
    id: 5,
    slug: "github-project-tracker",
    title: "GitHub Project Tracker",
    category: "Fullstack",
    type: "Developer Tool",
    status: "In Progress",
    featured: true,

    shortDescription:
      "A GitHub tracking tool that listens to repository activity and helps analyze project updates.",

    description:
      "GitHub Project Tracker stores repository metadata, listens to GitHub webhook events, tracks push activity, and helps analyze project updates. It is designed as a developer productivity and repository monitoring tool.",

    problem:
      "Developers need a better way to track repository activity, webhook events, and project changes in one place.",

    solution:
      "The system integrates GitHub App installation, webhook handling, repository metadata storage, and planned AI issue generation after user confirmation.",

    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Octokit",
      "GitHub Webhook",
      "Zod",
      "Docker",
      "Kubernetes",
    ],

    features: [
      "GitHub App integration",
      "Webhook event handling",
      "Repository metadata storage",
      "Push event tracking",
      "Installation event handling",
      "Redis queue support",
      "Zod validation",
      "Planned AI issue creation",
      "Kubernetes-based sandbox planning",
    ],

    interviewConcepts: [
      "Webhook handling",
      "GitHub App integration",
      "Queue-based architecture",
      "Event-driven backend",
      "API validation",
      "MongoDB data modeling",
      "Kubernetes deployment planning",
    ],

    image: "/images/projects/github-tracker.png",
    github: "https://github.com/your-username/github-project-tracker",
    live: "",
  },

  {
    id: 6,
    slug: "portfolio",
    title: "Animated Developer Portfolio",
    category: "Frontend",
    type: "Portfolio Website",
    status: "Planning",
    featured: false,

    shortDescription:
      "A modern React portfolio with Framer Motion, GSAP ScrollTrigger, Redux Toolkit, and performance optimization.",

    description:
      "This portfolio is designed to showcase frontend skills, animations, React architecture, performance optimization, project filtering, search, and clean component structure.",

    problem:
      "A simple static portfolio only shows design, but does not strongly demonstrate React architecture and interview-level concepts.",

    solution:
      "The portfolio includes project filtering, search with debouncing, scroll-based animation, reusable components, Redux Toolkit state, memoization, and optimized rendering.",

    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "ScrollTrigger",
      "Redux Toolkit",
      "React Router",
    ],

    features: [
      "Animated hero section",
      "Project search",
      "Project filter",
      "Project detail modal",
      "Dark and light theme",
      "Scroll progress indicator",
      "Active navbar section",
      "Debounced search",
      "Throttled scroll event",
      "Memoized project filtering",
      "Reusable project cards",
      "Lazy-loaded modal or project detail section",
    ],

    interviewConcepts: [
      "Debouncing",
      "Throttling",
      "useMemo",
      "useCallback",
      "React.memo",
      "Redux Toolkit",
      "Custom hooks",
      "Lazy loading",
      "GSAP cleanup",
      "Framer Motion animation",
    ],

    image: "/images/projects/portfolio.png",
    github: "https://github.com/your-username/portfolio",
    live: "",
  },
];

export const projectCategories = [
  "All",
  "Frontend",
  "Backend",
  "Fullstack",
];