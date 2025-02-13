"use client";

import SkillList from "./SkillList";
import AddtlLinks from "./AddtlLinks";
import { PROJECTS } from "@/data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";

const Project = () => {
  // State to track which experience item is being hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ol className="relative">
      {/* Map through the EXPERIENCES array to dynamically generate experience items */}
      {PROJECTS.map((project, index) => (
        <a
          key={index}
          href={`${project.link}`}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${project.title} (opens in a new tab)`}
          className={`transition-all duration-100 ${
            hoveredIndex !== null && hoveredIndex !== index
              ? "opacity-50"
              : "opacity-100"
          }`}
          // Add hover effects onto specific experience items
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onFocus={() => setHoveredIndex(index)}
          onBlur={() => setHoveredIndex(null)}
        >
          <li
            className={`group relative mb-10 grid gap-4 rounded-md pb-1 backdrop-blur-sm transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:p-4 ${hoveredIndex === index ? "bg-slate-800/50 drop-shadow-lg backdrop-blur-md" : ""}`}
          >
            <Image
              src={project.previewPhoto}
              alt={`${project.title} Preview Card`}
              width="200"
              height="48"
              className={`order-2 aspect-video rounded border-2 border-slate-200/10 object-cover sm:order-1 sm:col-span-2 sm:translate-y-1 ${hoveredIndex === index ? "border-slate-200/30" : ""}`}
            />
            <div className="order-1 sm:order-2 sm:col-span-6">
              <h3
                className={`inline-flex items-baseline font-medium leading-snug text-slate-200 transition-colors duration-100 ${hoveredIndex === index ? "text-teal-300" : ""}`}
              >
                <span>{project.title}</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={`ml-2 inline-block size-3 shrink-0 -rotate-45 transition-transform ${hoveredIndex === index ? "-translate-y-1 translate-x-1" : ""}`}
                />
              </h3>
              <p className="mt-2 text-sm leading-normal">
                {project.description}
              </p>
              {/* Render additional links if they exist */}
              {Object.keys(project.addtlLinks).length > 0 && (
                <AddtlLinks
                  links={Object.fromEntries(
                    Object.entries(project.addtlLinks).filter(
                      ([_, link]) => link !== undefined,
                    ),
                  )}
                />
              )}
              {/* Render skills list */}
              <SkillList skills={project.skills} />
            </div>
          </li>
        </a>
      ))}
    </ol>
  );
};

export default Project;
