import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AiFillFolder, AiFillHome } from "react-icons/ai";
import { DiReact } from "react-icons/di";
import TopMenuBar from "./TopMenuBar";

const user = userEvent.setup();
let checkMenuButton = false;
const initMenu = [
  {
    id: "1",
    icon: <AiFillHome />,
    label: "홈으로",
    click: () => {
      checkMenuButton = true;
    },
  },
  {
    id: "2",
    icon: <AiFillFolder />,
    label: "파일조회",
    click: () => {},
  },
  {
    id: "3",
    icon: <DiReact />,
    label: "리액트",
    click: () => {},
  },
];

describe("분자/바/TopMenuBar", () => {
  test("탑 메뉴바를 눌렀을 경우 원하는 이벤트가 정상적으로 동작하는지 테스트", () => {
    render(<TopMenuBar menu={initMenu} />);
    const homeButton = screen.getByText("홈으로");
    user.click(homeButton).then(() => {
      expect(checkMenuButton).toBeTruthy();
    });
  });
});
