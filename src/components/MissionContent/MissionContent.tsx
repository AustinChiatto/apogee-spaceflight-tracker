'use client';
import styles from './mission-content.module.css';
import MissionCard from '@/components/MissionCard/MissionCard';
import Modal from '@/components/Modal/Modal';
import { launchApiData } from '@/types/missionContentTypes';
import { useState } from 'react';

const MissionContent = ({ missionData }: launchApiData) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <ul className={styles.contentGrid}>
        {missionData.results.map((result) => {
          return (
            <MissionCard
              key={result.id}
              handleToggleModal={handleToggleModal}
            />
          );
        })}
      </ul>
      {isOpen && <Modal handleToggleModal={handleToggleModal} />}
    </>
  );
};

export default MissionContent;
