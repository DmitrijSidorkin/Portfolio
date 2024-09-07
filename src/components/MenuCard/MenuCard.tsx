import React from "react";

type MenuCardProps = {
  children: React.ReactNode;
};

export const MenuCard: React.FC<MenuCardProps> = ({ children }) => {
  return (
    <div className="rounded-xl shadow-md flex-grow dark:bg-black bg-white dark:shadow-white shadow-black w-full h-full">
      {children}
    </div>
  );
};
