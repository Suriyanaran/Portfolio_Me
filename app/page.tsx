import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Services from "@/components/main/Services";
import Projects from "@/components/main/Projects";
import StartupShowcase from "@/components/main/StartupShowcase";
import ResumeDownload from "@/components/main/ResumeDownload";
import Contact from "@/components/main/Contact";
import Footer from "@/components/main/Footer";

export default function Home() {
    return (
        <main className="h-full w-full relative">
            <div className="flex flex-col gap-12 sm:gap-20">
                <Hero />
                <About />
                <Skills />
                <Services />
                <Projects />
                <StartupShowcase />
                <ResumeDownload />
                <Contact />
                <Footer />
            </div>
        </main>
    );
}
