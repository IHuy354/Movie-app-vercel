import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { motion } from "motion/react";
import type { Movie } from "../../../types/movie";
import { getPosterUrl } from "../../../utils/image";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getMediaVideos } from "../../../services/api";
import { getYoutubeEmbedUrl } from "../../../utils/youtube";
import type { Swiper as SwiperInstance } from "swiper";

const Banner = ({ movies }: { movies: Movie[] }) => {
  const navigate = useNavigate();
  const moviesData = movies.slice(0, 5);

  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [loadingTrailer, setLoadingTrailer] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleWatchTrailer = async (movieId: number) => {
    setLoadingTrailer(true);
    try {
      const res = await getMediaVideos("movie", movieId);
      const key = res?.results?.[0]?.key ?? null;
      if (key) {
        setTrailerKey(key);
        setShowTrailer(true);
      } else {
        return;
      }
    } catch (err) {
      return err;
    } finally {
      setLoadingTrailer(false);
    }
  };

  const handleSlideChange = (swiper: SwiperInstance) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className=" -mt-25 sm:-mt-35 overflow-hidden lg:h-170 xl:h-auto ">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        speed={400}
        className="w-full h-full"
        onRealIndexChange={handleSlideChange}
      >
        {moviesData.map((movie, index) => (
          <SwiperSlide key={movie.id}>
            <div className="relative h-90 md:h-auto">
              {movie.backdrop_path && (
                <div className="relative">
                  <img
                    src={getPosterUrl(movie.backdrop_path)}
                    alt={movie.title}
                    className="w-full object-cover h-auto"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 via-10% to-transparent" />
                </div>
              )}

              {/* On backgr  */}
              <div className="absolute inset-0 flex items-center px-7 md:px-20 gap-15 ">
                <div>
                  {activeIndex === index && (
                    <>
                      <motion.h1
                        initial={{ y: -60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl mt-5 lg:text-6xl xl:text-[87px] font-bold"
                      >
                        {movie.title}
                      </motion.h1>

                      <motion.p
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="   font-medium text-sm sm:text-base lg:text-[20px] xl:text-2xl mt-4 xl:15  line-clamp-3 lg:line-clamp-none"
                      >
                        {movie.overview}
                      </motion.p>

                      <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mt-15 flex gap-5"
                      >
                        <button
                          onClick={() => navigate(`movie/${movie.id}`)}
                          className=" cursor-pointer bg-[#fe0000] rounded-3xl px-4 py-0  lg:px-9 lg:py-1 font-medium text-[16px] lg:text-[23px] shadow-[1px_1px_21px_3px_#fe0000] hover:shadow-[1px_1px_27px_7px_#fe0000] duration-300"
                        >
                          Watch now
                        </button>

                        <button
                          onClick={() => handleWatchTrailer(movie.id)}
                          className="cursor-pointer border-2 rounded-3xl px-5 lg:px-9 py-1 font-medium text-base lg:text-[23px] hover:text-red-600 hover:bg-amber-50 hover:border-white duration-300 flex items-center gap-3"
                        >
                          {loadingTrailer ? "Loading..." : "Watch trailer"}
                        </button>
                      </motion.div>
                    </>
                  )}
                </div>

                {movie.poster_path && (
                  <>
                    {activeIndex === index && (
                      <motion.img
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        src={getPosterUrl(movie.poster_path)}
                        alt={movie.title}
                        className="hidden lg:block mt-30 xl:mt-0 lg:w-65 xl:w-115 rounded-3xl mr-10"
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showTrailer && trailerKey && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShowTrailer(false)}
        >
          <div onClick={(e) => e.stopPropagation()} className="w-180 h-120">
            <iframe
              src={getYoutubeEmbedUrl(trailerKey)}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
