import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CounterForm from "./CounterForm";

const user = userEvent.setup();

describe("분자/일반/숫자Form", () => {
  test("숫자를 누를때 정상적으로 수가 반영되는지 테스트(플러스만)", async () => {
    render(
      <CounterForm/>
    );
    const plusButton = screen.getByRole('plus-button');
    user.click(plusButton)
    .then(() => {
      user.click(plusButton)
    })    
    .then(() => {
      user.click(plusButton)
    });
    const counter = await screen.findByText(/3/);
    expect(counter).toBeInTheDocument();
  });
});