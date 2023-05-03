import styles from "./menubutton.module.scss";

interface Props {
  icon: React.ReactNode;
  label: string;
  handleClick: () => void;
}

const MenuButton = ({ icon, label, handleClick }: Props) => {
  return (
    <div className={styles.menu_button} onClick={handleClick}>
      {icon}
      {label}
    </div>
  );
};

export default MenuButton;
