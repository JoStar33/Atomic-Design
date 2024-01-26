import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors, FieldValues } from "react-hook-form";
import styles from "./form_error_text.module.scss";

interface IFormErrorText {
  name: string;
  errors: FieldErrors<FieldValues>;
  margin?: string;
}

export default function FormErrorText({
  name,
  errors,
  margin,
}: IFormErrorText) {
  return (
    <div
      className={styles["form-error-text"]}
      style={{ margin: margin ? margin : "2px 0 0 0" }}
    >
      <ErrorMessage errors={errors} name={name} />
    </div>
  );
}
