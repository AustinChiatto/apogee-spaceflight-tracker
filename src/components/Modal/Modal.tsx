import { ReactEventHandler, useRef } from 'react';
import styles from './modal.module.css';
import Chip from '../Chip/Chip';
import Image from 'next/image';
import Typography from '../Typography/Typography';

const Modal = ({ handleToggleModal }: { handleToggleModal: ReactEventHandler }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOffModalClick = (e: any) => {
    if (modalRef.current && modalRef.current.contains(e.target as Node)) return;
    handleToggleModal(e);
  };

  return (
    <div
      className={`${styles.modalWrapper} hasModal`}
      role="dialog"
      onClick={handleOffModalClick}
    >
      <div
        className={styles.modalContainer}
        ref={modalRef}
      >
        <div className={styles.modalHeader}>
          <Chip
            label="T- 0 Days 00:00:00"
            style={{ padding: '0.375rem 0.75rem', fontSize: '1.25rem' }}
          />
          <button
            className={styles.modalCloseButton}
            onClick={handleToggleModal}
          >
            <Image
              src="/close-icon.svg"
              alt="close icon"
              width={16}
              height={16}
            />
          </button>
        </div>
        <div className={styles.modalContent}>
          <section>
            <Typography
              level={2}
              style="h1"
            >
              mission-name
            </Typography>
            <Typography>mission-desc</Typography>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Modal;