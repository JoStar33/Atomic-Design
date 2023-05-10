import DragableContainer from "@/components/organizations/container/DragableContainer/DragableContainer";
import { TestTodos } from "@/types/list";

//프리렌더링이 정상적으로 이루어지고 있는지 테스트하기위한 파일.
const Test = () => {
  return (
    <div>
      <DragableContainer<TestTodos>
        initList={[
          {
            title: "item1",
            name: "jojo",
            description: "안녕?",
          },
          {
            title: "item2",
            name: "jojo",
            description: "안녕?",
          },
          {
            title: "item3",
            name: "jojo",
            description: "안녕?",
          },
        ]}
      />
    </div>
  );
};

export default Test;
