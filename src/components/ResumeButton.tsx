import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FullResumeButton = () => {
  return (
    // <a
    //   href="/Danniel_Kim_Resume.pdf"
    //   target="_blank"
    //   rel="noreferrer noopener"
    //   className="group mt-2 inline-flex items-baseline text-base font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
    //   aria-label="View Full Resume (opens in a new tab)"
    // >
    //   <span>View Full Resume</span>
    //   <FontAwesomeIcon
    //     icon={faArrowRight}
    //     className="ml-2 inline-block size-3 shrink-0 -rotate-45 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
    //   />
    // </a>
    <a
      href="/Danniel_Kim_Resume.pdf"
      target="_blank"
      rel="noreferrer noopener"
      className="group relative inline-flex max-w-fit items-center justify-center overflow-hidden rounded-md border border-white/20 bg-slate-600/30 px-6 py-2 text-base font-semibold text-slate-200 backdrop-blur-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-teal-300/50"
      aria-label="View Full Resume (opens in a new tab)"
    >
      <span className="text-lg">View Full Resume</span>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="ml-2 inline-block size-3 shrink-0 -rotate-45 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
      />
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-10 bg-white/30"></div>
      </div>
    </a>
  );
};

export default FullResumeButton;
