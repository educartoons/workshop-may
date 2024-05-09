import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  variant?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="bg-purple-500 text-white rounded py-2 px-2 shadow-md"
      {...rest}
    >
      {children}
    </button>
  );
}
