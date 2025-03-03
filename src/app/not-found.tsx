import BackHomeButton from "@/components/BackHomeButton";

const NotFound = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="relative overflow-hidden text-9xl font-black">
        404
        <div className="aurora">
          <div className="aurora__item" />
          <div className="aurora__item" />
          <div className="aurora__item" />
          <div className="aurora__item" />
        </div>
      </h1>
      <h2 className="mb-10 text-center text-lg">
        Oops! This page can't be found.
      </h2>
      <BackHomeButton />
    </div>
  );
};

export default NotFound;
