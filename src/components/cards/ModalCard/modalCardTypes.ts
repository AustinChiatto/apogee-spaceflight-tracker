import { ReactNode } from 'react';

export type modalCardProps = {
  isLarge?: boolean;
  preHeading?: string;
  heading: string;
  children?: ReactNode;
  style?: React.CSSProperties;
};
