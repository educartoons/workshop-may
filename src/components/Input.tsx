import { InputHTMLAttributes } from "react";

type InputProps = {
  variant?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...rest }: InputProps) {
  return (
    <label className="block" htmlFor="">
      <input className="border border-zinc-300 rounded px-2 py-2" {...rest} />
    </label>
  );
}
