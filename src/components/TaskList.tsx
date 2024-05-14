import { ChangeEvent, memo } from "react";
import { TaskStatus } from "../context/kanban-context";
import Task from "./Task";
import type { Task as TaskType } from "./Task";

type Lists = keyof typeof variants;

type TaskListProps = {
  title: string;
  tasks: TaskType[];
  type: Lists;
  prev: TaskStatus;
  origin: TaskStatus;
  next: TaskStatus;
  handleChangeFilter?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const variants = {
  todo: "bg-stone-100",
  inprogress: "bg-blue-100",
  done: "bg-green-100",
};

const variantsHeadings = {
  todo: "bg-stone-200",
  inprogress: "bg-blue-200",
  done: "bg-green-200",
};

const TaskList = ({
  tasks,
  title,
  type,
  prev,
  origin,
  next,
}: TaskListProps) => {
  console.count("rendering TaskList");
  return (
    <div
      className={`flex flex-col gap-4 px-4 py-8 rounded-xl ${variants[type]}`}
    >
      <div className="flex">
        <h2
          className={`${variantsHeadings[type]} h-8 rounded-full pl-4 flex items-center justify-center text-sm mr-1 pr-14`}
        >
          {title}
        </h2>
        <span
          className={`${variantsHeadings[type]} h-8 w-8 rounded-full flex items-center justify-center text-sm`}
        >
          5
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            origin={origin}
            prev={prev}
            next={next}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(TaskList);
