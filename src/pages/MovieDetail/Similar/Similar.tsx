import type { SimilarProps } from "../../Home/MovieRow/libs/types";
import MovieRow from "../../Home/MovieRow/MovieRow";

const Similar = ({ similarData, mediaType }:SimilarProps) => {
  return (
    <>
      <div className="pb-10">
        <MovieRow title="Similar" movies={similarData} mediaType = {mediaType} />
      </div>
    </>
  );
};

export default Similar;
