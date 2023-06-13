import { getMoviesBySearchInfo } from "@/apis/movie/movies";
import { useQuery } from "react-query";

export const useMovieQuery = (searchInfo: () => string) => {
  return useQuery(
    ["movie"],
    () => getMoviesBySearchInfo(searchInfo()),
    {
      enabled: false,
      onSuccess(data) {
        console.log(data);
      }
    }
  );
};
