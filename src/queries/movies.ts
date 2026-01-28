import { useQuery } from "@tanstack/react-query";
import {
  getMediaCredits,
  getMediaDetail,
  getMediaList,
  getMediaSimilar,
  getMediaVideos,
} from "../services/api";
import type { MediaDetailResponse } from "./libs/type";

export type MediaType = "movie" | "tv";
export type MediaCategory = "popular" | "top_rated";
//  new
export const useMediaList = (
  type: MediaType ,
  category: MediaCategory,
  page?: number,
) => {
  return useQuery({
    queryKey: ["media", type, category, page],
    queryFn: () => getMediaList(type, category, page),
  });
};

export const useMediaDetail = (mediaType?: MediaType, id?: number) => {
  return useQuery<MediaDetailResponse>({
    queryKey: ["media-detail", mediaType, id],
    enabled: !!id && !!mediaType,
    queryFn: async () => {
      const [detail, similar, casts, videos] = await Promise.all([
        getMediaDetail(mediaType!, id!),
        getMediaSimilar(mediaType!, id!),
        getMediaCredits(mediaType!, id!),
        getMediaVideos(mediaType!, id!),
      ]);

      return {
        detail,          
        similar: similar.results,
        casts: casts.cast.slice(0, 5),
        videos: videos.results,
      };
    },
  });
};


