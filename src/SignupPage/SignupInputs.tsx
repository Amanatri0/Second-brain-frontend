import { ReactElement } from "react";

type SignupInoutProp = {
  placeholder: string;
  type: string;
  icon: ReactElement;
};

export function SignupInput({ placeholder, type, icon }: SignupInoutProp) {
  return (
    <div className=" gap-x-2 flex items-center rounded-xl pr-1 w-72   ">
      <div className="p-1 size-8 rounded-l-lg hover:bg-stone-100  ">{icon}</div>
      <span>
        <input
          className="rounded-full w-[250px] p-1 outline-none"
          type={type}
          placeholder={placeholder}
        />
      </span>
    </div>
  );
}
