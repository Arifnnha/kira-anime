import VideoPlayer from "@/components/utilities/VideoPlayer";
import { getAnimeResponse } from "@/libs/api-list";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-color-primary text-xl">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary text-md ms:text-sm md:text-xl overflow-x-auto">
        <div className="w-28 flex flex-col justify-center items-center rounded border border-color-primary p-2 md:p-3 sm:p-1">
          <h3 className="text-xl md:text-xl sm:text-sm">Peringkat</h3>
          <p className="text-sm md:text-md sm:text-xs">{anime.data.rank}</p>
        </div>
        <div className="w-28 flex flex-col justify-center items-center rounded border border-color-primary p-2 md:p-3 sm:p-1">
          <h3 className="text-xl md:text-xl sm:text-sm">Skor</h3>
          <p className="text-sm md:text-md sm:text-xs">{anime.data.score}</p>
        </div>
        <div className="w-28 flex flex-col justify-center items-center rounded border border-color-primary p-2 md:p-3 sm:p-1">
          <h3 className="text-xl md:text-xl sm:text-sm">Episode</h3>
          <p className="text-sm md:text-md sm:text-xs">{anime.data.episodes}</p>
        </div>
        <div className="w-28 flex flex-col justify-center items-center rounded border border-color-primary p-2 md:p-3 sm:p-1">
          <h3 className="text-xl md:text-xl sm:text-sm">Durasi</h3>
          <p className="text-sm md:text-md sm:text-xs">{anime.data.duration}</p>
        </div>
        <div className="w-28 flex flex-col justify-center items-center rounded border border-color-primary p-2 md:p-3 sm:p-1">
          <h3 className="text-xl md:text-xl sm:text-sm">Status</h3>
          <p className="text-sm md:text-md sm:text-xs">{anime.data.status}</p>
        </div>
        <div className="w-28 flex flex-col justify-center items-center rounded border border-color-primary p-2 md:p-3 sm:p-1">
          <h3 className="text-xl md:text-xl sm:text-sm">Rating</h3>
          <p className="text-sm md:text-md sm:text-xs">{anime.data.rating}</p>
        </div>
        <div className="w-28 flex flex-col justify-center items-center rounded border border-color-primary p-2 md:p-3 sm:p-1">
          <h3 className="text-xl md:text-xl sm:text-sm">Favorites</h3>
          <p className="text-sm md:text-md sm:text-xs">
            {anime.data.favorites}
          </p>
        </div>
      </div>

      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-3 text-color-primary">
        <Image
          src={anime.data.images.jpg.image_url}
          alt={anime.data.title}
          width={350}
          height={350}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-sm sm:text-xl md:text-xl">
          {anime.data.synopsis}
        </p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
