import { TestTodos } from "@/types/list";
import { Meta, StoryFn } from "@storybook/react";
import DragableContainer from "./DragableContainer";

export default {
  title: "컴포넌트/조직/컨테이너/DragableContainer",
  component: DragableContainer,
} as Meta<typeof DragableContainer>;

//컴포넌트에 제네릭 적용
const Template: StoryFn<typeof DragableContainer> = () => (
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
    childStyle={{
      width: "300px",
    }}
    isHorizontal={false}
  />
);

export const DragableContainerTest = Template.bind({});
