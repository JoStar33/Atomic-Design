const BASE_URL = "/api/v2";

/**
 * 
 * @param searchInfo 영화 검색내용
 * @returns 영화 검색정보 url
 */
export const GET_MOVIE_BY_SEARCH_INFO = (searchInfo: string) =>
  `${BASE_URL}/list_movies.json?query_term=${searchInfo}`;
