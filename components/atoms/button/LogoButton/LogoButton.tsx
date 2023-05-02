import Image, { StaticImageData } from "next/image";
import styles from './logobutton.module.scss';

interface Props {
  handleClick: () => void;
  label: string;
  logo: StaticImageData;
}

const LogoButton = ({logo, label, handleClick}: Props) => {
  return (
    <button className={styles.logobutton} onClick={handleClick}>
      <figure>
        <Image src={logo} alt={''} fill style={{objectFit: "cover"}}/>
      </figure>
      {
        label
      }
    </button>
  );
};

export default LogoButton;