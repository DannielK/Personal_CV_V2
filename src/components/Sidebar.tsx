import Navbar from "./Navbar";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 flex max-h-screen w-[48%] flex-col justify-between border-2 border-red-500 py-24">
      <Navbar />
    </aside>
  );
};

export default Sidebar;
