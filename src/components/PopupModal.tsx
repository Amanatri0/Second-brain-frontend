import { Beer, Link, Mail, X } from "lucide-react";
import { SignupInput } from "../SignupPage/SignupInputs";

type ModalProps = {
  open?: boolean;
  onClose?: () => void;
};

export function Modal({ open, onClose }: ModalProps) {
  return (
    <>
      {open && (
        <div className=" flex overflow-y-auto overflow-x-auto fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full opacity-100 backdrop-blur-sm ">
          <div className=" w-80 h-96 rounded-xl p-4 bg-white space-y-6">
            <div className=" flex relative justify-center items-center text-3xl ">
              Hello
              <button
                onClick={onClose}
                className="absolute right-0  rounded-xl cursor-pointer transition duration-300 ease-linear hover:translate-y-0.5 focus:ring-2 ring-red-200 hover:bg-blue-200 shadow-lg"
              >
                <X className="size-8 p-0.5" />
              </button>
            </div>

            <div className="space-y-4 flex flex-col">
              <SignupInput
                icon={<Mail />}
                placeholder={"Tittle"}
                type={"text"}
              />
              <SignupInput
                icon={<Beer />}
                placeholder={"Types"}
                type={"text"}
              />
              <SignupInput
                icon={<Link />}
                placeholder={"links"}
                type={"link"}
              />
            </div>

            <div>
              <select className="p-2 rounded-xl w-36 border-2 border-gray-500 cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl ">
                <option value="">Youtube</option>
                <option value="">Twitter</option>
                <option value="">Instagram</option>
                <option value="">Documents</option>
                <option value="">Others</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button
                onClick={onClose}
                className=" bg-indigo-500 py-2.5 px-9 rounded-md transition ease-in-out border-2 focus:ring-2 duration-300 hover:-translate-y-1 hover:shadow-xl "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
