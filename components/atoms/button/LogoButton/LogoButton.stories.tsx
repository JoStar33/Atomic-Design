import { Meta, StoryFn } from "@storybook/react";
import LogoButton from "./LogoButton";
import kakao from "/public/Kakao.png";

export default {
  title: "컴포넌트/아토믹/버튼/LogoButton",
  component: LogoButton,
} as Meta<typeof LogoButton>;

const Template: StoryFn<typeof LogoButton> = (args) => <LogoButton {...args} />;

export const LogoButtonTest = Template.bind({});
LogoButtonTest.args = {
  children: "카카오 로그인",
  logo: kakao,
};
