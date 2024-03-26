import styles from './mission-card.module.css';
import Image from 'next/image';
import Chip from '../../Chip/Chip';
import Typography from '../../Typography/Typography';
import { missionCardProps } from './missionCardTypes';

const MissionCard = ({
  handleToggleModal,
  missionType,
  missionName,
  launchDate,
  launchProvider,
  launchVehicle,
  imageSrc
}: missionCardProps) => {
  return (
    <li className={styles.gridItem}>
      <button
        className={styles.missionCard}
        onClick={handleToggleModal}
      >
        <figure className={styles.cardImage}>
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={`Photo of the ${launchVehicle} rocket`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="33vw"
            />
          )}
        </figure>
        <div className={styles.cardContent}>
          <Chip
            isGlass
            label={missionType}
            style={{ placeSelf: 'flex-end' }}
          />
          <div className={styles.cardFooter}>
            <Chip
              isGlass
              label={launchDate}
              style={{ marginBottom: '0.75rem' }}
            />
            <Typography
              level={3}
              color="white"
            >
              {missionName}
            </Typography>
            <ul className={styles.cardListHorizontal}>
              <li>
                <Typography
                  level={4}
                  style="p"
                  color="white"
                >
                  {launchProvider}
                </Typography>
              </li>
              <li>
                <Typography
                  level={4}
                  style="p"
                  color="white"
                >
                  {launchVehicle}
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
