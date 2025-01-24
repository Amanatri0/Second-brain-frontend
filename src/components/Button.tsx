import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { buttonsStyle } from "./buttonSize";

type ButtonProps = {
  variant: "default" | "ghost" | null | undefined;
  size?: "default" | "icon" | null | undefined;
} & ComponentProps<"button">;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonsStyle({ variant, size }), className)}
    />
  );
}
