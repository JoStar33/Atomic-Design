import axios from "axios";

const movieAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MOVIE_API, // 기본 서버 주소 입력
  timeout: JSON.parse(process.env.NEXT_PUBLIC_AXIOS_TIMEOUT as string),
  headers: {
    "Content-type": "application/json",
  },
});

export { movieAxios };

