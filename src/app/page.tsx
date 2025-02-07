import Experience from "@/components/Experience";
import FullResumeButton from "@/components/ResumeButton";

export default function Home() {
  return (
    <div className="">
      <section id="about" className="h-screen w-1/2 border-2 border-red-500">
        ABOUT
      </section>
      <section id="experience" className="h-screen">
        <Experience />
        <FullResumeButton />
      </section>
      <section
        id="projects"
        className="h-screen w-1/2 border-2 border-blue-500"
      >
        PROJECTS
      </section>
    </div>
  );
}
