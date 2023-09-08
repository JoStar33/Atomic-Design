import * as icons from '@/assets/icons/index';
import { colors } from '@/styles/theme/theme';
import { SVGAttributes } from 'react';

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

export type ColorType = keyof typeof colors;
export const colorTypes: ColorType[] = Object.keys(
  colors
) as ColorType[];

export interface IconProps extends SVGAttributes<SVGElement> {
  icon: IconType;
  size?: number;
  themeColor?: ColorType;
}

const Icon = ({
  icon,
  size,
  themeColor,
  ...props
}: IconProps) => {
  const SVGIcon = icons[icon];
  const color = themeColor ? colors[themeColor] : undefined;

  return (
    <SVGIcon
      width={size}
      height={size}
      fill={color}
      {...props}
    />
  );
}

// 기본값은 20
Icon.defaultProps = {
  size: 20,
};

export default Icon