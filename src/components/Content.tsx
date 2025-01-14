import React, { ReactNode } from "react";

const Content = ({ children }: {children: ReactNode}) => {
    return (
        <main className="pt-24 w-[52%] py-24 border-2 border-blue-500">
            {children}
        </main>
    );
};

export default Content;