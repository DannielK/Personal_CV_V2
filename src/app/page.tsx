import Experience from "@/components/Experiences";
import FullResumeButton from "@/components/ResumeButton";
import Project from "@/components/Projects";
// import FullProjectArchiveButton from "@/components/ProjectArchiveButton";

export default function Home() {
  return (
    <div className="">
      <section id="about" className="mb-36 scroll-mt-24" aria-label="About Me">
        <div>
          <p className="mb-4">
            Hi! I am a recent Computer Engineering graduate from the University
            of California, Riverside, with a strong foundation in software
            engineering, web development, and embedded systems. My academic
            background, complemented by hands-on experience in full-stack
            development and technical support, has equipped me with a diverse
            skill set in programming, problem-solving, and system design.
          </p>
          <p className="mb-4">
            I have successfully contributed to several collaborative projects,
            including developing web applications with Next.js, TypeScript, and
            Firebase, as well as designing real-time embedded systems powered by
            C++, Python, and Arduino. I thrive in team-oriented environments,
            leveraging agile methodologies to deliver high-quality solutions
            that optimize performance and enhance user experiences.
          </p>
          <p className="mb-4">
            Outside of tech, you’ll find me binge-watching TV shows, gaming,
            weightlifting, trying out new foods, hiking, or hanging out with
            friends and family. I’m excited to bring my skills, curiosity, and
            enthusiasm to a new grad software engineering role where I can
            contribute to meaningful projects and continue to grow.
          </p>
        </div>
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
        {/* <FullProjectArchiveButton /> */}
      </section>
    </div>
  );
}
