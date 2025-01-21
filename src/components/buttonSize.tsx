import { cva } from "class-variance-authority";

export const buttonsStyle = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "~sm/lg:size-md/xl",
        "flex",
        "items-center",
        "justify-center",
        "p-2",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
