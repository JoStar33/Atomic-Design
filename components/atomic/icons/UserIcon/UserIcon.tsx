import React from 'react';
import Image from 'next/image';
import styles from './usericon.module.scss';

interface Props {
  image: string;
  iconClick: () => void;
}

const UserIcon = ({image, iconClick}: Props) => {
  return (
    <div className={styles.user_icon} onClick={iconClick}>
      <figure>
        <Image src={image} alt={image} fill style={{objectFit: "cover"}}></Image>
      </figure>
    </div>
  );
};

export default UserIcon;