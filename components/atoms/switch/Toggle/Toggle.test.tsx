import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toggle from "./Toggle";

const user = userEvent.setup();

describe("아토믹/일반/Toggle 테스트", () => {
  test("토글을 눌렀을 경우 정상적으로 값을 변경시키는지 테스트", () => {
    let isShow = false;
    const handleChange = (value: boolean) => {
      isShow = value;
    }
    render(
      <Toggle isChecked={handleChange}/>
    );
    const testToggle = screen.getByRole("switch-toggle"); 
    user.click(testToggle).then(() => {
      expect(isShow).toBeTruthy();
    });
  })
});