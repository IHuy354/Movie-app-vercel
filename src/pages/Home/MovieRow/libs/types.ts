import type { Movie } from "../../../../types/movie";

type MovieRowProps = {
  title: string;
  movies: Movie[];
  mediaType: string | undefined;
};

type SimilarProps = {
  similarData: Movie[];
  mediaType: string | undefined;
};

export type { MovieRowProps, SimilarProps };
