import { SubmitValue } from "@/types/form";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MultiValidateForm from "./MultiValidateForm";

let completeWork = false;

const formModel = [
  {
    type: "text",
    name: "email",
    label: "이메일",
    validate: {
      required: "이메일 주소는 필수 입력입니다.",
      pattern: {
        value: !/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: "이메일 형식에 맞지않습니다. 다시 입력해주세요."
      },
    }
  },
  {
    type: "password",
    name: "password",
    label: "패스워드",
    validate: {
      required: "비밀번호는 필수 입력입니다.",
      pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
        message: "최소 하나의 문자, 하나의 숫자, 하나의 특수문자가 들어가야합니다."
      },
      minLength: {
        value: 8,
        message: "8자리 이상 비밀번호를 사용하세요.",
      },
    }
  }
];

const initRender = () => {
  render(<MultiValidateForm formModel={formModel} actionSubmit={(data: SubmitValue) => {
    completeWork = true;
  }} buttonText={"로그인"}/>);
  const loginButton = screen.getByText(/로그인/);
  const emailInput = screen.getByRole("email");
  const passwordInput = screen.getByRole("password");
  return {
    loginButton,
    emailInput,
    passwordInput
  }
};

describe("분자/폼/멀티 유효성 검사 폼", () => {
  test("멀티 유효성 검사 폼 로그인형태 테스트(성공 케이스)", async () => {
    completeWork = false;
    const {loginButton, emailInput, passwordInput} = initRender();
    await userEvent.type(emailInput, "werhkf12@naver.com");
    await userEvent.type(passwordInput, "1234qwer!@#$");
    return userEvent.click(loginButton).then(() => {
      expect(completeWork).toBeTruthy();
    });
  });
  test("멀티 유효성 검사 폼 로그인형태 테스트(실패 케이스)", async () => {
    completeWork = false;
    const {loginButton, emailInput, passwordInput} = initRender();
    await userEvent.type(emailInput, "naver.com");
    await userEvent.type(passwordInput, "1234qwer");
    return userEvent.click(loginButton).then(() => {
      const validatePassword = screen.getByText(/최소 하나의 문자, 하나의 숫자, 하나의 특수문자가/);
      expect(validatePassword).toBeInTheDocument();
      expect(completeWork).toBeFalsy();
    });
  })
});