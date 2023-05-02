import styles from "./menubutton.module.scss";

interface Props {
  icon: React.ReactNode;
  label: string;
}

const MenuButton = ({ icon, label }: Props) => {
  return (
    <div className={styles.menu_button}>
      {icon}
      {label}
    </div>
  );
};

export default MenuButton;
