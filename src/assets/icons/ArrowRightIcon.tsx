import { type ComponentProps } from "react";

import Svg from "@/assets/icons/Svg";

interface Props extends ComponentProps<typeof Svg> {
  color?: string;
}

export default function ArrowRightIcon({ color = "#05141F", ...props }: Props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M8.41421 4.92896L7 6.34317L12.6569 12L7 17.6569L8.41421 19.0711L15.4853 12L8.41421 4.92896Z"
        fill={color}
      />
    </Svg>
  );
}
