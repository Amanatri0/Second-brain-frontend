import { ArrowLeft, Menu, Plus, Search, Share2, X } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";

// header bar for second brain
export function PageHeader() {
  const [showSeacrh, setShowSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" flex gap-10 lg:gap-20 justify-between items-center pt-2 mb-6 mx-4">
      {/* buttons Section-1 left side */}
      <div
        className={`gap-4 items-center flex-shrink-0 lg:ml-32 block ${
          showSeacrh ? "hidden" : "flex"
        }`}
      >
        <Button className="lg:hidden" variant={"ghost"} size={"icon"}>
          <Menu
            className={`cursor-pointer transition-all  ${
              isOpen ? "hidden" : "block"
            }`}
            onClick={() => setIsOpen(true)}
          />
          <div
            className={`fixed flex justify-end top-0 left-0 h-full w-40 rounded-r-lg  shadow-inner shadow-secondary-text bg-neutral-100 transition-transform duration-500 ease-in-out z-[999] ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <X
              className="cursor-pointer m-2 mt-3 hover:rounded-full hover:bg-slate-900 hover:text-secondary w-7 h-7  "
              onClick={() => setIsOpen(false)}
            />
          </div>
        </Button>
        <span className="text-sky-700 flex">
          <a href="/" className="flex items-center text-2xl space-x-2">
            <img
              className={`size-12`}
              src="https://media.printables.com/media/prints/839233/images/6464341_dc80c701-6104-409c-b0d7-1935d829c62a_6b44e161-112e-4ae2-83b2-e66edafe1511/thumbs/inside/320x240/png/mozek.webp"
              alt="Brain"
            />
            <b>Second Brain</b>
          </a>
        </span>
      </div>

      {/* SearchBar section-2 middle part */}
      <form
        className={` gap-1 flex-grow justify-center items-center  ${
          showSeacrh ? "flex" : "hidden md:flex"
        } `}
      >
        {showSeacrh && (
          <Button
            onClick={() => setShowSearch(false)}
            size={"icon"}
            variant={"ghost"}
            className="mt-1 "
          >
            <ArrowLeft className="size-7 " />
          </Button>
        )}
        <div className="flex flex-grow lg:max-w-[600px] max-h-[50px] ">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border-2 border-stone-300 shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-gray-400 outline-none"
          />
          <Button className=" px-3 rounded-r-full border border-gray-200 flex-shrink-0 ">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </form>

      {/* Buttons section-3  right side*/}
      <div
        className={`flex-shrink-0 lg:mr-14 ${showSeacrh ? "hidden" : "flex"}`}
      >
        <Button
          onClick={() => setShowSearch(true)}
          size={"icon"}
          variant={"ghost"}
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <Share2 />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <Plus />
        </Button>
      </div>
    </div>
  );
}
