type VideGridItemsProps = {
  id: string;
  tittle: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

export function VideoGridItems({
  id,
  //   tittle,
  //   channel,
  duration,
  //   postedAt,
  thumbnailUrl,
}: //   videoUrl,
//   views,
VideGridItemsProps) {
  return (
    <div className="flex flex-col gap-2">
      <a href={`/watch?v=${id}`} className="relative">
        <img
          src={thumbnailUrl}
          className="block w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
          {duration}
        </div>
      </a>
    </div>
  );
}
