import MenuButton from "@/components/atoms/button/MenuButton/MenuButton";
import styles from "./topmenubar.module.scss";

interface Props {
  menu: Menu[];
}

export default function TopMenuBar({ menu }: Props) {
  return (
    <div className={styles.top_menu_bar}>
      {menu.map((menuElement) => (
        <MenuButton key={menuElement.id} handleClick={menuElement.click}>
          {menuElement.icon}
          {menuElement.label}
        </MenuButton>
      ))}
    </div>
  );
}
