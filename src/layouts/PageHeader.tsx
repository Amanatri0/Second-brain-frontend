import { ArrowLeft, Menu, Plus, Search, Share2 } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";

// header bar for second brain
export function PageHeader() {
  const [showSeacrh, setShowSearch] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between items-center pt-2 mb-6 mx-4">
      {/* buttons Section-1 left side */}
      <div
        className={`gap-4 items-center flex-shrink-0  ${
          showSeacrh ? "hidden" : "flex"
        }`}
      >
        <Button variant={"ghost"} size={"icon"}>
          <Menu />
        </Button>
        <a href="/" className="flex">
          <img
            className="w-8 h-7"
            src="https://media.printables.com/media/prints/839233/images/6464341_dc80c701-6104-409c-b0d7-1935d829c62a_6b44e161-112e-4ae2-83b2-e66edafe1511/thumbs/inside/320x240/png/mozek.webp"
            alt="Brain"
          />
          <span className="text-sky-700 pl-1">
            <b>Second Brain</b>
          </span>
        </a>
      </div>

      {/* SearchBar section-2 middle part */}
      <form
        className={` gap-4 flex-grow justify-center ${
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
            <ArrowLeft className="w-5 h-5 " />
          </Button>
        )}
        <div className="flex flex-grow max-w-[500px] max-h-[50px] py-2 ">
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
      <div className={`flex-shrink-0 ${showSeacrh ? "hidden" : "flex"}`}>
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
