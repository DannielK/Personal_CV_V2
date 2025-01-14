import React, { ReactNode } from "react";

const Content = ({children}: {children: ReactNode }) => {
  return (
    <main className="w-[52%] border-2 border-blue-500 py-24 pt-24">
      {children}
    </main>
  );
};

export default Content;
