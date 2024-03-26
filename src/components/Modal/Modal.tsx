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

  const rocketSpecs = [
    { label: 'Length', value: 'placeholder-data' },
    { label: 'Diameter', value: 'placeholder-data' },
    { label: 'Fairing Diameter', value: 'placeholder-data' },
    { label: 'Launch Mass', value: 'placeholder-data' },
    { label: 'Thrust', value: 'placeholder-data' }
  ];

  const rocketConfiguration = [
    { label: 'Family', value: rocket.family },
    { label: 'Name', value: rocket.name },
    { label: 'Variant', value: rocket.variant }
  ];

  const rocketCapicty = [
    { label: 'LEO', value: 'placeholder-data' },
    { label: 'GEO', value: 'placeholder-data' }
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
        <ul>
          {launchDetails.map((e, i) => (
            <li key={i}>
              <Typography
                level={6}
                color="secondary"
              >
                {e.label}
              </Typography>
              <p style={{ textWrap: 'balance' }}>{e.value}</p>
            </li>
          ))}
        </ul>
      </ModalCard>
      <ModalCard heading="Mission Type">
        {orbit.abbrev != 'N/A' ? (
          <p>{missionDetails.type}</p>
        ) : (
          <p>Payload unknown or classified</p>
        )}
      </ModalCard>
    </ModalContentSection>
  );

  const VehicleSection = (
    <ModalContentSection
      heading={`The ${rocket.name}`}
      desc={'placeholder-data'}
    >
      {modalData?.image && (
        <div className={styles.modalImage}>
          <Image
            src={modalData.image}
            alt="todo: need alt"
            fill
            style={{ objectFit: 'cover' }}
            sizes="33vw"
          />
        </div>
      )}
      <ModalCard
        isLarge
        heading="Specifications"
      >
        <ul>
          {rocketSpecs.map((e, i) => (
            <li key={i}>
              <Typography
                level={6}
                color="secondary"
              >
                {e.label}
              </Typography>
              <p style={{ textWrap: 'balance' }}>{e.value}</p>
            </li>
          ))}
        </ul>
      </ModalCard>
      <ModalCard heading="Configuration">
        <ul>
          {rocketConfiguration.map((e, i) => (
            <li key={i}>
              <Typography
                level={6}
                color="secondary"
              >
                {e.label}
              </Typography>
              <p style={{ textWrap: 'balance' }}>{e.value}</p>
            </li>
          ))}
        </ul>
      </ModalCard>
      <ModalCard heading="Capacity">
        <ul>
          {rocketCapicty.map((e, i) => (
            <li key={i}>
              <Typography
                level={6}
                color="secondary"
              >
                {e.label}
              </Typography>
              <p style={{ textWrap: 'balance' }}>{e.value}</p>
            </li>
          ))}
        </ul>
      </ModalCard>
    </ModalContentSection>
  );

  const AgencySection = (
    <ModalContentSection
      heading={modalData?.launch_service_provider.name}
      desc={agency && agency.description}
    >
      <ModalCard heading="Launch Details">
        <ul>
          {agencyDetails.map((e, i) => (
            <li key={i}>
              <Typography
                level={6}
                color="secondary"
              >
                {e.label}
              </Typography>
              <p style={{ textWrap: 'balance' }}>{e.value}</p>
            </li>
          ))}
        </ul>
      </ModalCard>
      <ModalCard
        isLarge
        heading="Launch Record"
      >
        <ul>
          {agencyRecord.map((e, i) => (
            <li key={i}>
              <Typography
                level={6}
                color="secondary"
              >
                {e.label}
              </Typography>
              <p style={{ textWrap: 'balance' }}>{e.value}</p>
            </li>
          ))}
        </ul>
      </ModalCard>
      <ModalCard heading="Vehicles">
        <ul>
          {agencyVehicles.map((e, i) => (
            <li key={i}>
              <Typography
                level={6}
                color="secondary"
              >
                {e.label}
              </Typography>
              <p style={{ textWrap: 'balance' }}>{e.value}</p>
            </li>
          ))}
        </ul>
      </ModalCard>
    </ModalContentSection>
  );

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
          {MissionSection}
          {VehicleSection}
          {agency && AgencySection}
        </div>
      </div>
    </div>
  );
};

export default Modal;
