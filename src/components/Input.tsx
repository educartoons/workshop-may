import { InputHTMLAttributes } from "react";

type InputProps = {
  variant?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ placeholder, ...rest }: InputProps) {
  return (
    <label className="block" htmlFor="">
      <span className="text-sm font-normal block mb-2">{placeholder}:</span>
      <input
        className="border border-zinc-300 rounded px-2 py-2 w-full"
        {...rest}
      />
    </label>
  );
}
