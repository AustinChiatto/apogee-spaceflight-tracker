import Typography from '@/components/Typography/Typography';
import styles from './modal-card.module.css';
import { modalCardProps } from './modalCardTypes';

const ModalCard = ({ isLarge, preHeading, heading, children }: modalCardProps) => {
  return (
    <li className={`${styles.modalCard} ${isLarge && styles.large}`}>
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

// isLarge
// default
// hasPreHeading
// multiValue -- horizontal list for small card, vertical for large card
