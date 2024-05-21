import { ChangeEvent, useState, MouseEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import Input from "./Input";
import Button from "./Button";
import { getUsers } from "../db";
import { registerUser } from "../api/auth";

const initialState = {
  username: "",
  password: "",
  repeatpassword: "",
  email: "",
  fullname: "",
  phone: "",
};

export type UserRegisterForm = typeof initialState;

export default function RegisterForm() {
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const user = await registerUser(form);
    console.log(user);
    enqueueSnackbar(`The user: ${user.email} was created successfully`, {
      variant: "success",
      anchorOrigin: {
        horizontal: "right",
        vertical: "top",
      },
    });
    navigate("/login");
  };

  return (
    <div className="w-[500px]">
      <form>
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-center">
            Create an account
          </h2>
        </div>
        <div className="mb-5">
          <Input
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            name="username"
            type="text"
          />
        </div>
        <div className="mb-5">
          <Input
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            name="password"
            type="password"
          />
        </div>
        <div className="mb-5">
          <Input
            value={form.repeatpassword}
            onChange={handleChange}
            placeholder="Repeat password"
            name="repeatpassword"
            type="password"
          />
        </div>
        <div className="mb-5">
          <Input
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            name="email"
            type="text"
          />
        </div>
        <div className="mb-5">
          <Input
            value={form.fullname}
            onChange={handleChange}
            placeholder="Fullname"
            name="fullname"
            type="text"
          />
        </div>
        <div className="mb-5">
          <Input
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            name="phone"
            type="text"
          />
        </div>
        <div className="mt-4">
          <Button onClick={handleSubmit} width="full">
            Sign up
          </Button>
        </div>
        <div className="mt-10">
          <p className="text-center text-sm font-normal">
            Forgot your password?{" "}
            <Link to="/register" className="underline underline-offset-4">
              Use magic link
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
