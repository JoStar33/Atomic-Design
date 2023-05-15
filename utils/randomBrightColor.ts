export const randomBrightColor = (): string => {
  let color_r = Math.floor(Math.random() * 127 + 128);
  let color_g = Math.floor(Math.random() * 127 + 128);
  let color_b = Math.floor(Math.random() * 127 + 128);
  return `rgba(${color_r}, ${color_g}, ${color_b}, 1)`;
}