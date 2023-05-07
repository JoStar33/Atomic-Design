import React from "react";
import styles from "./forminput.module.scss";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface Props {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
}

const FormInput = ({ label, placeholder, type, id, register }: Props) => {
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
        {...register(id)}
      />
    </div>
  );
};

export default FormInput;
