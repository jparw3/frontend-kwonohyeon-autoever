import { type ComponentProps } from "react";
import Svg from "@/assets/icons/Svg";

interface Props extends ComponentProps<typeof Svg> {
  color?: string;
}

export default function PlusIcon({ color = "#05141F", ...props }: Props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 11V5H11V11H5V13H11V19H13V13H19V11H13Z"
        fill={color}
      />
    </Svg>
  );
}
