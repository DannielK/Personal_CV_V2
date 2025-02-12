import React, { ReactNode } from "react";

const Content = ({ children }: { children: ReactNode }) => {
  return <main className="w-[52%] py-24 pt-24">{children}</main>;
};

export default Content;
