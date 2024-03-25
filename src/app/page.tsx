import styles from './page.module.css';
import Header from '@/components/Header/Header';
import MissionContent from '@/components/MissionContent/MissionContent';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <MissionContent />
    </main>
  );
}
