import styles from './toggle.module.scss';

interface Props {
  isChecked: (value: boolean) => void;
}

const Toggle = ({ isChecked }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    isChecked(event.target.checked);
  };
  return (
    <div>
      <input type="checkbox" id={styles.toggle} hidden onChange={handleChange}/> 
      <label role='switch-toggle' htmlFor={styles.toggle} className={`${styles.toggle_switch} toggle_switch`}>
        <span className={styles.toggle_button}></span>
      </label>
    </div>
  );
};

export default Toggle;