import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type Task = {
  id: string;
  title: string;
  description: string;
  priority: string;
};

type Tasks = {
  todo: Task[];
  inprogress: Task[];
  done: Task[];
};

type KanbanContext =
  | {
      tasks: Tasks;
      handleAddTask: (task: Task) => void;
      moveTask: (task: Task, origin: TaskStatus, target: TaskStatus) => void;
    }
  | undefined;

const KanbanContext = createContext<KanbanContext>(undefined);

type KanbanContextProviderProps = {
  children: React.ReactNode;
};

const initialState: Tasks = {
  todo: [],
  inprogress: [],
  done: [],
};

export type TaskStatus = keyof typeof initialState;

function KanbanContextProvider({ children }: KanbanContextProviderProps) {
  const [tasks, setTasks] = useLocalStorage<Tasks>("kanban", initialState);

  const handleAddTask = (task: Task) => {
    setTasks({
      ...tasks,
      todo: [...tasks.todo, task],
    });
  };

  const moveTask = (task: Task, origin: TaskStatus, target: TaskStatus) => {
    const originList = tasks[origin].filter((item) => item.id !== task.id);
    const targetList = tasks[target].concat(task);
    setTasks({
      ...tasks,
      [origin]: originList,
      [target]: targetList,
    });
  };

  return (
    <KanbanContext.Provider
      value={{
        tasks: tasks,
        handleAddTask,
        moveTask,
      }}
    >
      {children}
    </KanbanContext.Provider>
  );
}

function useKanban() {
  const context = useContext(KanbanContext);
  if (context === undefined) {
    throw new Error("useKanban needs to be wrapped by KanbanContextProvider");
  }
  return context;
}

export { KanbanContext, KanbanContextProvider, useKanban };
