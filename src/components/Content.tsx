import React, { ReactNode } from "react";

const Content = ({ children }: { children: ReactNode }) => {
  return <main className="pt-24 lg:w-[52%] lg:py-24">{children}</main>;
};

export default Content;
