import { type ComponentProps } from "react";

import Svg from "@/assets/icons/Svg";

interface Props extends ComponentProps<typeof Svg> {
  color?: string;
}

export default function DownloadIcon({ color = "#05141F", ...props }: Props) {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
      <path d="M40.5 24V6H8.5V42H24.5" stroke={color} strokeWidth="2" />
      <path d="M40.5 24V6H8.5V42H24.5" stroke={color} strokeWidth="2" />
      <path d="M14.5 20H34.5" stroke={color} strokeWidth="2" />
      <path d="M14.5 26H24.5" stroke={color} strokeWidth="2" />
      <path d="M14.5 14H34.5" stroke={color} strokeWidth="2" />
      <path d="M35.5 29V42" stroke={color} strokeWidth="2" />
      <path d="M30.5 37L35.5 42L40.5 37" stroke={color} strokeWidth="2" />
    </Svg>
  );
}
