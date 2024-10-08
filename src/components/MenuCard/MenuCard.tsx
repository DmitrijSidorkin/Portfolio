type MenuCardProps = {
  children: React.ReactNode;
};

export const MenuCard: React.FC<MenuCardProps> = ({ children }) => {
  return (
    <div className="rounded-xl text-lg table-cell items-center justify-center shadow-md bg-black shadow-sky-800 w-full h-full border border-sky-600">
      {children}
    </div>
  );
};
