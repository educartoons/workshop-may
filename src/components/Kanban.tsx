import TaskList from "./TaskList";
import { tasks } from "./API";

export default function Kanban() {
  return (
    <div>
      <div className="bg-stone-100 py-5 px-5 rounded-xl mb-4">
        <h1 className="text-lg font-medium">🤟 Let's kick off the day</h1>
      </div>
      <div className="flex flex-row gap-4">
        <TaskList type="todo" title="To Do" tasks={tasks} />
        <TaskList type="inprogress" title="In Progress" tasks={tasks} />
        <TaskList type="done" title="Done" tasks={tasks} />
      </div>
    </div>
  );
}
