type TableRowProps = {
  children: React.ReactNode;
};

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <tr className="h-48 lg:h-76 xl:h-96 table-row">{children}</tr>;
};
