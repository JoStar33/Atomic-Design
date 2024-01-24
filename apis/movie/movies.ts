import { movieAxios } from "@/apis/axios/customAxios";
import { GET_MOVIE_BY_SEARCH_INFO } from "@/constants/apiUrls";
import { GettedMovieData } from "@/types/movie";
import { AxiosResponse } from "axios";

const getMoviesBySearchInfo = async (
  searchInfo: string
): Promise<GettedMovieData> => {
  const response: AxiosResponse<GettedMovieData> = await movieAxios.get(
    GET_MOVIE_BY_SEARCH_INFO(searchInfo)
  );
  return response.data;
};

export { getMoviesBySearchInfo };
