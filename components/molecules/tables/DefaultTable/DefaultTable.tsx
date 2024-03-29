import TableHeader from "@/components/atoms/tables/TableHeader/TableHeader";
import TableRow from "@/components/atoms/tables/TableRow/TableRow";
import styles from "./default_table.module.scss";

interface Props {
  tableTitle?: string;
  tableData: TableData;
  rowClick?: (id: string) => void;
}

export default function DefaultTable({
  tableTitle,
  tableData,
  rowClick = () => {
    return;
  },
}: Props) {
  return (
    <div>
      <table className={styles.default_table}>
        <caption>{tableTitle}</caption>
        <thead>
          <TableHeader header={tableData.tableHeader} />
        </thead>
        <tbody>
          {tableData.tableRow.map((row) => (
            <TableRow
              key={row.id}
              row={row}
              rowClick={() => rowClick(row.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
