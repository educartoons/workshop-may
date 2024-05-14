import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "./Input";
import Button from "./Button";
import { addTask } from "../store/kanbanSlice";

export default function Form() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    const newTask = {
      id: crypto.randomUUID() as string,
      ...form,
    };
    dispatch(addTask({ task: newTask }));
  };

  return (
    <form className="flex flex-col gap-2">
      <Input
        value={form.title}
        name="title"
        onChange={handleChange}
        type="text"
        placeholder="Title"
      />
      <Input
        value={form.description}
        name="description"
        onChange={handleChange}
        type="text"
        placeholder="Description"
      />

      <Input
        value={form.priority}
        name="priority"
        onChange={handleChange}
        type="text"
        placeholder="Priority"
      />
      <Button onClick={handleClick}>Add</Button>
    </form>
  );
}
