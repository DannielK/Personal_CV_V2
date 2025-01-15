"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState<string | null>(null);
  // State to store the section IDs
  const [sections, setSections] = useState<string[]>([]);

  useEffect(() => {
    // Array containing the section IDs used to generate the navigation links
    const sectionElements = Array.from(document.querySelectorAll("section"))
      .filter((section) => section.id) // Only include sections with an ID
      .map((section) => section.id); // Map the sections to an array of IDs

    // Update the sections state with the array of section IDs
    setSections(sectionElements);

    // Create an IntersectionObserver to track when sections enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is in view, update the activeSection state
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }, // Only trigger the observer when 50% of the section is in view
    );

    // Observe each section element
    sectionElements.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    // Cleanup the observer when the component unmounts
    return () => {
      sectionElements.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <nav className="mt-16 block w-max" aria-label="Main navigation">
      {/* Map through the sections array to dynamically create navbar links */}
      {sections.map((id) => (
        <Link
          key={id} // Use the section ID as the key
          href={`#${id}`} // Link to the section by ID
          className={`group flex items-center py-3 ${
            activeSection === id ? "active" : "" // Apply the 'active' class if the section is active
          }`}
        >
          <span className="nav-indicator"></span>
          <span className="nav-text">{id}</span>{" "}
          {/* Display the section ID as the link text */}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
