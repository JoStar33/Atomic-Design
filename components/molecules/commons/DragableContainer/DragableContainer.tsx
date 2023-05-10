import { DragList } from "@/types/list";
import { useRef, useState } from "react";

interface Props<T> {
  initList: T[];
}

const DragableContainer = <T extends DragList>({ initList }: Props<T>) => {
  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);
  const [list, setList] = useState<T[]>(initList);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dragItem.current = position;
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
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
    <>
      {list &&
        list.map((item, index) => (
          <div
            style={{
              backgroundColor: "lightblue",
              margin: "20px 25%",
              textAlign: "center",
              fontSize: "40px",
            }}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragEnd={handleDrop}
            key={index}
            draggable
          >
            {item.title}
          </div>
        ))}
    </>
  );
};

export default DragableContainer;
