import TaskList from "./TaskList";
import { useKanban } from "../context/kanban-context";
import Form from "./Form";

export default function Kanban() {
  const { tasks } = useKanban();

  return (
    <div>
      <div className="bg-stone-100 py-5 px-5 rounded-xl mb-4">
        <h1 className="text-lg font-medium">🤟 Let's kick off the day</h1>
      </div>
      <div className="flex flex-row gap-4">
        <TaskList
          origin="todo"
          prev="todo"
          next="inprogress"
          type="todo"
          title="To Do"
          tasks={tasks.todo}
        />
        <TaskList
          prev="todo"
          origin="inprogress"
          next="done"
          type="inprogress"
          title="In Progress"
          tasks={tasks.inprogress}
        />
        <TaskList
          prev="inprogress"
          origin="done"
          next="done"
          type="done"
          title="Done"
          tasks={tasks.done}
        />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}
