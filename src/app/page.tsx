import styles from './page.module.css';
import Header from '@/components/Header/Header';
import MissionContent from '@/components/MissionContent/MissionContent';
import getUpcomingLaunches from '@/api/getUpcomingLaunches';
import { launchResult } from '@/types/missionContentTypes';

const Home = async () => {
  const missionData = await getUpcomingLaunches();

  return (
    <main className={styles.main}>
      <Header />
      {/* {missionData.results.map((result: launchResult) => {
        return <p key={result.id}>{result.mission.name}</p>;
      })} */}
      {(await missionData) && <MissionContent missionData={missionData} />}
    </main>
  );
};

export default Home;
