import styles from "./common_row_card.module.scss";

interface CommonRowCardProps {
  image: string;
  title: string;
  description: string;
}

const CommonRowCard = ({ image, title, description }: CommonRowCardProps) => {
  return (
    <div className={styles.row_container}>
      <img className={styles.card_image} src={image} />
      <div className={styles.card_description}>
        <p className={styles.card_text}>{title}</p>
        <p className={styles.card_text}>{description}</p>
      </div>
    </div>
  );
};

export default CommonRowCard;
