import { useNavigate } from "react-router-dom";

export const useMediaNavigation = () => {
  const navigate = useNavigate();

  const goToDetail = (mediaType: string | undefined, id: number) => {
    navigate(`/${mediaType}/${id}`);
  };
  const goToSearch = (
    mediaType: "movie" | "tv" | undefined,
    keyword: string,
  ) => {
    navigate(`/${mediaType}?search=${keyword}`);
  };

  return { goToDetail, goToSearch };
};
