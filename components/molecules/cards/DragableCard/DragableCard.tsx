import { DragList } from "@/types/list";
import styles from "./dragable_card.module.scss";

interface Props<T> extends React.HTMLAttributes<HTMLDivElement> {
  handleDragStart: () => void;
  handleDragEnter: () => void;
  handleDragEnd: () => void;
  item: T;
}

export default function DragableCard<T extends DragList>({
  handleDragEnd,
  handleDragEnter,
  handleDragStart,
  item,
  ...rest
}: Props<T>) {
  return (
    <div
      className={styles.dragable_card}
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragEnd={handleDragEnd}
      onDragOver={(event) => {
        event.preventDefault();
      }}
      draggable
      {...rest}
    >
      {item.title}
    </div>
  );
}
