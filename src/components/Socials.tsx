import Image from "next/image";

import Github from "@/public/socials/github-brands-solid.svg";
import LinkedIn from "@/public/socials/linkedin-brands-solid.svg";
import Email from "@/public/socials/envelope-regular.svg";
import Instagram from "@/public/socials/instagram-brands-solid.svg";

// Socials data
const socials = [
  { name: "Github", href: "https://github.com/DannielK", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/danniel-kim/",
    icon: LinkedIn,
  },
  { name: "Email", href: "mailto:dannykm003@gmail.com", icon: Email },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dann.kimchi/",
    icon: Instagram,
  },
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
          className="flex h-6 w-6 items-center justify-center"
        >
          <Image
            src={icon}
            alt={name}
            className="aspect-square opacity-50 hover:opacity-100"
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;
