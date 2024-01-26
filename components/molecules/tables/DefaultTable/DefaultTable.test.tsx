import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DefaultTable from "./DefaultTable";

const user = userEvent.setup();
const initTableData = {
  tableHeader: {
    title: "제목",
    content: "내용",
    information: "정보",
  },
  tableRow: [
    {
      id: "23",
      title: "안녕",
      content: "내용입니다.",
      information: "정보입니다.",
    },
  ],
};

let isClicked = false;

const tableRowClick = () => {
  isClicked = true;
};

describe("분자/일반/기본테이블", () => {
  test("기본 테이블상에 데이터를 넣으면 데이터가 잘 반영이 되는지 테스트", () => {
    render(<DefaultTable tableData={initTableData} />);
    const content = screen.getByText(/내용입니다./);
    expect(content).toBeInTheDocument();
  });
  test("테이블 줄을 클릭했을 경우 테스트", () => {
    render(<DefaultTable tableData={initTableData} rowClick={tableRowClick} />);
    const tableRow = screen.getByRole(
      `table-row-${initTableData.tableRow[0].id}`
    );
    return user.click(tableRow).then(() => {
      expect(isClicked).toBeTruthy();
    });
  });
});
