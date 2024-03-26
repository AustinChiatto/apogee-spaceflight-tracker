import Typography from '@/components/Typography/Typography';
import styles from './modal-card.module.css';
import { modalCardProps } from './modalCardTypes';

const ModalCard = ({ isLarge, preHeading, heading, children, style }: modalCardProps) => {
  return (
    <li
      className={`${styles.modalCard} ${isLarge && styles.large}`}
      style={style}
    >
      <div className={styles.cardHeadings}>
        {preHeading && (
          <Typography
            level={4}
            style="h6"
            color="secondary"
          >
            {preHeading}
          </Typography>
        )}
        <Typography
          level={3}
          style="h4"
        >
          {heading}
        </Typography>
      </div>
      <div className={`${styles.cardContent} ${isLarge && styles.large}`}>{children}</div>
    </li>
  );
};

export default ModalCard;
