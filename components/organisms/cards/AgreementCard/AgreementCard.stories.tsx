import { Meta, StoryFn } from '@storybook/react';
import AgreementCard from './AgreementCard';

export default {
  title: '컴포넌트/조직/일반/AgreementCard',
  component: AgreementCard,
} as Meta<typeof AgreementCard>;

const Template: StoryFn<typeof AgreementCard> = (args) => <AgreementCard {...args}/>;

export const AgreementCardTest = Template.bind({});
AgreementCardTest.args = {
  initAgreement: [{
    id: "1", 
    label: "동의합니까?", 
    agree: false
  }, {
    id: "2", 
    label: "진짜 동의합니까?", 
    agree: false
  }, {
    id: "3", 
    label: "정말로 동의합니까?", 
    agree: false
  }]
}