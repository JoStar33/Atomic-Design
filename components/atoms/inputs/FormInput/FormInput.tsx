import { FormModel } from "@/types/form";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./forminput.module.scss";

interface Props {
  model: FormModel;
  register: UseFormRegister<FieldValues>;
}

const FormInput = ({ model, register }: Props) => {
  return (
    <div className={styles.form_container}>
      <div>
        <label htmlFor={model.name} className={styles.form_input_title}>
          {model.label}
        </label>
      </div>
      <input
        id={model.name}
        type={model.type}
        placeholder={model.name}
        className={styles.form_input}
        {...register(model.name)}
      />
    </div>
  );
};

export default FormInput;
