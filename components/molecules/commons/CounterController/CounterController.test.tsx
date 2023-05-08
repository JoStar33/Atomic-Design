import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CounterController from "./CounterController";

const user = userEvent.setup();

describe("분자/일반/숫자Form", () => {
  test("숫자를 누를때 정상적으로 수가 반영되는지 테스트(플러스만)", async () => {
    render(
      <CounterController/>
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
  test("숫자를 누를때 정상적으로 수가 반영되는지 테스트(플러스와 마이너스)", async () => {
    render(
      <CounterController/>
    );
    const plusButton = screen.getByRole('plus-button');
    const minusButton = screen.getByRole('minus-button');
    user.click(plusButton)
    .then(() => {
      user.click(plusButton)
    })    
    .then(() => {
      user.click(plusButton)
    })
    .then(() => {
      user.click(minusButton)
    })
    .then(() => {
      user.click(minusButton)
    });
    const counter = await screen.findByText(/1/);
    expect(counter).toBeInTheDocument();
  });
});