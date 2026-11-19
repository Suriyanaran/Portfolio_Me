import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/main/Navbar";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.ezhaq.in"),
    title: "Suriya  | Founder, EZHA-Q Technologies | Full-Stack Developer",
    description:
        "Personal portfolio of Suriya — Founder of EZHA-Q Technologies, Full-Stack Developer specializing in secure messaging, post-quantum cryptography, AI tools, APIs, and web applications.",
    keywords: [
        "Suriya",
        "Suriya Narayanan",
        "EZHA-Q Technologies",
        "Full-Stack Developer",
        "Post-Quantum Cryptography",
        "PQ Messenger",
        "PQC Integration Lab",
        "Nanba AI",
        "FastAPI",
        "React",
        "AI Chatbots",
        "Secure Software",
    ],
    authors: [{ name: "Suriya Narayanan", url: "https://www.ezhaq.in/" }],
    openGraph: {
        title: "Suriya Narayanan | Founder, EZHA-Q Technologies | Full-Stack Developer",
        description:
            "Founder of EZHA-Q Technologies. Building secure, AI-powered, and automation-focused software products.",
        type: "website",
        images: ["/me.png"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="bg-[#030014] overflow-x-hidden min-h-screen max-w-[1855px] mx-auto font-sans text-white antialiased selection:bg-purple-600 selection:text-white">
                <Navbar />
                {children}
            </body>
        </html>
    );
}
