import { ReactElement } from "react";

type InputstyleProps = {
  placeholder: string;
  type?: string;
  icon?: ReactElement;
  reference?: any | string;
};

export function Inputstyle({
  placeholder,
  type,
  icon,
  reference,
}: InputstyleProps) {
  return (
    <div className=" flex items-center rounded-md ">
      <div className="p-1 size-8 rounded-l-md border-r-2 border-stone-400 shadow-xl ">
        {icon}
      </div>
      <span>
        <input
          className="rounded-r-md w-[250px] p-1 outline-none"
          type={type}
          placeholder={placeholder}
          ref={reference}
        />
      </span>
    </div>
  );
}
