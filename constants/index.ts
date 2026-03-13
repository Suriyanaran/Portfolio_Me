// ============================================
// PORTFOLIO DATA - EASILY EDITABLE
// ============================================

// Hero Section Content
export const HERO_DATA = {
    badge1: "Engineering Visionary",
    badge2: "Quantum AI Enthusiast",
    badge3: "Cybersecurity Designer",
    mainTitle: "Building the Future with",
    highlight1: "Quantum",
    subtitle1: "and",
    highlight2: "Secure",
    subtitle2: "Technology",
    description: "Passionate engineer transforming quantum computing and post-quantum cryptography into real-world applications.",
};

// About Section Content
export const ABOUT_DATA = {
    name: "SURIYA NARAYANAN",
    title: "Engineer | Quantum AI Explorer | Creative Coder",
    profileImage: "/me.png",
    bio: [
        "From engineering fundamentals to quantum computing—my journey has been one of continuous innovation and exploration.",
        "I transitioned into software development with Python and React, discovering that code is the modern language of engineering.",
        "Beyond the terminal, I express myself through Tamil poetry, bridging the technical and the artistic.",
        "I'm fascinated by the intersection of cybersecurity and quantum computing, building solutions that are both secure and intelligent.",
    ]
};

// Categorized Skills
export const SKILLS_BY_CATEGORY = {
    languages: [
        { skill_name: "Python", Image: "/python.png", width: 75, height: 75 },
        { skill_name: "JavaScript", Image: "/js.png", width: 65, height: 65 },
        { skill_name: "TypeScript", Image: "/ts.png", width: 70, height: 70 },
        { skill_name: "HTML 5", Image: "/html.png", width: 70, height: 70 },
        { skill_name: "CSS", Image: "/css.png", width: 70, height: 70 },
    ],
    frameworks: [
        { skill_name: "React", Image: "/react.png", width: 75, height: 75 },
        { skill_name: "Tailwind CSS", Image: "/tailwind.png", width: 70, height: 70 },
        
    ],
    specialized: [
        { skill_name: "Quantum Computing", Image: "/quantum.png", width: 70, height: 70 },
        { skill_name: "Post-Quantum Cryptography", Image: "/postquantum.jpg", width: 75, height: 75 },
        { skill_name: "Cybersecurity", Image: "/security.png", width: 70, height: 70 },
    ],
};

// Projects Data - EDITABLE LINKS
export const PROJECTS_DATA = [
    {
        id: 1,
        title: "PQ Messenger",
        description: "Post-quantum secure messaging application. End-to-end encrypted communication using lattice-based cryptography for quantum resistance. It's Currently Prototype Level",
        image: "/pq-messenger.png",
        tags: ["Quantum", "Security", "React", "Post-Quantum Cryptography"],
        githubLink: "https://github.com/Suriyanaran/", // EDIT THIS
        liveLink: "https://pq-messenger.netlify.app/", // EDIT THIS
        featured: true,
    },
    {
        id: 2,
        title: "AiraQ Virtual Voice Assistant",
        description: "AiraQ is an upcoming project and it working as a Virtual Personal Assistant now in building process.",
        image: "/airaq.png",
        tags: ["Quantum", "Education", "React", "Visualization"],
        githubLink: "https://github.com/Suriyanaran/",
        liveLink: "https://quantum-viz.vercel.app",
    },
    
];

// Startup Data
export const STARTUP_DATA = {
    name: "NOVA-Q",
    tagline: "Quantum-Ready Security for the Future",
    description: "A Upcoming venture focused on transitioning cybersecurity infrastructure to quantum-resistant systems. Making post-quantum cryptography accessible and practical.",
    website: "https://nova-q.ai",
};

// Resume Download
export const RESUME_DATA = {
    fileName: "resume.pdf", // EDIT THIS - Change to your actual PDF file name
    downloadLink: "/resume.pdf", // Make sure to place your PDF in the /public folder
    ctaText: "Download My Resume",
};

// Skill_data - kept for backward compatibility
export const Skill_data = [
    {
        skill_name: "Html 5",
        Image: "/html.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Css",
        Image: "/css.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Java Script",
        Image: "/js.png",
        width: 65,
        height: 65,
    },
    {
        skill_name: "Tailwind Css",
        Image: "/tailwind.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "React",
        Image: "/react.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Redux",
        Image: "/redux.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "React Query",
        Image: "/reactquery.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Type Script",
        Image: "/ts.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Next js 13",
        Image: "/next.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Framer Motion",
        Image: "/framer.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Stripe Payment",
        Image: "/stripe.webp",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Node js",
        Image: "/node-js.png",
        width: 80,
        height: 80,
    },
    {
        skill_name: "Mongo db",
        Image: "/mongodb.png",
        width: 40,
        height: 40,
    },
];

export const Socials = [
    {
        name: "Email",
        src: "/mail.jpg",
        link: "mailto:suriyanarayananpalani@gmail.com",
    },
    {
        name: "Linkedin",
        src: "/linkedin.svg",
        link: "https://www.linkedin.com/in/suriya-narayanan-p-202907338/",
    },
    {
        name: "Github",
        src: "/github.svg",
        link: "https://github.com/Suriyanaran/",
    },
];

export const Frontend_skill = [
    {
        skill_name: "Html 5",
        Image: "/html.png",
        width: 50,
        height: 50,
    },
    {
        skill_name: "Css",
        Image: "/css.png",
        width: 60,
        height: 60,
    },
    {
        skill_name: "Java Script",
        Image: "/js.png",
        width: 50,
        height: 50,
    },
    {
        skill_name: "Tailwind Css",
        Image: "/tailwind.png",
        width: 60,
        height: 60,
    },
    {
        skill_name: "React",
        Image: "/react.png",
        width: 55,
        height: 55,
    },
    {
        skill_name: "Type Script",
        Image: "/ts.png",
        width: 50,
        height: 50,
    },
    {
        skill_name: "Next js 13",
        Image: "/next.png",
        width: 55,
        height: 55,
    },
];

export const Backend_skill = [
    {
        skill_name: "Django",
        Image: "/django.svg",
        width: 60,
        height: 60,
    },

    {
        skill_name: "Postger SQL",
        Image: "/postger.png",
        width: 50,
        height: 50,
    },
    {
        skill_name: "My SQL",
        Image: "/mysql.png",
        width: 45,
        height: 45,
    },
    {
        skill_name: "Supabase",
        Image: "/supabase.svg",
        width: 40,
        height: 40,
    },
    {
        skill_name: "Fire base",
        Image: "/Firebase.png",
        width: 35,
        height: 35,
    },
];

export const DevTools = [
    {
        skill_name: "GitHub",
        Image: "/gitwhite.png",
        width: 50,
        height: 50,
    },
    {
        skill_name: "Vercel",
        Image: "/vercel.svg",
        width: 50,
        height: 50,
    },
    {
        skill_name: "Figma",
        Image: "/figma.png",
        width: 40,
        height: 40,
    },
    {
        skill_name: "Railway",
        Image: "/railway.svg",
        width: 50,
        height: 50,
    },
    {
        skill_name: "VS Code",
        Image: "/vs.svg",
        width: 50,
        height: 50,
    },
    {
        skill_name: "ChatGPT",
        Image: "/chatgpt.svg",
        width: 50,
        height: 50,
    },
];

export const libraries = [
    {
        skill_name: "Framer Motion",
        Image: "/framer.png",
        width: 50,
        height: 50,
    },
    {
        skill_name: "React Icon",
        Image: "/icons.svg",
        width: 60,
        height: 60,
    },
    {
        skill_name: "JWT",
        Image: "/jwt.svg",
        width: 60,
        height: 60,
    },
    {
        skill_name: "ThreeJs",
        Image: "/threejs.png",
        width: 50,
        height: 50,
    },
];