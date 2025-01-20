import { Sidebar } from "./components/SideBar";
import { VideoGridItems } from "./components/VideGridItems";
import { videos } from "./data/data";
import { PageHeader } from "./layouts/PageHeader";

export default function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <Sidebar />
        <div className="overflow-x-hidden px-8 pb-4">
          {/* <div className="sticky top-0 bg-white z-10 pb-4"> */}
          {/* </div> */}
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {videos.map((video) => (
              <VideoGridItems tittle={"something"} key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
