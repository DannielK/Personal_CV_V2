"use client";

const AnimatedName = () => {
  // Handler to perform smooth scroll to the top on click.
  const handleScrollToTop = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    // Prevent the default anchor behavior.
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Set the link address back to "/".
    window.history.pushState(null, "", "/");
  };

  return (
    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
      <a
        id="name"
        href="/"
        onClick={handleScrollToTop}
        className="group relative inline-block"
      >
        {"Danniel Kim".split("").map((letter, index) => (
          <span key={index} className="outer">
            <span
              className="inner"
              style={{ animationDelay: `${Math.random()}ms` }}
            >
              <span
                className="letter"
                style={{ animationDelay: `${index * 1000}ms` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>{" "}
              {/* Preserve space */}
            </span>
          </span>
        ))}
      </a>
    </h1>
  );
};

export default AnimatedName;
