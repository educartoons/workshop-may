import { useMemo, useCallback } from "react";
import TaskList from "./TaskList";
import { useKanban } from "../context/kanban-context";
import Input from "./Input";
import { ChangeEvent, useState } from "react";
import { values } from "../utils/utils";

export default function Kanban() {
  const { tasks } = useKanban();
  const [filter, setFilter] = useState("");
  const [items] = useState(values);

  const filteredValues = useMemo(() => {
    return items.filter((el) => el.checked);
  }, []);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  }, []);

  console.count("Rendering kanban");

  return (
    <div>
      <div className="bg-stone-100 py-5 px-5 rounded-xl mb-4">
        <h1 className="text-lg font-medium">🤟 Let's kick off the day</h1>
      </div>
      <div className="mb-2">
        <Input value={filter} onChange={handleChange} placeholder="Filter" />
      </div>
      <div className="mb-2">
        <p>Filtered Value: {filteredValues[0].item}</p>
      </div>
      <div className="flex flex-row gap-4">
        <TaskList
          origin="todo"
          prev="todo"
          next="inprogress"
          type="todo"
          title="To Do"
          tasks={tasks.todo}
          handleChangeFilter={handleChange}
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
    </div>
  );
}
