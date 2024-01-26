import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
interface ITheme {
  children: React.ReactNode;
}

const colors: DefaultTheme = {
  black1: "#000000",
  black2: "#222222",
  black3: "#333333",
  red1: "#FF1E1E",
  red2: "#FF0000",
  gray1: "#888888",
  gray2: "#ececec",
  base: "#41B6FB",
  white: "#FFFFFF",
  placeholder: "#999",
  main: "#BBFF00",
};

export default function Theme({ children }: ITheme) {
  return (
    <ThemeProvider
      theme={{
        colors,
      }}
    >
      {children}
    </ThemeProvider>
  );
}
