'use client';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import MissionCard from '@/components/MissionCard/MissionCard';
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleModal = () => setIsOpen(!isOpen);

  return (
    <main className={styles.main}>
      <Header />
      <ul className={styles.cardGrid}>
        <MissionCard handleToggleModal={handleToggleModal} />
        <MissionCard handleToggleModal={handleToggleModal} />
        <MissionCard handleToggleModal={handleToggleModal} />
        <MissionCard handleToggleModal={handleToggleModal} />
      </ul>
      {isOpen && <Modal handleToggleModal={handleToggleModal} />}
    </main>
  );
}
