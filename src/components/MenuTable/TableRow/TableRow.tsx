type TableRowProps = {
  children: React.ReactNode;
};

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <tr className="lg:h-96 h-48 ">{children}</tr>;
};
