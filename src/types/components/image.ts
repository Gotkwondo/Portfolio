import { HTMLMotionProps } from 'motion/react';

export interface ImageLayoutProps extends HTMLMotionProps<"div"> {
  animationType: "fade" | "slide" | "zoom" | "none";
  children?: React.ReactNode;
}