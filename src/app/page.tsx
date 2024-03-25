import styles from './page.module.css';
import Header from '@/components/Header/Header';
import MissionContent from '@/components/MissionContent/MissionContent';
import getUpcomingLaunches from '@/api/getUpcomingLaunches';

const Home = async () => {
  const missionData = await getUpcomingLaunches();

  return (
    <main className={styles.main}>
      <Header />
      {(await missionData) && <MissionContent missionData={missionData} />}
    </main>
  );
};

export default Home;
