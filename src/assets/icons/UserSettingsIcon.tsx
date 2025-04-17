import { type ComponentProps } from "react";
import Svg from "@/assets/icons/Svg";

interface Props extends ComponentProps<typeof Svg> {
  color?: string;
}

export default function UserSettingsIcon({
  color = "#6A7278",
  ...props
}: Props) {
  return (
    <Svg width={56} height={56} viewBox="0 0 56 56" fill="none" {...props}>
      <circle
        cx="28.0001"
        cy="18.6666"
        r="9.33333"
        stroke={color}
        strokeWidth="2.33333"
      />
      <path
        d="M27.9999 46.6667H11.6666C10.3779 46.6667 9.33325 45.622 9.33325 44.3333V43.1667C9.33325 36.7233 14.5566 31.5 20.9999 31.5H27.9999"
        stroke={color}
        strokeWidth="2.33333"
        strokeLinecap="round"
      />
      <circle
        cx="39.6666"
        cy="38.5001"
        r="5.83333"
        stroke={color}
        strokeWidth="2.33333"
      />
      <path
        d="M39.6667 32.6667V29.1667"
        stroke={color}
        strokeWidth="2.33333"
        strokeLinecap="round"
      />
      <path
        d="M39.6667 44.3333V47.8333"
        stroke={color}
        strokeWidth="2.33333"
        strokeLinecap="round"
      />
      <path
        d="M45.5 38.5L49 38.5"
        stroke={color}
        strokeWidth="2.33333"
        strokeLinecap="round"
      />
      <path
        d="M33.8333 38.5L30.3333 38.5"
        stroke={color}
        strokeWidth="2.33333"
        strokeLinecap="round"
      />
      <path
        d="M43.7912 42.6247L46.2661 45.0996"
        stroke={color}
        strokeWidth="2.33333"
        strokeLinecap="round"
      />
      <path
        d="M35.5417 34.375L33.0669 31.9001"
        stroke={color}
        strokeWidth="2.33333"
        strokeLinecap="round"
      />
      <path
        d="M35.5418 42.6247L33.0669 45.0996"
        stroke={color}
        strokeWidth="2.33333"
        strokeLinecap="round"
      />
      <path
        d="M43.7915 34.375L46.2664 31.9001"
        stroke={color}
        strokeWidth="2.33333"
        strokeLinecap="round"
      />
    </Svg>
  );
}
