"use client";

import SkillList from "./SkillList";
import AddtlLinks from "./AddtlLinks";
import { EXPERIENCES } from "@/data/experiences";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Experience = () => {
  // State to track which experience item is being hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ol className="relative">
      {/* Map through the EXPERIENCES array to dynamically generate experience items */}
      {EXPERIENCES.map((experience, index) => (
        <a
          key={index}
          href={`${experience.link}`}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${experience.title} at ${experience.company} (opens in a new tab)`}
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
            <header
              className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              aria-label={`${experience.duration}`}
            >
              {experience.duration}
            </header>
            <div className="sm:col-span-6">
              <h3
                className={`inline-flex items-baseline font-medium leading-snug text-slate-200 transition-colors duration-100 ${hoveredIndex === index ? "text-teal-300" : ""}`}
              >
                <span>
                  {experience.title} ·{" "}
                  <span className="inline-block">{experience.company}</span>
                </span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={`ml-2 inline-block size-3 shrink-0 -rotate-45 transition-transform ${hoveredIndex === index ? "-translate-y-1 translate-x-1" : ""}`}
                />
              </h3>
              <p className="mt-2 text-sm leading-normal">
                {experience.description}
              </p>
              {/* Render additional links if they exist */}
              {Object.keys(experience.addtlLinks).length > 0 && (
                <AddtlLinks
                  links={Object.fromEntries(
                    Object.entries(experience.addtlLinks).filter(
                      ([_, link]) => link !== undefined,
                    ),
                  )}
                />
              )}
              {/* Render skills list */}
              <SkillList skills={experience.skills} />
            </div>
          </li>
        </a>
      ))}
    </ol>
  );
};

export default Experience;
