import { ChangeEvent, useState, MouseEvent } from "react";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import Input from "./Input";
import Button from "./Button";
import { getUsers } from "../db/index";
import { addTask } from "../store/kanbanSlice";
import { registerUser } from "../api/auth";

export default function LoginForm() {
  const [form, setForm] = useState({
    fullname: "",
    nickname: "",
    avatar: "",
    email: "",
    password: "",
    repeatpassword: "",
  });

  getUsers();

  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { user } = await registerUser(form);
    console.log(user);
  };

  return (
    <form className="flex flex-col gap-2">
      <Input
        value={form.fullname}
        name="fullname"
        onChange={handleChange}
        type="text"
        placeholder="Full Name"
      />
      <Input
        value={form.nickname}
        name="nickname"
        onChange={handleChange}
        type="text"
        placeholder="Nickname"
      />

      <Input
        value={form.email}
        name="email"
        onChange={handleChange}
        type="text"
        placeholder="Email"
      />
      <Input
        value={form.avatar}
        name="avatar"
        onChange={handleChange}
        type="text"
        placeholder="Avatar"
      />
      <Input
        value={form.password}
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="Password"
      />
      <Input
        value={form.repeatpassword}
        name="repeatpassword"
        onChange={handleChange}
        type="password"
        placeholder="Repeat password"
      />
      <Button onClick={handleClick}>Add</Button>
    </form>
  );
}
