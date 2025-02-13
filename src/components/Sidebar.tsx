"use client";

import Navbar from "./Navbar";
import Socials from "./Socials";

const Sidebar = () => {
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
    <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div className="max-w-fit">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/" onClick={handleScrollToTop}>
            Danniel Kim
          </a>
        </h1>
        <h2 className="mt-3 text-xl font-medium tracking-tight text-slate-200">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Focused on building reliable, efficient, and maintainable software
          with a problem-solving mindset.
        </p>
        <Navbar />
      </div>
      <Socials />
    </aside>
  );
};

export default Sidebar;
