import { type ComponentProps } from "react";

import Svg from "@/assets/icons/Svg";

interface Props extends ComponentProps<typeof Svg> {
  color?: string;
}

export default function LoadingLottie({ color = "#b4b9bc", ...props }: Props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width={200}
      height={200}
      style={{ shapeRendering: "auto", display: "block" }}
      {...props}
    >
      <g>
        <circle
          stroke-dasharray="164.93361431346415 56.97787143782138"
          r="35"
          stroke-width="10"
          stroke={color}
          fill="none"
          cy="50"
          cx="50"
        >
          <animateTransform
            keyTimes="0;1"
            values="0 50 50;360 50 50"
            dur="1s"
            repeatCount="indefinite"
            type="rotate"
            attributeName="transform"
          ></animateTransform>
        </circle>
        <g></g>
      </g>
    </Svg>
  );
}
