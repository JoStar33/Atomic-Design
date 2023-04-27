import TextBox from "@/components/atomic/commons/TextBox/TextBox";
import Image from "next/image";
import styles from './moviecard.module.scss';

interface Props {
  movie: Movie;
  textColor: string;
}

const MovieCard = ({movie, textColor}: Props) => {
  return (
    <div className={styles.movie_card}>
      <figure>
        <Image src={movie.image} fill alt={movie.name} style={{objectFit: "cover"}}/>
      </figure>
      <TextBox text={movie.name} textColor={textColor}/>
    </div>
  );
};

export default MovieCard;