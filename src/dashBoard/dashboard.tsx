import { Cardgrid } from "../components/Cardgrid";
import { Sidebar } from "../components/SideBar";
import { ContentData } from "../hooks/ContentFromBE";

import { PageHeader } from "../layouts/PageHeader";

export default function Dashboard() {
  const content = ContentData();
  console.log(content._id);

  return (
    <>
      <div className="max-h-screen flex flex-col justify-center">
        <PageHeader />
        <div className="grid grid-cols-[auto,1fr] overflow-auto ">
          <Sidebar />
          <div className="overflow-x-hidden px-4 pb-4">
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(400px,1fr))] ">
              {JSON.stringify(content)}
              {content.map((content) => (
                <Cardgrid title={content.title} text={content.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
