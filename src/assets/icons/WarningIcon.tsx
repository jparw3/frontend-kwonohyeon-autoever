import { type ComponentProps } from "react";

import Svg from "@/assets/icons/Svg";

interface Props extends ComponentProps<typeof Svg> {
  color?: string;
}

export default function WarningIcon({ color = "#B4B9BC", ...props }: Props) {
  return (
    <Svg width={64} height={64} viewBox="0 0 64 64" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 57.3332C18.0087 57.3332 6.66663 45.991 6.66663 31.9998C6.66663 18.0086 18.0087 6.6665 32 6.6665C45.9912 6.6665 57.3333 18.0086 57.3333 31.9998C57.3333 45.991 45.9912 57.3332 32 57.3332ZM2.66663 31.9998C2.66663 15.7995 15.7996 2.6665 32 2.6665C48.2003 2.6665 61.3333 15.7995 61.3333 31.9998C61.3333 48.2002 48.2003 61.3332 32 61.3332C15.7996 61.3332 2.66663 48.2002 2.66663 31.9998ZM29.3333 37.3332V18.6665H34.6666V37.3332H29.3333ZM29.3333 45.3332V39.9998H34.6666V45.3332H29.3333Z"
        fill={color}
      />
    </Svg>
  );
}
