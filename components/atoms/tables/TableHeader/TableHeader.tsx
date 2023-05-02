interface Props {
  header: TableHeader;
}

const TableHeader = ({ header }: Props) => {
  return (
    <tr>
      {
        Object.values(header).map((header) => 
          <th key={header}>{header}</th>)
      }
    </tr>
  );
};

export default TableHeader;