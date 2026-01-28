import type { Movie } from "../../../types/movie";

export interface MovieMediaProps {
  title: string;
  data: Movie[];
  onLoadMore: () => void;
  hasMore: boolean;
  isLoadingMore: boolean;
  isFetching: boolean;
  type?: "movie" | "tv";
  initialSearchQuery: string;
  search: string;
  onSearch: (query: string) => void;
}
