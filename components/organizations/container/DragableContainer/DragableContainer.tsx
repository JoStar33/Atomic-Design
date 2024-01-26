import DragableCard from "@/components/molecules/cards/DragableCard/DragableCard";
import { DragList } from "@/types/list";
import styles from "./dragable_container.module.scss";
import React from "react";

interface Props<T> {
  initList: T[];
  isHorizontal: boolean;
}

export default function DragableContainer<T extends DragList>({
  initList,
  isHorizontal,
}: Props<T>) {
  const dragItem = React.useRef(0);
  const dragOverItem = React.useRef(0);
  const [list, setList] = React.useState<T[]>(initList);

  const handleDragStart = (position: number) => {
    dragItem.current = position;
  };

  const handleDragEnter = (position: number) => {
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
    <div
      className={styles.dragable_container}
      style={{ flexDirection: isHorizontal ? "column" : "row" }}
    >
      {list.map((item, index) => (
        <DragableCard<T>
          handleDragStart={() => handleDragStart(index)}
          handleDragEnter={() => handleDragEnter(index)}
          handleDrop={() => handleDrop()}
          item={item}
          key={index}
        />
      ))}
    </div>
  );
}
