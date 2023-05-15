import { randomBrightColor } from "@/utils/randomBrightColor";

const useColorGenerator = (chartLength: number) => {
  const colorGenerator = () => {
    const randomColors = [];
    for(let i = 0; i < chartLength; i++) {
      randomColors.push(randomBrightColor());
    }
    return randomColors;
  }
  const randomColors = colorGenerator();
  return {
    randomColors
  };
};

export default useColorGenerator;