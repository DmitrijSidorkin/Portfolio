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
      className="box-border h-full lg:w-96 md:w-48"
    >
      {children}
    </td>
  );
};
