import React from "react";
import Image from "next/image";
import styles from "./usericon.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  iconClick: () => void;
}

export default React.forwardRef(function UserIcon(
  { image, iconClick, ...rest }: Props,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className={styles.user_icon} onClick={iconClick} {...rest}>
      <figure>
        <Image
          src={image}
          alt={image}
          fill
          style={{ objectFit: "cover" }}
        ></Image>
      </figure>
    </div>
  );
});
