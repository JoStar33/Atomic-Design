import styles from './progressbar.module.scss';

interface Props {
  value: string;
  label: string;
}

const ProgressBar = ({value, label}: Props) => {
  return (
    <div>
      <h2>{label}</h2>
      <progress id={styles.progress} value={value} max="100"/>
    </div>
  );
};

export default ProgressBar;