import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BackHomeButton = () => {
  return (
    <a
      href="/"
      className="group relative inline-flex max-w-fit items-center justify-center overflow-hidden rounded-md border border-white/20 bg-slate-600/30 px-6 py-2 text-base font-semibold text-slate-200 backdrop-blur-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-teal-300/50"
      aria-label="Return to home page"
    >
      <span className="text-lg">Return To Home Page</span>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="ml-2 inline-block size-3 shrink-0 transition-transform group-hover:translate-x-2 motion-reduce:transition-none"
      />
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-10 bg-white/30"></div>
      </div>
    </a>
  );
};

export default BackHomeButton;
