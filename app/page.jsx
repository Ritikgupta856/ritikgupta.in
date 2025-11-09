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
      <div className="max-w-4xl mx-auto flex flex-col gap-12 md:gap-16 px-8 md:px-4">
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
