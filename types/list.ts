interface DragList {
  title: string;
}

interface TestTodos extends DragList {
  name: string;
  description: string;
}

export type { DragList, TestTodos };

