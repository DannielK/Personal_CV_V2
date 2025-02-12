import Experience from "@/components/Experiences";
import FullResumeButton from "@/components/ResumeButton";
import Project from "@/components/Projects";

export default function Home() {
  return (
    <div className="">
      <section id="about" className="h-screen w-1/2 border-2 border-red-500">
        ABOUT
      </section>
      <section
        id="experience"
        className="mb-36 scroll-mt-20"
        aria-label="Experience"
      >
        <Experience />
        <FullResumeButton />
      </section>
      <section
        id="projects"
        className="mb-36 scroll-mt-20"
        aria-label="Selected Projects"
      >
        <Project />
      </section>
    </div>
  );
}
