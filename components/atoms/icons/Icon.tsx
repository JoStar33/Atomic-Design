import * as icons from '@/assets/icons/index';
import { colors } from '@/styles/theme/theme';
import { SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGElement> {
  icon: keyof typeof icons;
  size?: number;
  themeColor?: keyof typeof colors;
}

const Icon = ({
  icon,
  size,
  themeColor = "CYAN9",
  ...props
}: IconProps) => {
  const SVGIcon = icons[icon];

  return (
    <SVGIcon
      width={size}
      height={size}
      fill={colors[themeColor]}
      {...props}
    />
  );
}

// 기본값은 20
Icon.defaultProps = {
  size: 20,
};

export default Icon