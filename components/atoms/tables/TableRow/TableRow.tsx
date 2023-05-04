import { useMemo } from "react";

interface Props {
  row: TableRow;
  rowClick?: () => void;
}

const TableRow = ({row, rowClick}: Props) => {
  const rowValues = useMemo(() => {
    const showedRow = {...row};
    delete showedRow.id;
    return Object.values(showedRow);
  }, [row]);
  return (
    <tr role={`table-row-${row.id}`} onClick={rowClick} style={{cursor: rowClick ? "pointer" : "default"}}>
      {
        rowValues.map((rowElement) => 
          <td key={rowElement}>{rowElement}</td>
        )
      }
    </tr>
  );
};

export default TableRow;