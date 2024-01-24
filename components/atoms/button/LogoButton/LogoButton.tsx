import Image, { StaticImageData } from "next/image";
import styles from "./logobutton.module.scss";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  handleClick: () => void;
  children: React.ReactNode;
  logo: StaticImageData;
}

export default React.forwardRef(function LogoButton(
  { logo, children, handleClick, ...rest }: Props,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      className={styles.logobutton}
      onClick={handleClick}
      {...rest}
    >
      <figure>
        <Image src={logo} alt={""} fill style={{ objectFit: "cover" }} />
      </figure>
      {children}
    </button>
  );
});
