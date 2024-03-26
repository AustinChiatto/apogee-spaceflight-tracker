import { ReactNode } from 'react';
import styles from './modal-content-section.module.css';
import Typography from '@/components/Typography/Typography';

type sectionProps = {
  heading: string;
  desc?: string;
  children: ReactNode;
};

const ModalContentSection = ({ heading, desc, children }: sectionProps) => {
  return (
    <section className={styles.contentSection}>
      <Typography
        level={2}
        style="h1"
      >
        {heading}
      </Typography>
      <p className={styles.sectionDesc}>{desc}</p>
      <ul className={styles.contentGrid}>{children}</ul>
    </section>
  );
};

export default ModalContentSection;
