import TableHeader from "@/components/atomic/tables/TableHeader/TableHeader";
import TableRow from "@/components/atomic/tables/TableRow/TableRow";
import styles from './default_table.module.scss';

interface Props {
  tableTitle?: string;
  tableData: TableData;
}

const DefaultTable = ({tableTitle, tableData}: Props) => {
  return (
    <div>
      <table className={styles.default_table}>
        <caption>{tableTitle}</caption>
        <thead>
          <TableHeader header={tableData.tableHeader}/>
        </thead>
        <tbody>
          {
            tableData.tableRow.map(row => <TableRow key={row.id} row={row}/>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default DefaultTable;