import Navbar from "./Navbar";
import Socials from "./Socials";
import AnimatedName from "./AnimatedName";

const Sidebar = () => {
  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div className="relative max-w-fit">
        <AnimatedName />
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
