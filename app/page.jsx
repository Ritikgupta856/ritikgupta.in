
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Chatbot from "@/components/ChatBot";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import { Separator } from "@/components/Separator";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <Separator />
        <Hero />
        <Separator />
        <Experience />
        <Separator />
        <Education />
        <Separator />
        <Stack />
        <Separator />
        <Projects />
        <Separator />
      </div>
      <Chatbot />
    </main>
  );
}
