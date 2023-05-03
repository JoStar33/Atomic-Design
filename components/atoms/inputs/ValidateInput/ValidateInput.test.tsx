import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import ValidateInput from "./ValidateInput";

//const user = userEvent.setup();

interface Props {
  type: string;
  label: string;
}

const TestInputContainer = ({type, label}: Props) => {
  const [value, setValue] = useState<string>("");
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
  test("이메일 유효성 검사를 하는 테스트", () => {
    render(<TestInputContainer type={"email"} label={"이메일"} />);
    const emailInput = screen.getByRole("validation-input");
    userEvent.type(emailInput, "ghdf@nave").then(async () => {
      const emailValidation = await screen.findByText(/이메일 형식에 맞지않습니다. 다시 입력해주세요./);
      expect(emailValidation).toBeInTheDocument();
    });
  });
  test("비밀번호 유효성 검사를 하는 테스트(검사에 걸린 케이스)", () => {
    render(<TestInputContainer type={"password"} label={"비밀번호"} />);
    const passwordInput = screen.getByRole("validation-input");
    userEvent.type(passwordInput, "1234").then(async () => {
      const passwordValidation = await screen.findByText(/비밀번호는 특수문자, 영문 대소문자/);
      expect(passwordValidation).toBeInTheDocument();
    });
  });
  test("비밀번호 유효성 검사를 하는 테스트(검사통과 케이스)", () => {
    render(<TestInputContainer type={"password"} label={"비밀번호"} />);
    const passwordInput = screen.getByRole("validation-input");
    userEvent.type(passwordInput, "1234utkd%%12").then(async () => {
      const passwordValidation = await screen.findByText(/비밀번호는 특수문자, 영문 대소문자/);
      expect(passwordValidation).not.toBeInTheDocument();
    });
  });
});
