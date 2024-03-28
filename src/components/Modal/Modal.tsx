import { ReactEventHandler, useRef } from 'react';
import styles from './modal.module.css';
import Chip from '../Chip/Chip';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import { modalDataProps } from '@/types/modalTypes';
import ModalCard from '../cards/ModalCard/ModalCard';
import ModalContentSection from './ModalContentSection/ModalContentSection';

type modalProps = {
  handleToggleModal: ReactEventHandler;
  modalData: modalDataProps | null;
};

const Modal = ({ handleToggleModal, modalData }: modalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOffModalClick = (e: any) => {
    if (modalRef.current && modalRef.current.contains(e.target as Node)) return;
    handleToggleModal(e);
  };

  const missionDetails = modalData?.mission;
  const orbit = modalData?.mission.orbit;
  const status = modalData?.status;
  const pad = modalData?.pad;
  const location = pad.location;
  const rocket = modalData?.rocket.configuration;
  const agency = modalData?.mission.agencies[0];

  const launchDetails = [
    { label: 'Status', value: status.name },
    { label: 'Pad', value: pad.name },
    { label: 'Location', value: location.name }
  ];

  const rocketConfiguration = [
    { label: 'Family', value: rocket.family },
    { label: 'Name', value: rocket.name },
    { label: 'Variant', value: rocket.variant ? rocket.variant : 'N/A' }
  ];

  const agencyDetails = [
    { label: 'Agency Type', value: agency && agency.type },
    { label: 'Administrator', value: agency && agency.administrator },
    { label: 'Founded', value: agency && agency.founding_year }
  ];

  const agencyRecord = [
    { label: 'Total Launch Attempts', value: agency && agency.total_launch_count },
    { label: 'Successful Launches', value: agency && agency.successful_launches },
    { label: 'Failures', value: agency && agency.failed_launches }
  ];

  const agencyVehicles = [
    { label: 'Launch Vehicles', value: agency && agency.launchers },
    { label: 'Spacecraft', value: agency && agency.spacecraft }
  ];

  const ModalCardList = ({ data }: { data: Array<Record<string, string | number>> }) => {
    return (
      <ul>
        {' '}
        {data.map((e, i) => (
          <li key={i}>
            <Typography
              level={6}
              color="secondary"
            >
              {e.label}
            </Typography>
            <p style={{ textWrap: 'balance' }}>{e.value}</p>
          </li>
        ))}{' '}
      </ul>
    );
  };

  const MissionSection = (
    <ModalContentSection
      heading={missionDetails.name}
      desc={missionDetails.description}
    >
      <ModalCard
        preHeading="Destination"
        heading={orbit.name}
      >
        {orbit.abbrev != 'N/A' ? (
          <p>
            Commonly referred to as <strong>{orbit.abbrev}</strong>
          </p>
        ) : (
          <p>Orbit unknown or classified</p>
        )}
      </ModalCard>
      <ModalCard
        isLarge
        heading="Launch Details"
      >
        <ModalCardList data={launchDetails} />
      </ModalCard>
      <ModalCard
        preHeading="Mission Type"
        heading={missionDetails.type}
      >
        {orbit.abbrev != 'N/A' ? (
          <p>{missionDetails.name}</p>
        ) : (
          <p>Payload unknown or classified</p>
        )}
      </ModalCard>
    </ModalContentSection>
  );

  const VehicleSection = (
    <ModalContentSection heading={rocket.full_name}>
      {modalData?.image && (
        <div className={styles.modalImage}>
          <Image
            src={modalData.image}
            alt={`Photo of the ${rocket.full_name} rocket`}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="25vw"
          />
        </div>
      )}
      <ModalCard
        heading="Configuration"
        style={{ gridColumn: 'auto / span 6' }}
      >
        <ModalCardList data={rocketConfiguration} />
      </ModalCard>
    </ModalContentSection>
  );

  const AgencySection = (
    <ModalContentSection
      heading={modalData?.launch_service_provider.name}
      desc={agency && agency.description}
    >
      <ModalCard heading="Launch Details">
        <ModalCardList data={agencyDetails} />
      </ModalCard>
      <ModalCard
        isLarge
        heading="Launch Record"
      >
        <ModalCardList data={agencyRecord} />
      </ModalCard>
      <ModalCard heading="Vehicles">
        <ModalCardList data={agencyVehicles} />
      </ModalCard>
    </ModalContentSection>
  );

  return (
    <>
      <button
        className={styles.modalNavWrapper}
        onClick={handleOffModalClick}
        role="button"
      >
        <div className={styles.modalNavInner}>
          <Image
            src="/close-icon.svg"
            alt="close-icon"
            width={16}
            height={16}
          />
          Close
        </div>
      </button>
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
          </div>
          <div className={styles.modalContent}>
            {MissionSection}
            {VehicleSection}
            {agency && AgencySection}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
