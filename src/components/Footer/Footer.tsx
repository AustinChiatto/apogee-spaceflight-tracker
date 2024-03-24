import Typography from '../Typography/Typography';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Typography color="secondary">
        Designed & Developed by{' '}
        <a
          href="https://austinchiatto.com"
          target="_blank"
        >
          Austin
        </a>
      </Typography>
    </footer>
  );
};

export default Footer;
