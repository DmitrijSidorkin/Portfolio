type TableDivProps = {
  children: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
};

export const TableDiv: React.FC<TableDivProps> = ({
  children,
  colSpan,
  rowSpan,
}) => {
  return (
    <td
      colSpan={colSpan}
      rowSpan={rowSpan}
      className="box-border h-full md:w-56 lg:w-64 sm:w-48"
    >
      {children}
    </td>
  );
};
