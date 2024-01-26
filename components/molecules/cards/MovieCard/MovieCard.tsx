import TextBox from "@/components/atoms/commons/TextBox/TextBox";
import Image from "next/image";
import styles from "./moviecard.module.scss";
import { Card } from "@/types/card";

interface Props {
  movie: Card;
  textColor: string;
}

export default function MovieCard({ movie, textColor }: Props) {
  return (
    <div className={styles.movie_card}>
      <figure>
        <Image
          src={movie.image as string}
          fill
          alt={movie.title}
          style={{ objectFit: "cover" }}
        />
      </figure>
      <TextBox textColor={textColor}>{movie.title}</TextBox>
    </div>
  );
}
