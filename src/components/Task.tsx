import { XMarkIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import PriorityTag, { Priorities } from "./PriorityTag";

export type Task = {
  title: string;
  description: string;
  priority: string;
};

type TaskProps = {
  task: Task;
};

export default function Task({ task }: TaskProps) {
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
        <Button variant="icon">
          <ArrowRightIcon className="w-4" />
        </Button>
      </div>
    </div>
  );
}
