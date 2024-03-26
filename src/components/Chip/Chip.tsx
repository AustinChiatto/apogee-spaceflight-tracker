import styles from './chip.module.css';
import { Roboto_Mono } from 'next/font/google';

type ChipProps = {
  label: string;
  isGlass?: boolean;
  style?: React.CSSProperties;
};

const mono = Roboto_Mono({ subsets: ['latin'] });

const Chip = ({ label, isGlass, style }: ChipProps) => {
  return (
    <div
      className={`${isGlass ? styles.chipGlass : styles.chipSolid} ${mono.className}`}
      style={style}
    >
      <p className={styles.chipLabel}>{label}</p>
    </div>
  );
};

export default Chip;
