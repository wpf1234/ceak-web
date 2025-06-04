import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Job {
  title: string;
  description: string;
  detail: string;
  requirements: string[];
}

