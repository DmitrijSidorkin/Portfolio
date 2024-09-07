import React from "react";

type MenuCardProps = {
  children: React.ReactNode;
};

export const MenuCard: React.FC<MenuCardProps> = ({ children }) => {
  return (
    <div className="rounded-xl shadow-md flex-grow dark:bg-neutral-900 bg-white dark:shadow-sky-800 shadow-black w-full h-full border border-sky-600">
      {children}
    </div>
  );
};
