import CloseButton from '@/components/atoms/button/CloseButton/CloseButton';
import TextBox from '@/components/atoms/commons/TextBox/TextBox';
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
            <CloseButton handleClick={handleDialog}/>
            <TextBox text={dialogText} />
          </div>
        </div>
      }
    </>
  );
};

export default ValidateDialog;