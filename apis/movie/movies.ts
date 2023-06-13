import { movieAxios } from "@/apis/axios/customAxios";
import { GET_MOVIE_BY_SEARCH_INFO } from "@/constants/apiUrls";
import { GettedMovieData } from "@/types/movie";

const getMoviesBySearchInfo = (searchInfo: string) => {
  return movieAxios.get(GET_MOVIE_BY_SEARCH_INFO(searchInfo))
  .then((res) => res.data.data)
  .then((data: GettedMovieData) => data);
};

export { getMoviesBySearchInfo };

