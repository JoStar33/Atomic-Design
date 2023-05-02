import MenuButton from "@/components/atoms/button/MenuButton/MenuButton";
import styles from './topmenubar.module.scss';

interface Props {
  menu: Menu[];
}

const TopMenuBar = ({ menu }: Props) => {
  return (
    <div className={styles.top_menu_bar}>
      {menu.map((menuElement) => (
        <MenuButton
          key={menuElement.id}
          icon={menuElement.icon}
          label={menuElement.label}
        />
      ))}
    </div>
  );
};

export default TopMenuBar;
