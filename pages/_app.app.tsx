import ValidateDialog from '@/components/organisms/dialogs/ValidateDialog/ValidateDialog';
import { DialogContext } from '@/utils/DialogContext';
import type { AppProps } from 'next/app';
import { useRef, useState } from 'react';
import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  const dialogText = useRef<string>('');
  const [dialogShow, setDialogShow] = useState<boolean>(false);
  const setDialog = (text: string, isShow: boolean) => {
    setDialogShow(isShow);
    dialogText.current = text;
  }
  return (
    <DialogContext.Provider value={{setDialog}}>
      <ValidateDialog dialogShow={dialogShow} dialogText={dialogText.current} handleDialog={() => setDialogShow(false)}/>
      <Component {...pageProps} />
    </DialogContext.Provider>
  );
}
