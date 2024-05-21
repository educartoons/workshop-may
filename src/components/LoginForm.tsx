import { ChangeEvent, useState, MouseEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import { login } from "../api/auth";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const initialState = {
  email: "",
  password: "",
};

export type UserLoginForm = typeof initialState;

export default function LoginForm() {
  const [form, setForm] = useState(initialState);
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await login(form);
    navigate("/");
  };

  useEffect(() => {
    if (user.email) {
      navigate("/");
    }
  }, [user.email]);

  return (
    <div className="w-[500px]">
      <div className="mb-12">
        <h2 className="text-2xl font-medium text-center">
          Sign in to your account
        </h2>
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
      <div>
        <Input
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          name="password"
          type="password"
        />
      </div>
      <div className="mt-4">
        <Button onClick={handleLogin} width="full">
          Sign in
        </Button>
      </div>
      <div className="mt-10">
        <p className="text-center text-sm font-normal">
          Not a member?{" "}
          <Link to="/register" className="underline underline-offset-4">
            Start a 14 day free trial
          </Link>
        </p>
      </div>
    </div>
  );
}
