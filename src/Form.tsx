import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function Form() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    severity: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("Event");
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  console.log("Rendering");

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
        value={form.severity}
        name="severity"
        onChange={handleChange}
        type="text"
        placeholder="Severity"
      />
      <Button>Add</Button>
    </form>
  );
}
