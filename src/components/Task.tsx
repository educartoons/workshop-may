import {
  XMarkIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";
import PriorityTag, { Priorities } from "./PriorityTag";
import { TaskStatus, useKanban } from "../context/kanban-context";

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: string;
};

type TaskProps = {
  task: Task;
  prev: TaskStatus;
  origin: TaskStatus;
  next: TaskStatus;
};

export default function Task({ task, prev, origin, next }: TaskProps) {
  const { moveTask } = useKanban();

  const handleMoveRight = () => {
    moveTask(task, origin, next);
  };

  const handleMoveLeft = () => {
    moveTask(task, origin, prev);
  };

  return (
    <div className="bg-white border border-zinc-100 rounded pl-4 pr-2 py-3 shadow-md">
      <div className="flex justify-between">
        <h2 className="text-sm font-medium">{task.title}</h2>
        <Button variant="icon">
          <XMarkIcon className="w-4" />
        </Button>
      </div>
      <div className="flex justify-between mt-2">
        <PriorityTag tag={task.priority as Priorities} />
        <div>
          {origin !== "todo" ? (
            <Button onClick={handleMoveLeft} variant="icon">
              <ArrowLeftIcon className="w-4" />
            </Button>
          ) : null}
          {origin !== "done" ? (
            <Button onClick={handleMoveRight} variant="icon">
              <ArrowRightIcon className="w-4" />
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
