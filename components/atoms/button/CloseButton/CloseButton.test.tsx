import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CloseButton from "./CloseButton";

const user = userEvent.setup();

describe("아토믹/버튼/CloseButton 테스트", () => {
  test("실제로 닫기기능을 만들고 동작하는지 확인해보는 테스트", () => {
    let isShow = true;
    const handleClose = () => {
      isShow = false;
    };
    render(
      <div style={{ display: isShow ? "block" : "none" }}>
        <CloseButton handleClick={() => handleClose()} />
      </div>
    );
    const testButton = screen.getByRole("button");
    user.click(testButton).then(() => {
      expect(testButton).not.toBeInTheDocument();
    });
  });
});
