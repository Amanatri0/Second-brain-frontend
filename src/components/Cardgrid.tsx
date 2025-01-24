import { Trash2 } from "lucide-react";
import { Button } from "./Button";
// import axios from "axios";
// import { BACKEND_URL } from "../env";
// import { ContentData } from "../hooks/ContentFromBE";

type CardProps = {
  id: string;
  title: string;
  link?: string;
  text?: string;
};

export function Cardgrid({ title, link, text }: CardProps) {
  return (
    <>
      <div className=" h-72 w-[450px] gap-2 rounded-xl border-[1px] border-stone-300 shadow-stone-700 shadow-md object-cover">
        <div className="flex justify-between p-3 ">
          <span className="text-2xl ml-5">{title}</span>
          <div className="flex items-center gap-1 mr-2 ">
            {/* <Button
              size={"icon"}
              variant={"ghost"}
              className="hover:bg-indigo-400 hover:text-indigo-50"
            >
              <Share />
            </Button> */}
            <Button
              variant={"ghost"}
              size={"icon"}
              className="hover:bg-stone-900 hover:text-red-500"
              // onClick={deletPost}
            >
              <Trash2 />
            </Button>
          </div>
        </div>
        <div className="h-52 mx-3 flex justify-center overflow-auto  ">
          {link ? (
            <iframe
              className=" w-full border-2 rounded-xl drop-shadow-[0_0_3px_rgba(0,0,0,5)]"
              src={link}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            text
          )}
        </div>
      </div>
    </>
  );
}
