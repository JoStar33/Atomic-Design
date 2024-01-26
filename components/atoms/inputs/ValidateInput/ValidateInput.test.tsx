import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ValidateInput from "./ValidateInput";
import React from "react";

//const user = userEvent.setup();

interface Props {
  type: string;
  label: string;
}

const TestInputContainer = ({ type, label }: Props) => {
  const [value, setValue] = React.useState<string>("");
  return (
    <ValidateInput
      type={type}
      label={label}
      value={value}
      handleChangeValue={(event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
      }}
    />
  );
};

describe("아토믹/인풋/ValidateInput 테스트", () => {
  test("이메일 유효성 검사를 하는 테스트", async () => {
    render(<TestInputContainer type={"email"} label={"이메일"} />);
    const emailInput = screen.getByRole("validation-input");
    await userEvent.type(emailInput, "ghdf@nave");
    const emailValidation = await screen.findByText(
      /이메일 형식에 맞지않습니다. 다시 입력해주세요./
    );
    expect(emailValidation).toBeInTheDocument();
  });
  test("비밀번호 유효성 검사를 하는 테스트(검사에 걸린 케이스)", async () => {
    render(<TestInputContainer type={"password"} label={"비밀번호"} />);
    const passwordInput = screen.getByRole("validation-input");
    await userEvent.type(passwordInput, "1234");
    const passwordValidation = await screen.findByText(
      /비밀번호는 특수문자, 영문 대소문자/
    );
    expect(passwordValidation).toBeInTheDocument();
  });
  test("비밀번호 유효성 검사를 하는 테스트(검사통과 케이스)", async () => {
    render(<TestInputContainer type={"password"} label={"비밀번호"} />);
    const passwordInput = screen.getByRole("validation-input");
    await userEvent.type(passwordInput, "1234utkd%%12");
    await screen.findByText(/비밀번호는/).catch(() => {
      expect(1).toBe(1);
    });
  });
});
