import styles from './page.module.css';
import Header from '@/components/Header/Header';
import MissionCard from '@/components/MissionCard/MissionCard';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <ul className={styles.grid}>
        <MissionCard />
      </ul>
    </main>
  );
}
