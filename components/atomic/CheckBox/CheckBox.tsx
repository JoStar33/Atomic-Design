import styles from './checkbox.module.scss';
interface Props {
  isChecked: (value: boolean) => void;
  label: string;
}

const CheckBox = ({ isChecked, label }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    isChecked(event.target.checked);
  };
  return (
    <div className={`${styles.checks} ${styles.etrans}`}>
      <input type="checkbox" id="checkbox" onChange={handleChange}/> 
      <label htmlFor="checkbox">{label}</label> 
    </div>
  );
};

export default CheckBox;
