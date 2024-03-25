'use client';
import styles from './mission-content.module.css';
import MissionCard from '@/components/MissionCard/MissionCard';
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';

const MissionContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleModal = () => setIsOpen(!isOpen);
  return (
    <>
      <ul className={styles.contentGrid}>
        <MissionCard handleToggleModal={handleToggleModal} />
      </ul>
      {isOpen && <Modal handleToggleModal={handleToggleModal} />}
    </>
  );
};

export default MissionContent;
