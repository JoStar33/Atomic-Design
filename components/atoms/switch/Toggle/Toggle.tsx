import React from "react";
import styles from "./toggle.module.scss";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  isChecked: (value: boolean) => void;
}

export default React.forwardRef(function Toggle(
  { isChecked, ...rest }: Props,
  ref: React.Ref<HTMLInputElement>
) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    isChecked(event.target.checked);
  };
  return (
    <div>
      <input
        ref={ref}
        type="checkbox"
        id={styles.toggle}
        hidden
        onChange={handleChange}
        {...rest}
      />
      <label
        role="switch-toggle"
        htmlFor={styles.toggle}
        className={`${styles.toggle_switch} toggle_switch`}
      >
        <span className={styles.toggle_button}></span>
      </label>
    </div>
  );
});
