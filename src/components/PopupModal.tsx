import { Link, Mail, X } from "lucide-react";
import { Inputstyle } from "../SignupPage/InputsStyle";
import { useRef, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../env";

type ModalProps = {
  open?: boolean;
  onClose?: () => void;
};

enum ContentType {
  Youtube = "Youtube",
  Twitter = "Twitter",
  Instagram = "Instagram",
  Documentation = "Documentation",
  Others = "Others",
}

export function Modal({ open, onClose }: ModalProps) {
  const tittleRef = useRef<HTMLInputElement>();
  const linksRef = useRef<HTMLInputElement>();

  const [type, setType] = useState(ContentType.Youtube);

  async function content() {
    const title = tittleRef.current?.value;

    const link = linksRef.current?.value;

    try {
      await axios.post(
        `${BACKEND_URL}/content/created`,
        {
          title,
          link,
          type,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      alert("Content posted");
    } catch (error) {
      console.error("Cannot post the conent", error);
    }
  }

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
              <Inputstyle
                reference={tittleRef}
                icon={<Mail />}
                placeholder={"Tittle"}
                type={"text"}
              />
              {/* <Inputstyle icon={<Beer />} placeholder={"Types"} type={"text"} /> */}
              <Inputstyle
                reference={linksRef}
                icon={<Link />}
                placeholder={"links"}
                type={"link"}
              />
            </div>

            <div>
              <select className="p-2 rounded-xl w-36 border-2 border-gray-500 cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl ">
                <option onClick={() => setType(ContentType.Youtube)} value="">
                  Youtube
                </option>
                <option onClick={() => setType(ContentType.Twitter)} value="">
                  Twitter
                </option>
                <option onClick={() => setType(ContentType.Instagram)} value="">
                  Instagram
                </option>
                <option
                  onClick={() => setType(ContentType.Documentation)}
                  value=""
                >
                  Documents
                </option>
                <option onClick={() => setType(ContentType.Others)} value="">
                  Others
                </option>
              </select>
            </div>
            <div className="flex justify-center">
              <button
                onClick={content}
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
