import { ReactEventHandler } from 'react';
import styles from './modal.module.css';

const Modal = ({ handleToggleModal }: { handleToggleModal: ReactEventHandler }) => {
  return (
    <div
      className={`${styles.modalWrapper} hasModal`}
      role="dialog"
      onClick={handleToggleModal}
    >
      <div className={styles.modal}></div>
    </div>
  );
};

export default Modal;
