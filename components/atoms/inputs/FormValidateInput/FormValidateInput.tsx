import { UseFormRegister, FieldValues } from "react-hook-form";
import styles from "../FormInput/forminput.module.scss"

interface Props {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  validate: object;
}

const FormValidateInput = ({ label, placeholder, type, id, register, validate }: Props) => {
  return (
    <div className={styles.form_container}>
      <div>
        <label htmlFor={id} className={styles.form_input_title}>
          {label}
        </label>
      </div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={styles.form_input}
        {...register(id, validate)}
      />
    </div>
  );
};

export default FormValidateInput;