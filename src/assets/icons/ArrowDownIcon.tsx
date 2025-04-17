import { type ComponentProps } from "react";

import Svg from "@/assets/icons/Svg";

interface Props extends ComponentProps<typeof Svg> {
  color?: string;
}

export default function ArrowDownIcon({ color = "#05141F", ...props }: Props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M19.0711 8.41421L17.6569 7L12 12.6569L6.34317 7L4.92896 8.41421L12 15.4853L19.0711 8.41421Z"
        fill={color}
      />
    </Svg>
  );
}
