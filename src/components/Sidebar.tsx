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
  };

  return (
    <aside className="sticky top-0 flex max-h-screen w-[48%] flex-col justify-between py-24">
      <div className="max-w-fit">
        <h1 className="text-5xl font-bold tracking-tight text-slate-200">
          <a href="/" onClick={handleScrollToTop}>
            Danniel Kim
          </a>
        </h1>
        <h2 className="mt-3 text-xl font-medium tracking-tight text-slate-200">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Navbar />
      </div>
      <Socials />
    </aside>
  );
};

export default Sidebar;
