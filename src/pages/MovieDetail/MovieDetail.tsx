import Similar from "./Similar/Similar";
import { useParams } from "react-router-dom";
import MovieDetailHeader from "./MovieDetailHeader/MovieDetailHeader";
import { useMediaDetail } from "../../queries/movies";
import VideoYtb from "./Video/VideoYtb";
import LoadingScreen from "../../components/Loading/LoadingScreen";

type Param = {
  id: string;
  mediaType: "movie" | "tv";
};

const MovieDetail = () => {
  const { id, mediaType } = useParams<Param>();
  const numberId = id ? Number(id) : undefined;

  const {
    data: mediaData,
    isLoading,
    isError,
  } = useMediaDetail(mediaType, numberId);

  if (isLoading) {
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  }
  
  if (isError || !mediaData) {
    return <div className="text-center">Error loading data</div>;
  }

  const { detail, casts, videos, similar } = mediaData;

  return (
    <div className="-mt-27">
      <MovieDetailHeader dataDetail={detail} casts={casts} />
      <VideoYtb videoData={videos} />
      <Similar similarData={similar} mediaType={mediaType} />
    </div>
  );
};

export default MovieDetail;