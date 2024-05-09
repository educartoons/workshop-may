export type Priorities = keyof typeof variants;

type PriorityTagProps = {
  tag: Priorities;
};

const variants = {
  easy: "bg-sky-100 text-sky-400",
  medium: "bg-yellow-100 text-yellow-500",
  hard: "bg-red-100 text-red-400",
};

export default function PriorityTag({ tag }: PriorityTagProps) {
  return (
    <span className={`${variants[tag]} text-xs font-normal px-2 py-1 rounded`}>
      {tag}
    </span>
  );
}
