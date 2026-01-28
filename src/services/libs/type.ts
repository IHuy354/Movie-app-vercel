export type MediaType = "movie" | "tv";

/* ===== Common ===== */
export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

/* ===== Detail ===== */
export interface MediaDetail {
  id: number;
  title?: string; // movie
  name?: string; // tv
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date?: string;
}

/* ===== Similar ===== */
export interface SimilarMedia {
  id: number;
  title?: string;
  name?: string;
  poster_path: string | null;
}

/* ===== Cast ===== */
export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface CreditsResponse {
  id: number;
  cast: Cast[];
  crew: unknown[];
}

/* ===== Video ===== */
export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

/* ===== Final response for detail page ===== */
export interface MediaDetailResponse {
  detail: MediaDetail;
  similar: SimilarMedia[];
  casts: Cast[];
  videos: Video[];
}
