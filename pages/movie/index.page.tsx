import SearchInput from "@/components/atoms/inputs/SearchInput/SearchInput";
import CommonRowCard from "@/components/molecules/cards/CommonRowCard/CommonRowCard";
import { useMovieQuery } from "@/hooks/movies/useMovieQuery";
import { useRef } from "react";
import styles from "./moviepage.module.scss";

const MoviePage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { data, refetch } = useMovieQuery(() => {
    if (!inputRef.current) return "";
    return inputRef.current.value;
  });
  const handleSearch = () => {
    refetch();
  };
  return (
    <div className={styles.container}>
      <SearchInput inputRef={inputRef} handleClick={handleSearch} />
      <div className={styles.card_container}>
        {data?.movies.map((movie, _id) => (
          <CommonRowCard
            key={_id}
            image={movie.medium_cover_image}
            title={movie.title}
            description={String(movie.year)}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
