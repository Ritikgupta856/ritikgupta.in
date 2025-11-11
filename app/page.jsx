import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Chatbot from "@/components/ChatBot";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="max-w-3xl mx-auto flex flex-col gap-8 md:gap-12 px-4">
        <Header />
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Footer />
      </div>
      <Chatbot />
    </main>
  );
}
