import styles from "./menubutton.module.scss";

interface Props {
  icon: React.ReactNode;
  label: string;
  click: () => void;
}

const MenuButton = ({ icon, label, click }: Props) => {
  return (
    <div className={styles.menu_button} onClick={click}>
      {icon}
      {label}
    </div>
  );
};

export default MenuButton;
