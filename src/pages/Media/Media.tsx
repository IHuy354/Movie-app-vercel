import { useParams, useSearchParams } from "react-router-dom";
import { useMediaSearch } from "../../hooks/useMediaSearch";
import MovieComponent from "../../components/MovieTV/MovieTV";
import type { MediaType } from "../../services/api";
import LoadingScreen from "../../components/Loading/LoadingScreen";

const Media = () => {
  const { mediaType } = useParams<{ mediaType: string }>();
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const typeChil = mediaType === "movie" ? "Movies" : "TV Series";

  const validMediaType =
    mediaType === "movie" || mediaType === "tv"
      ? (mediaType as MediaType)
      : undefined;

  const {
    data,
    isLoading,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
    loadMore,
    handleSearch,
    search,
  } = useMediaSearch({
    type: validMediaType,
    category: "popular",
    initialSearch,
  });

  if (isLoading) return <LoadingScreen />;

  return (
    <MovieComponent
      title={typeChil}
      data={data}
      onLoadMore={loadMore}
      hasMore={hasNextPage}
      isLoadingMore={isFetchingNextPage}
      isFetching={isFetching}
      type={validMediaType}
      search={search}
      initialSearchQuery={initialSearch}
      onSearch={handleSearch}
    />
  );
};

export default Media;
