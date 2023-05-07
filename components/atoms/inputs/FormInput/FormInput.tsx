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
        {...register(id, {
          required: "비밀번호는 필수 입력입니다.",
          minLength: {
            value: 8,
            message: "8자리 이상 비밀번호를 사용하세요.",
          },
        })}
      />
    </div>
  );
};

export default FormInput;
