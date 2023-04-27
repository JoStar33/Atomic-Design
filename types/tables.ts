//테이블 줄에는 반드시 id값을 명시하시길 바랍니다.
interface TableRow {
  [rowKey: string]: string;
}

interface TableHeader {
  [rowKey: string]: string;
}

interface TableData {
  tableHeader: TableHeader;
  tableRow: TableRow[];
}