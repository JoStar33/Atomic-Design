interface Props {
  row: TableRow;
}

const TableRow = ({row}: Props) => {
  return (
    <tr>
      {
        Object.values(row).map((rowElement) => 
          <td key={rowElement}>{rowElement}</td>
        )
      }
    </tr>
  );
};

export default TableRow;