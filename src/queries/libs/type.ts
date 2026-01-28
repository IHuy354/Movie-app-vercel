

export interface MediaDetail {
  id: number;
  title?: string;        // movie
  name?: string;         // tv
  overview: string;
  backdrop_path: string | null;
  poster_path: string | null;
  release_date?: string;
}
export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}
export interface Video {
  id: string;
  key: string;
  name: string;
  site: "YouTube" | string;
  type: "Trailer" | "Teaser" | string;
}
export interface SimilarMedia {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
}

// queries/libs/type.ts
export interface MediaDetailResponse {
  detail: MediaDetail;
  similar: SimilarMedia[];
  casts: Cast[];
  videos: Video[];
}