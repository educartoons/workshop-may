import { ChangeEvent, useState, MouseEvent } from "react";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import Input from "./Input";
import Button from "./Button";
import { addTask } from "../store/kanbanSlice";

type FormProps = {
  handleChangeKey: (value: string) => void;
};

export default function Form({ handleChangeKey }: FormProps) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newTask = {
      id: crypto.randomUUID() as string,
      ...form,
    };
    dispatch(addTask({ task: newTask }));
    handleChangeKey(crypto.randomUUID());
    enqueueSnackbar(`The task: ${form.title} was added.`, {
      variant: "success",
      anchorOrigin: {
        horizontal: "right",
        vertical: "top",
      },
    });
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
