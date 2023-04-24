import TextBox from '@/components/atomic/TextBox/TextBox';
import CloseButton from '@/components/atomic/button/CloseButton/CloseButton';
import styles from './validate_dialog.module.scss';

interface Props {
  dialogShow: boolean;
  dialogText: string;
  handleDialog: () => void;
}

const ValidateDialog = ({dialogShow, dialogText, handleDialog}: Props) => {
  return (
    <>
      {
        dialogShow &&
        <div className={styles.dialog_background}>
          <div className={styles.dialog_container}>
            <CloseButton close={handleDialog}/>
            <TextBox text={dialogText} />
          </div>
        </div>
      }
    </>
  );
};

export default ValidateDialog;