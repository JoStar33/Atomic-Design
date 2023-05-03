import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckBox from "./CheckBox";

const user = userEvent.setup();

describe("아토믹/일반/CheckBox 테스트", () => {
  test("체크박스를 눌렀을 경우 true, false값이 정상적으로 반영되는지 확인해보는 테스트", () => {
    let isChecked = false;
    const handleChange = (value: boolean) => {
      isChecked = value;
    };
    render(
      <CheckBox
        id={"3"}
        isChecked={handleChange}
        label={"체크박스 테스트"}
      />
    );
    const testCheckBox = screen.getByText(/체크박스 테스트/);
    user.click(testCheckBox).then(() => {
      expect(isChecked).toBeTruthy();
    });
  });
});
