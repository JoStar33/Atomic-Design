import ValidateDialog from '@/components/molecules/dialogs/ValidateDialog/ValidateDialog';
import { server } from '@/mocks/server';
import { Context } from '@/utils/Context';
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
  if(process.env.NODE_ENV === "development") {
    server.listen({
      onUnhandledRequest: "bypass",
    });
  }
  return (
    <Context.Provider value={{setDialog}}>
      <ValidateDialog dialogShow={dialogShow} dialogText={dialogText.current} handleDialog={() => setDialogShow(false)}/>
      <Component {...pageProps} />
    </Context.Provider>
  );
}
