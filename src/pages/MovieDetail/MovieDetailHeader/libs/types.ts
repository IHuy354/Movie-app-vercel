// Genre
export type Genre = {
  id: number;
  name: string;
};

// Movie / TV detail (dùng chung)
export type MediaDetail = {
  id?: number;
  title?: string;
  original_name?: string;
  overview?: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  genres?: Genre[];
};

// Cast
export type Cast = {
  id: number;
  name: string;
  profile_path?: string | null;
};

export type MovieDetailHeaderProps = {
  dataDetail?: MediaDetail;
  casts?: Cast[];
};
