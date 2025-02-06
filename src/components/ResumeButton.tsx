import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FullResumeButton = () => {
  return (
    <a
      href="/Danniel_Kim_Resume.pdf"
      target="_blank"
      rel="noreferrer noopener"
      className="group mt-2 inline-flex items-baseline text-base font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
      aria-label="View Full Resume (opens in a new tab)"
    >
      <span>View Full Resume</span>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="ml-2 inline-block size-3 shrink-0 -rotate-45 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
      />
    </a>
  );
};

export default FullResumeButton;
