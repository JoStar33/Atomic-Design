import { DragList } from "@/types/list";
import styles from "./dragable_card.module.scss";

interface Props<T> {
  handleDragStart: () => void;
  handleDragEnter: () => void;
  handleDrop: () => void;
  item: T;
}

export default function DragableCard<T extends DragList>({
  handleDrop,
  handleDragEnter,
  handleDragStart,
  item,
}: Props<T>) {
  return (
    <div
      className={styles.dragable_card}
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragEnd={handleDrop}
      onDragOver={(event) => {
        event.preventDefault();
      }}
      draggable
    >
      {item.title}
    </div>
  );
}
