import { validatePasswordCheck } from '@/utils/validate';
import styles from './password_check_input.module.scss';

interface Props {
  label: string;
  value: string;
  checkValue: string;
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordCheckInput = ({label, value, checkValue, handleChangeValue}: Props) => {
  return (
    <div>
      <label className={styles.password_check_input_title}>{label}</label>
      <div>
        <input className={styles.password_check_input} type="password" onChange={handleChangeValue}/>
        <p className={styles.password_check_text}>
          {
            validatePasswordCheck(value, checkValue)
          }
        </p>
      </div>
    </div>
  );
};

export default PasswordCheckInput;