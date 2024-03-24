import styles from './mission-card.module.css';
import Image from 'next/image';
import Chip from '../Chip/Chip';
import Typography from '../Typography/Typography';

const missionDetails = {
  missionType: 'mission-type',
  missionName: 'mission-name',
  launchDate: 'launch-date',
  launchProvider: 'launch-provider',
  launchVehicle: 'launch-vehicle'
};

const MissionCard = () => {
  return (
    <li className={styles.gridItem}>
      <button className={styles.missionCard}>
        <figure className={styles.cardImage}>
          <Image
            src="/placeholder.png"
            alt="todo:"
            fill
          />
        </figure>
        <div className={styles.cardContent}>
          <Chip
            isGlass
            label={missionDetails.missionType}
            style={{ placeSelf: 'flex-end' }}
          />
          <div className={styles.cardFooter}>
            <Chip
              isGlass
              label={missionDetails.launchDate}
              style={{ marginBottom: '0.75rem' }}
            />
            <Typography level={3}>{missionDetails.missionName}</Typography>
            <ul className={styles.cardListHorizontal}>
              <li>
                <Typography
                  level={4}
                  style="p"
                >
                  {missionDetails.launchProvider}
                </Typography>
              </li>
              <li>
                <Typography
                  level={4}
                  style="p"
                >
                  {missionDetails.launchVehicle}
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </button>
    </li>
  );
};

export default MissionCard;
