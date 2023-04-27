import { Meta, StoryFn } from '@storybook/react';
import TextBox from './TextBox';

export default {
  title: '컴포넌트/아토믹/TextBox',
  component: TextBox,
} as Meta<typeof TextBox>;

const Template: StoryFn<typeof TextBox> = (args) => <div className='w-96 h-96 relative bg-slate-300'><TextBox {...args}/></div>;

export const TextBoxTest = Template.bind({});
TextBoxTest.args = {
  text: "이전 버전의 Access에서는 Memo 데이터 형식을 사용하여 많은 양의 텍스트를 저장하고 텍스트 데이터 형식을 사용하여 짧은 문자열(최대 255자)을 저장했습니다. Access 2013 및 Access 2016에서 이러한 두 데이터 형식은 각각 `긴 텍스트` 및 `짧은 텍스트`로 변경되고 데스크톱 데이터베이스 또는 Access 웹앱을 사용하는지 여부에 따라 속성과 크기 제한이 다릅니다. 세부 정보는 다음과 같습니다."
}
export const TextBoxColorTest = Template.bind({});
TextBoxColorTest.args = {
  text: "영역전개",
  textColor: "#ae9de5"
}