import { Meta, StoryFn } from '@storybook/react';
import ValidateDialog from './ValidateDialog';

export default {
  title: '컴포넌트/조직/ValidateDialog',
  component: ValidateDialog,
} as Meta<typeof ValidateDialog>;

const Template: StoryFn<typeof ValidateDialog> = (args) => <ValidateDialog {...args}/>;

export const ValidateDialogTest = Template.bind({});
ValidateDialogTest.args = {
  dialogShow: true,
  dialogText: "다이얼로그 테스트입니다. 다이얼로그 테스트.",
  handleDialog: () => {},
}