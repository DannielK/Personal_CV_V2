"use client";

import React, { useState, useEffect, useRef } from "react";

import About from "@/components/About";
import Experience from "@/components/Experiences";
import FullResumeButton from "@/components/ResumeButton";
import Project from "@/components/Projects";
// import FullProjectArchiveButton from "@/components/ProjectArchiveButton";

export default function Home() {
  // Refs for each section
  const aboutRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);

  // State for tracking scroll progress (percentage) for each section
  const [aboutProgress, setAboutProgress] = useState(0);
  const [experienceProgress, setExperienceProgress] = useState(0);
  const [projectsProgress, setProjectsProgress] = useState(0);

  /**
   * Updates the scroll progress for a section based on its position relative
   * to the viewport. It computes the progress as:
   *   progress = (window.innerHeight - elementTop) / (window.innerHeight + elementHeight)
   * and clamps the value between 0 and 100.
   */
  const updateProgress = (
    ref: React.RefObject<HTMLElement | null>,
    setter: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const progress = Math.min(
        Math.max(
          ((window.innerHeight - rect.top) /
            (window.innerHeight + rect.height)) *
            100,
          0,
        ),
        100,
      );
      setter(progress);
    }
  };

  // Listen to scroll events to update progress indicators for each section
  const handleScroll = () => {
    updateProgress(aboutRef, setAboutProgress);
    updateProgress(experienceRef, setExperienceProgress);
    updateProgress(projectsRef, setProjectsProgress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Perform an initial update
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <section
        id="about"
        ref={aboutRef}
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="About Me"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
          <div className="mt-2 h-1 w-full rounded-lg bg-slate-600">
            <div
              className="h-1 rounded-lg bg-teal-300/75"
              style={{ width: `${aboutProgress}%` }}
            />
          </div>
        </div>
        <About />
      </section>

      <section
        id="experience"
        ref={experienceRef}
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-20"
        aria-label="Experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Experience
          </h2>
          <div className="mt-2 h-1 w-full rounded-lg bg-slate-600">
            <div
              className="h-1 rounded-lg bg-teal-300/75"
              style={{ width: `${experienceProgress}%` }}
            />
          </div>
        </div>
        <Experience />
        <FullResumeButton />
      </section>

      <section
        id="projects"
        ref={projectsRef}
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-20"
        aria-label="Selected Projects"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Projects
          </h2>
          <div className="mt-2 h-1 w-full rounded-lg bg-slate-600">
            <div
              className="h-1 rounded-lg bg-teal-300/75"
              style={{ width: `${projectsProgress}%` }}
            />
          </div>
        </div>
        <Project />
        {/* <FullProjectArchiveButton /> */}
      </section>
    </div>
  );
}
