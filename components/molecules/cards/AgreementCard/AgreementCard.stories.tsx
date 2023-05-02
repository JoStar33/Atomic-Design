import { DialogContext } from '@/utils/DialogContext';
import { Meta, StoryFn } from '@storybook/react';
import { useRef, useState } from 'react';
import ValidateDialog from '../../dialogs/ValidateDialog/ValidateDialog';
import AgreementCard from './AgreementCard';

export default {
  title: '컴포넌트/조직/카드/AgreementCard',
  component: AgreementCard,
} as Meta<typeof AgreementCard>;
const Template: StoryFn<typeof AgreementCard> = (args) => {
  const dialogText = useRef<string>('');
  const [dialogShow, setDialogShow] = useState<boolean>(false);
  const setDialog = (text: string, isShow: boolean) => {
    setDialogShow(isShow);
    dialogText.current = text;
  }
  return (
    <DialogContext.Provider value={{setDialog}}>
      <ValidateDialog dialogShow={dialogShow} dialogText={dialogText.current} handleDialog={() => setDialogShow(false)}/>
      <AgreementCard {...args}/>
    </DialogContext.Provider>
  )
}

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