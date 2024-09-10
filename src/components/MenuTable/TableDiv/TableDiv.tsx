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
      className="box-border rounded-xl text-lg table-cell items-center justify-center shadow-md bg-black shadow-sky-800 border border-sky-600 xl:w-96 md:min-w-76"
    >
      <div className="h-full flex items-center justify-center xl:min-w-96 md:min-w-76">
        {children}
      </div>
    </td>
  );
};
