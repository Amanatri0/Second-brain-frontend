import { Banknote, Home, Link, NotebookText } from "lucide-react";
import { buttonsStyle } from "./Button";
import { ElementType, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function Sidebar() {
  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto pb-4 flex flex-col ml-1 `}
      >
        <SmallsidebarItems Icon={Home} tittle="Home" url="/" />
        <SmallsidebarItems Icon={Banknote} tittle="Subscription" url="/" />
        <SmallsidebarItems Icon={Link} tittle="Tweet" url="/" />
        <SmallsidebarItems Icon={NotebookText} tittle="Document" url="/" />
      </aside>

      {/* <aside
        className={`w-40 lg:sticky absolute top-0 overflow-y-auto pb-4 flex flex-col gap-4 pl-4 md:hidden`}
      >
        <LargesidebarSection>
          <LargesidebarItems isActive Icon={Home} tittle="Home" url="/" />
          <LargesidebarItems Icon={Home} tittle="Home" url="/" />
          <LargesidebarItems Icon={Home} tittle="Home" url="/" />
        </LargesidebarSection>
      </aside> */}
    </>
  );
}

type SmallsidebarItemsProps = {
  Icon: ElementType;
  tittle: string;
  url: string;
};

function SmallsidebarItems({ Icon, tittle, url }: SmallsidebarItemsProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonsStyle({ variant: "ghost" }),
        "py-2 ml-3 rounded-lg flex flex-col gap-1 items-center"
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{tittle}</div>
    </a>
  );
}

// For large Side bar Section

type LargesidebarSectionProps = {
  children: ReactNode;
  tittle?: string;
};

function LargesidebarSection({ children, tittle }: LargesidebarSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      {tittle && <div className="ml-4 mt-2 text-lg mb-1"> {tittle} </div>}
      {children}
    </div>
  );
}

type LargesidebarItemsProps = {
  Icon: ElementType;
  tittle: string;
  url: string;
  isActive?: boolean;
};

function LargesidebarItems({
  Icon,
  tittle,
  url,
  isActive = false,
}: LargesidebarItemsProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonsStyle({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 pt-3 pl-3 hover:bg-neutral-600 hover:text-white hover:translate-x-6 transition-transform duration-[450ms] ease-in-out hover:rounded-l-full ${
          isActive
            ? "font-bold bg-neutral-600 text-white rounded-l-full translate-x-6 transition-transform duration-300 ease-in-out"
            : undefined
        } `
      )}
    >
      <Icon className="w-5 h-5" />
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {tittle}
      </div>
    </a>
  );
}
