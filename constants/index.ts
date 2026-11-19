// ============================================
// SURIYA - PORTFOLIO DATA (FOUNDER-FOCUSED)
// ============================================

// 1. HERO SECTION
export const HERO_DATA = {
    name: "Suriya",
    title: "Founder, EZHA-Q Technologies | Full-Stack Developer",
    badge1: "Founder @ EZHA-Q Technologies",
    badge2: "Full-Stack Developer",
    badge3: "Post-Quantum & AI Systems",
    mainGreeting: "Hi, I'm",
    nameHighlight: "Suriya",
    roleTitle: "Founder, EZHA-Q Technologies",
    roleSubtitle: "Full-Stack Developer",
    description:
        "I build secure, AI-powered, and automation-focused software products. Founder of EZHA-Q Technologies, working on secure messaging, post-quantum cryptography, AI tools, APIs, and web applications.",
    links: {
        projects: "#projects",
        ezhaq: "https://www.ezhaq.in/",
        github: "https://github.com/Suriyanaran/",
        linkedin: "https://www.linkedin.com/in/suriya-narayanan-p-202907338/",
        contact: "#contact",
        email: "mailto:suriyanarayananpalani@gmail.com",
    },
};

// 2. ABOUT SECTION
export const ABOUT_DATA = {
    name: "Suriya Narayanan",
    shortName: "Suriya",
    title: "Founder, EZHA-Q Technologies | Full-Stack Developer",
    profileImage: "/me.png",
    paragraphs: [
        "I am a full-stack developer and founder of EZHA-Q Technologies.",
        "I build web applications, APIs, AI-powered tools, secure messaging products, and automation solutions.",
        "My focus areas are secure software, post-quantum cryptography, AI assistants, developer tools, and practical business automation.",
        "I am open to software development opportunities, freelance projects, and collaborations.",
    ],
    highlights: [
        {
            title: "Founder Mindset",
            description:
                "Leading EZHA-Q Technologies to turn modern cryptographic research and AI automation into reliable software products.",
            icon: "Building2",
        },
        {
            title: "Secure Architecture",
            description:
                "Deep focus on post-quantum cryptography (ML-KEM), HKDF key derivation, authenticated encryption, and multi-factor authentication.",
            icon: "ShieldCheck",
        },
        {
            title: "AI & Automation",
            description:
                "Developing practical AI-powered assistants, custom LLM workflows, and automated communication tools that solve real operational bottlenecks.",
            icon: "Bot",
        },
        {
            title: "Collaboration Ready",
            description:
                "Actively partnering with founders, teams, and clients for full-stack engineering, custom APIs, and freelance development.",
            icon: "Handshake",
        },
    ],
};

// 3. SKILLS SECTION (Only skills Suriya can explain)
export interface SkillCategoryGroup {
    category: string;
    description: string;
    color: string;
    skills: Array<{
        name: string;
        tag?: string;
    }>;
}

export const VERIFIED_SKILLS: SkillCategoryGroup[] = [
    {
        category: "Frontend Development",
        description: "Responsive, performant, and user-centric interfaces",
        color: "from-blue-500 to-cyan-500",
        skills: [
            { name: "React", tag: "UI Architecture" },
            { name: "HTML5", tag: "Semantic Markup" },
            { name: "CSS3", tag: "Modern Styling" },
            { name: "JavaScript", tag: "ES6+ Modern JS" },
            { name: "Responsive Design", tag: "Mobile-First" },
        ],
    },
    {
        category: "Backend & APIs",
        description: "High-performance services, secure session flows, and real-time sockets",
        color: "from-purple-500 to-indigo-500",
        skills: [
            { name: "FastAPI", tag: "High-Speed Async Python" },
            { name: "Node.js", tag: "Scalable Event-Driven Services" },
            { name: "REST APIs", tag: "Clean Contract Design" },
            { name: "JWT Authentication", tag: "Stateless Auth Lifecycle" },
            { name: "Socket.IO", tag: "Real-Time Bidirectional" },
        ],
    },
    {
        category: "Security & Post-Quantum Cryptography",
        description: "Modern post-quantum primitives, authenticated encryption, and auth systems",
        color: "from-emerald-500 to-teal-500",
        skills: [
            { name: "Multi-Factor Authentication (MFA)", tag: "Defense in Depth" },
            { name: "Authentication Flows", tag: "OTP & Session Security" },
            { name: "Encryption Concepts", tag: "Symmetric & Asymmetric" },
            { name: "Post-Quantum Cryptography", tag: "Quantum-Resistant" },
            { name: "ML-KEM (Kyber)", tag: "Key Encapsulation" },
            { name: "HKDF", tag: "Session-Key Derivation" },
            { name: "AES-256-GCM", tag: "Authenticated Encryption" },
            { name: "ChaCha20-Poly1305", tag: "Constant-Time AEAD" },
        ],
    },
    {
        category: "AI & Product Workflows",
        description: "Practical AI integration, prompt design, and safe conversational agents",
        color: "from-amber-500 to-orange-500",
        skills: [
            { name: "AI Chat Integration", tag: "LLM API Connectors" },
            { name: "AI Product Workflows", tag: "Intelligent Triage & Guardrails" },
            { name: "Prompt Design", tag: "Structured Context & Safety" },
        ],
    },
    {
        category: "Deployment & Developer Tools",
        description: "Version control, automated pipelines, testing, and cloud hosting",
        color: "from-pink-500 to-rose-500",
        skills: [
            { name: "Git", tag: "Version Control" },
            { name: "GitHub", tag: "Collaboration & CI/CD" },
            { name: "Render", tag: "Backend Cloud Hosting" },
            { name: "Netlify", tag: "Jamstack & Static Hosting" },
            { name: "Vercel", tag: "Modern Edge Deployment" },
            { name: "Postman", tag: "API Testing & Documentation" },
        ],
    },
];

// 4. SERVICES / WHAT I BUILD SECTION
export interface ServiceItem {
    id: number;
    title: string;
    description: string;
    icon: string;
    bullets: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
    {
        id: 1,
        title: "Business Websites & Landing Pages",
        description:
            "Modern, high-converting, mobile-responsive web presences crafted for founders, companies, and product launches.",
        icon: "Globe",
        bullets: [
            "Fast load speeds & responsive layout",
            "Founder-focused branding & storytelling",
            "SEO-friendly and clean code",
        ],
    },
    {
        id: 2,
        title: "Web Applications & Dashboards",
        description:
            "Custom full-stack web applications with interactive dashboards, role-based controls, and seamless user experiences.",
        icon: "LayoutDashboard",
        bullets: [
            "React frontend with clean state management",
            "Real-time data visualization & tables",
            "Responsive layout across desktop & mobile",
        ],
    },
    {
        id: 3,
        title: "AI Chatbots & AI Assistants",
        description:
            "Intelligent conversational agents and workflow assistants with custom prompt design, guardrails, and API integration.",
        icon: "Bot",
        bullets: [
            "Custom LLM chat interfaces",
            "Context-aware response pipelines",
            "Safety boundaries & escalation workflows",
        ],
    },
    {
        id: 4,
        title: "WhatsApp Automation",
        description:
            "Automated communication channels, notification bots, and customer query systems that streamline daily operations.",
        icon: "MessageSquare",
        bullets: [
            "Automated user onboarding & updates",
            "Direct business inquiry handling",
            "Webhook & custom API integration",
        ],
    },
    {
        id: 5,
        title: "Custom APIs & Backend Development",
        description:
            "Scalable RESTful APIs and real-time backend services built with FastAPI or Node.js, designed for speed and reliability.",
        icon: "Server",
        bullets: [
            "FastAPI & Node.js microservices",
            "Real-time event streaming with Socket.IO",
            "Clear API documentation & testing",
        ],
    },
    {
        id: 6,
        title: "Secure Software & Authentication Systems",
        description:
            "Enterprise-grade security implementations including MFA, JWT authentication, encryption, and post-quantum readiness.",
        icon: "ShieldAlert",
        bullets: [
            "Multi-Factor Authentication (MFA) & OTP",
            "Post-Quantum Cryptography (ML-KEM)",
            "Data encryption & security event logging",
        ],
    },
];

// 5. FEATURED PROJECTS DATA
export interface ProjectItem {
    id: number;
    title: string;
    role: string;
    description: string;
    image: string;
    tags: string[];
    githubLink?: string;
    liveLink?: string;
    featured: boolean;
    features: string[];
    screenshotsInfo?: {
        label: string;
        tabs: Array<{
            name: string;
            description: string;
        }>;
    };
}

export const PROJECTS_DATA: ProjectItem[] = [
    {
        id: 1,
        title: "PQ Messenger — Secure Messaging Platform",
        role: "Founder & Developer",
        description:
            "A secure messaging platform designed with a post-quantum-security direction. Includes real-time messaging, secure file transfer, authentication with MFA, security event logging, risk scoring, and admin/device features.",
        image: "/pq-messenger.png",
        tags: [
            "React",
            "FastAPI / Node.js",
            "Socket.IO",
            "JWT Authentication",
            "MFA",
            "Encryption Concepts",
            "Deployment",
        ],
        githubLink: "https://github.com/Suriyanaran/",
        liveLink: "https://pq-messenger.netlify.app/",
        featured: true,
        features: [
            "Real-time instant messaging & delivery via Socket.IO",
            "Secure file transfer with integrity verification",
            "Multi-Factor Authentication (MFA) & secure JWT sessions",
            "Post-quantum security architecture direction",
            "Real-time security event logging & adaptive risk scoring",
            "Multi-device management and administrative controls",
        ],
        screenshotsInfo: {
            label: "Included Capabilities",
            tabs: [
                {
                    name: "Live Platform",
                    description: "Operational on Netlify with real-time web interface",
                },
                {
                    name: "End-to-End Security",
                    description: "MFA challenge, secure token lifecycle, and cryptographic hashing",
                },
                {
                    name: "Risk & Event Logging",
                    description: "Continuous audit trail for device logins and anomaly detection",
                },
            ],
        },
    },
    {
        id: 2,
        title: "PQC Integration & Testing Lab — Post-Quantum Cryptography Toolkit",
        role: "Founder & Developer",
        description:
            "A developer-focused Python and FastAPI toolkit to demonstrate, test, and benchmark post-quantum cryptography integration. Includes ML-KEM key establishment, HKDF session-key derivation, authenticated encryption using AES-256-GCM or ChaCha20-Poly1305, automated tests, technical documentation, and performance benchmarks.",
        image: "/projects/pqc-lab-preview.png",
        tags: [
            "Python",
            "FastAPI",
            "Cryptography Libraries",
            "ML-KEM (Kyber)",
            "HKDF",
            "AES-256-GCM",
            "ChaCha20-Poly1305",
            "Automated Testing",
            "Benchmarking",
        ],
        githubLink: "https://github.com/Suriyanaran/",
        featured: true,
        features: [
            "ML-KEM (FIPS 203 / Kyber) lattice-based key encapsulation & decapsulation",
            "HKDF-SHA256 session key derivation pipeline",
            "Authenticated encryption benchmarking: AES-256-GCM vs ChaCha20-Poly1305",
            "Automated test suite (pytest) with 100% cryptographic test coverage",
            "FastAPI interactive documentation and developer benchmarks dashboard",
            "Practical transition guides for quantum-resistant application security",
        ],
        screenshotsInfo: {
            label: "Toolkit Views & Artifacts",
            tabs: [
                {
                    name: "Dashboard & Metrics",
                    description: "Real-time key generation times, ciphertext sizes, and FastAPI health status",
                },
                {
                    name: "Algorithm Benchmark",
                    description: "Throughput & latency comparison across 10,000 cryptographic operations",
                },
                {
                    name: "Automated Tests",
                    description: "24/24 passing unit & integration tests validating cryptographic correctness",
                },
            ],
        },
    },
    {
        id: 3,
        title: "Nanba AI — AI Wellbeing Support Companion",
        role: "Founder & Developer",
        description:
            "An AI-assisted wellbeing and support companion with AI chat, OTP/JWT authentication, crisis resources, trusted contacts, grievance submission, and counselor-support workflow. It is designed as a support bridge, not a replacement for professional mental-health care.",
        image: "/projects/nanba-ai-preview.png",
        tags: [
            "React",
            "FastAPI / Node.js",
            "AI API Integration",
            "JWT Authentication",
            "OTP Verification",
            "Crisis Resources",
            "Responsive UI",
        ],
        githubLink: "https://github.com/Suriyanaran/",
        featured: true,
        features: [
            "Empathetic AI conversation agent with safety guardrails and active listening",
            "Secure onboarding with phone/email OTP verification & JWT sessions",
            "Integrated verified national crisis resources & emergency hotlines (14416)",
            "Designated trusted emergency contacts alert bridge",
            "Confidential grievance submission & human counselor support escalation queue",
            "Clear ethical boundary: Support bridge, not a replacement for professional clinical care",
        ],
        screenshotsInfo: {
            label: "Workflow Modules",
            tabs: [
                {
                    name: "AI Chat Interface",
                    description: "Calm, conversational support with grounded response suggestions",
                },
                {
                    name: "Crisis Resources",
                    description: "Instant access to verified hotlines (Tele-MANAS, Vandrevala Foundation)",
                },
                {
                    name: "Counselor Queue",
                    description: "Escalation protocol for human-in-the-loop counselor intervention",
                },
            ],
        },
    },
];

// 6. STARTUP VENTURE (EZHA-Q Technologies)
export const STARTUP_DATA = {
    name: "EZHA-Q Technologies",
    founder: "Suriya Narayanan",
    tagline: "Secure, Quantum-Resistant & AI-Powered Software Products",
    description:
        "EZHA-Q Technologies is a technology venture focused on building secure messaging platforms, post-quantum cryptography integration tools, practical AI assistants, custom APIs, and practical business automation solutions.",
    website: "https://www.ezhaq.in/",
    pillars: [
        {
            title: "Post-Quantum Cryptography",
            desc: "Implementing quantum-resistant key establishment (ML-KEM) and authenticated encryption.",
        },
        {
            title: "Secure Messaging",
            desc: "Developing next-generation communication tools with MFA, risk scoring, and zero-trust principles.",
        },
        {
            title: "AI & Business Automation",
            desc: "Delivering reliable conversational AI agents and automated operational workflows for modern businesses.",
        },
    ],
};

// 7. RESUME DATA
export const RESUME_DATA = {
    fileName: "Suriya_Resume.pdf",
    downloadLink: "/resume.pdf",
    ctaText: "Download My Resume",
};

// 8. CONTACT DATA
export const CONTACT_DATA = {
    name: "Suriya",
    fullName: "Suriya Palani",
    role: "Founder, EZHA-Q Technologies | Full-Stack Developer",
    email: "suriyanarayananpalani@gmail.com",
    phone: "+91 9940071512",
    companyWebsite: "https://www.ezhaq.in/",
    github: "https://github.com/Suriyanaran/",
    linkedin: "https://www.linkedin.com/in/suriya-narayanan-p-202907338/",
    whatsappLink: "https://wa.me/919940071512?text=Hi%20Suriya,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
    location: "Kavaraipettai, Tamil Nadu, India",
    availabilityNote:
        "Open to software development opportunities, freelance projects, and founder collaborations.",
};

// 9. SOCIAL LINKS FOR NAVBAR & FOOTER
export const Socials = [
    {
        name: "EZHA-Q",
        src: "/logo.png",
        link: "https://www.ezhaq.in/",
        label: "EZHA-Q Technologies",
    },
    {
        name: "Github",
        src: "/github.svg",
        link: "https://github.com/Suriyanaran/",
        label: "GitHub Profile",
    },
    {
        name: "Linkedin",
        src: "/linkedin.svg",
        link: "https://www.linkedin.com/in/suriya-narayanan-p-202907338/",
        label: "LinkedIn Profile",
    },
    {
        name: "Email",
        src: "/mail.jpg",
        link: "mailto:suriyanarayananpalani@gmail.com",
        label: "Email Suriya",
    },
];
