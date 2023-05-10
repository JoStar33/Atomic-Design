import DragableCard from "@/components/molecules/cards/DragableCard/DragableCard";
import { DragList } from "@/types/list";
import { useRef, useState } from "react";
import styles from "./dragable_container.module.scss";

interface Props<T> {
  initList: T[];
}

const DragableContainer = <T extends DragList>({ initList }: Props<T>) => {
  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);
  const [list, setList] = useState<T[]>(initList);

  const handleDragStart = (
    position: number
  ) => {
    dragItem.current = position;
  };

  const handleDragEnter = (
    position: number
  ) => {
    dragOverItem.current = position;
  };

  const handleDrop = () => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = dragOverItem.current;
    dragOverItem.current = 0;
    setList(copyListItems);
  };

  return (
    <div className={styles.dragable_container}>
      {list.map((item, index) => (
        <DragableCard
          handleDragStart={() => handleDragStart(index)}
          handleDragEnter={() => handleDragEnter(index)}
          handleDrop={() => handleDrop()}
          item={item}
          key={index}
        />
      ))}
    </div>
  );
};

export default DragableContainer;
