"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// Socials data
const socials = [
  { name: "Github", href: "https://github.com/DannielK", icon: faGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/danniel-kim/",
    icon: faLinkedin,
  },
  { name: "Email", href: "mailto:dannielkim.cs@gmail.com", icon: faEnvelope },
];

const Socials = () => {
  return (
    <div
      className="ml-1 mt-8 flex max-w-fit items-center space-x-5"
      aria-label="Social links"
    >
      {/* Map through the socials array to dynamically generate social links */}
      {socials.map(({ name, href, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} (opens in a new tab)`}
          title={name}
          className="flex size-6 items-center justify-center"
        >
          <FontAwesomeIcon
            icon={icon}
            className="size-auto max-h-full max-w-full transition-colors duration-200 hover:text-slate-200"
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;
