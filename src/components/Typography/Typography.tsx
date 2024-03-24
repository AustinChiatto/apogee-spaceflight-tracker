import { ReactNode } from 'react';
import styles from './typography.module.css';

type TypographyProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  style?: keyof typeof styles;
  color?: keyof typeof styles;
  children: ReactNode;
};

const Typography = ({ level, color = 'primary', style = '', children }: TypographyProps) => {
  const Tag = level ? (`h${level}` as keyof JSX.IntrinsicElements) : 'p';

  const className = `${styles[color]} ${styles[style]}`;

  return <Tag className={className}>{children}</Tag>;
};

export default Typography;
