import { getPosterUrl } from "../../../utils/image";
import type { MovieDetailHeaderProps } from "./libs/types";

const MovieDetailHeader = ({ dataDetail, casts }: MovieDetailHeaderProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Backdrop */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={getPosterUrl(dataDetail?.backdrop_path, "background")}
        alt={dataDetail?.title || "Movie Backdrop"}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-16 pt-24 lg:pt-32 pb-12 ">
        {/* Poster */}
        <div className="hidden lg:block shrink-0">
          <img
            className="w-65 xl:w-[320px] rounded-3xl object-cover shadow-lg"
            src={getPosterUrl(dataDetail?.poster_path, "img")}
            alt={dataDetail?.title}
          />
        </div>

        {/* Info */}
        <div className=" mt-15 lg:mt-0">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl xl:text-6xl leading-tight">
            {dataDetail?.title || dataDetail?.original_name}
          </h1>

          {/* Genres */}
          <div className="flex flex-wrap gap-2 mt-4">
            {dataDetail?.genres?.map((genre) => (
              <span
                key={genre.id}
                className="text-xs sm:text-sm px-3 py-1 border border-white/60 rounded-full bg-black/40"
              >
                {genre.name}
              </span>
            ))}
          </div>

          {/* Overview */}
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-white/90 line-clamp-4 sm:line-clamp-none">
            {dataDetail?.overview}
          </p>

          {/* Casts */}
          {casts && casts?.length > 0 && (
            <div className="mt-8">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Casts</h2>

              <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 max-w-3xl">
                {casts?.map((cast) => (
                  <div key={cast.id} className="flex flex-col items-center">
                    <img
                      src={getPosterUrl(cast?.profile_path)}
                      alt={cast?.name}
                      className=" max-w-25 xl:max-w-32.5 aspect-2/3 rounded-xl object-cover"
                    />
                    <p className="mt-2 text-xs sm:text-sm line-clamp-2 mb-2">
                      {cast?.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailHeader;
