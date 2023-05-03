import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

const user = userEvent.setup();

describe("아토믹/버튼/Button 테스트", () => {
  test("이벤트를 주고 이벤트가 정상동작하는지 확인하는 테스트", async () => {
    const array: number[] = [];
    const pushNewElement = (number: number) => {
      array.push(number);
    }
    render(<Button label={"테스트 버튼"} clickEvent={() => pushNewElement(2)}/>);
    const testButton = screen.getByText(/테스트 버튼/); 
    await user.click(testButton);
    expect(array.includes(2)).toBeTruthy();
  });
})