import React from "react";
import styles from "./checkbox.module.scss";
interface Props {
  id: string;
  isChecked: (value: boolean) => void;
  children: React.ReactNode;
}

export default React.forwardRef(function CheckBox(
  { id, isChecked, children, ...rest }: Props,
  ref: React.Ref<HTMLInputElement>
) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    isChecked(event.target.checked);
  };
  return (
    <div className={`${styles.checks} ${styles.etrans}`}>
      <input
        ref={ref}
        type="checkbox"
        id={`checkbox${id}`}
        onChange={handleChange}
        {...rest}
      />
      <label htmlFor={`checkbox${id}`}>{children}</label>
    </div>
  );
});
