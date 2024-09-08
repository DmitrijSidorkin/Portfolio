type TableRowProps = {
  children: React.ReactNode;
};

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <tr className="md:h-56 lg:h-64 h-48 ">{children}</tr>;
};
