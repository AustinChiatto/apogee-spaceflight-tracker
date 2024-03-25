import Typography from '../Typography/Typography';
import styles from './header.module.css';

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.intro}>
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
