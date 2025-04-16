import { type ComponentProps } from "react";

import Svg from "@/assets/icons/Svg";

interface Props extends ComponentProps<typeof Svg> {
  color?: string;
  strokeWidth?: number;
}

export default function SearchIcon({
  color = "#05141F",
  strokeWidth = 2,
  ...props
}: Props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <circle
        cx="10.5882"
        cy="10.5882"
        r="6.58824"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M15.2942 15.2941L20.0001 20"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}
