import { type ComponentProps } from "react";
import Svg from "@/assets/icons/Svg";

interface Props extends ComponentProps<typeof Svg> {
  color?: string;
}

export default function UserAddIcon({ color = "#6A7278", ...props }: Props) {
  return (
    <Svg width={56} height={56} viewBox="0 0 56 56" fill="none" {...props}>
      <g clipPath="url(#clip0_1992_17311)">
        <rect
          x="10.5"
          y="7"
          width="35"
          height="42"
          rx="2"
          stroke={color}
          strokeWidth="2"
        />
        <circle
          cx="27.9997"
          cy="22.1667"
          r="4.66667"
          stroke={color}
          strokeWidth="2"
        />
        <path
          d="M26.8332 37.3333H19.8332C19.1888 37.3333 18.6665 36.8109 18.6665 36.1666V36.1666C18.6665 32.9449 21.2782 30.3333 24.4998 30.3333H26.8332H29.1665"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.0002 32.6666V30.3333H32.6668V32.6666H30.3335V34.9999H32.6668V37.3333H35.0002V34.9999H37.3335V32.6666H35.0002Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1992_17311">
          <rect width="56" height="56" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
}
