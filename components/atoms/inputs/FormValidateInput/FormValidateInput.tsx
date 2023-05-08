import { FormValidateData } from "@/types/form";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styles from "../FormInput/forminput.module.scss";

interface Props {
  model: FormValidateData;
  register: UseFormRegister<FieldValues>;
}

const FormValidateInput = ({ model, register }: Props) => {
  return (
    <div className={styles.form_container}>
      <div>
        <label htmlFor={model.name} className={styles.form_input_title}>
          {model.label}
        </label>
      </div>
      <input
        role={model.name}
        id={model.name}
        type={model.type}
        placeholder={model.name}
        className={styles.form_input}
        {...register(model.name, model.validate)}
      />
    </div>
  );
};

export default FormValidateInput;