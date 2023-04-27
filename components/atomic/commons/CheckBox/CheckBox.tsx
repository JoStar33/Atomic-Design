import styles from './checkbox.module.scss';
interface Props {
  id: string;
  isChecked: (value: boolean) => void;
  label: string;
}

const CheckBox = ({ id, isChecked, label }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    isChecked(event.target.checked);
  };
  return (
    <div className={`${styles.checks} ${styles.etrans}`}>
      <input type="checkbox" id={`checkbox${id}`} onChange={handleChange}/> 
      <label htmlFor={`checkbox${id}`}>{label}</label> 
    </div>
  );
};

export default CheckBox;
