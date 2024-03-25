'use client';
import styles from './mission-content.module.css';
import MissionCard from '@/components/MissionCard/MissionCard';
import Modal from '@/components/Modal/Modal';
import { launchApiData } from '@/types/missionContentTypes';
import { useState } from 'react';

const MissionContent = ({ missionData }: launchApiData) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleModal = () => setIsOpen(!isOpen);

  const abbreviateName = (name: string) => {
    return name
      .replace(/\(.*?\)/g, '')
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  };

  const translateDate = (dateString: string) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  };

  return (
    <>
      <ul className={styles.contentGrid}>
        {missionData.results.map((result, i) => {
          // abbreviate if over 25 characters
          const providerName =
            result?.launch_service_provider?.name && result.launch_service_provider.name.length > 25
              ? abbreviateName(result.launch_service_provider.name)
              : result.launch_service_provider.name;

          const launchDate = translateDate(result.net);

          return (
            <MissionCard
              key={i}
              handleToggleModal={handleToggleModal}
              missionType={result.mission.type}
              missionName={result.mission.name}
              launchDate={launchDate}
              launchProvider={providerName}
              launchVehicle={result.rocket.configuration.full_name}
              imageSrc={result.image !== null ? result.image : '/placeholder.png'}
            />
          );
        })}
      </ul>
      {isOpen && <Modal handleToggleModal={handleToggleModal} />}
    </>
  );
};

export default MissionContent;
