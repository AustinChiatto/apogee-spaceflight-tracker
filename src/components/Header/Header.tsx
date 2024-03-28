import Image from 'next/image';
import Typography from '../Typography/Typography';
import styles from './header.module.css';

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.intro}>
        <Image
          src="/apogee-logo.svg"
          alt="The Apogee logo, a blue pixelated letter A"
          width={38}
          height={32}
          style={{ marginBottom: '1rem' }}
        />
        <h1>Apogee</h1>
        <Typography
          level={2}
          style="p"
          color="secondary"
        >
          Your window to the space race.
        </Typography>
      </div>
      <Typography color="secondary">
        A feed of planned missions in spaceflight <br /> from agencies around the world.
      </Typography>
    </section>
  );
};

export default Header;
