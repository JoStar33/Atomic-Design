import styles from './toggle.module.scss';

const Toggle = () => {
  return (
    <div>
      <input type="checkbox" id={styles.toggle} hidden/> 
      <label htmlFor={styles.toggle} className={`${styles.toggle_switch} toggle_switch`}>
        <span className={styles.toggle_button}></span>
      </label>
    </div>
  );
};

export default Toggle;