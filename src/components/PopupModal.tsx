import { Beer, Link, Mail } from "lucide-react";
import { SignupInput } from "../SignupPage/SignupInputs";

export function Modal() {
  return (
    <>
      <div className=" flex overflow-y-auto overflow-x-auto fixed top-0 right-0 left-0 z-[999] justify-center items-center w-full h-full bg-red-500">
        <span className=" w-80 h-96 rounded-xl p-4  bg-white">
          <div className=" flex justify-center text-3xl">Hello</div>

          <div className="space-y-4 flex flex-col">
            <SignupInput icon={<Mail />} placeholder={"Tittle"} type={"text"} />
            <SignupInput icon={<Beer />} placeholder={"Types"} type={"text"} />
            <SignupInput icon={<Link />} placeholder={"links"} type={"link"} />
          </div>

          <div>
            <button></button>
          </div>
        </span>
      </div>
    </>
  );
}
