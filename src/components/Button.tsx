import { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("", {
  variants: {
    variant: {
      text: "",
      contained: "bg-purple-500 text-white rounded py-2 px-2 shadow-md",
      outlined: "",
      icon: "rounded-full px-1 py-1 hover:bg-stone-200",
    },
    width: {
      regular: "",
      full: "",
    },
  },
  defaultVariants: {
    variant: "contained",
    width: "regular",
  },
});

type ButtonProps = VariantProps<typeof button> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export default function Button({
  children,
  variant,
  width,
  ...rest
}: ButtonProps) {
  return (
    <button className={button({ variant, width })} {...rest}>
      {children}
    </button>
  );
}
