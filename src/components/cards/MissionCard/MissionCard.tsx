import styles from './mission-card.module.css';
import Image from 'next/image';
import Chip from '../../Chip/Chip';
import Typography from '../../Typography/Typography';
import { missionCardProps } from './missionCardTypes';
import React, { useEffect, useRef } from 'react';

// todo: separate interaction logic
// todo: specify handleMouseMove argument type

const lerp = (currentValue: number, targetValue: number, weight: number) =>
  (1 - weight) * currentValue + weight * targetValue;

const MissionCard = ({
  handleToggleModal,
  missionType,
  missionName,
  launchDate,
  launchProvider,
  launchVehicle,
  imageSrc
}: missionCardProps) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const missionItemRef = useRef<HTMLLIElement>(null);
  const isAnimatingRef = useRef(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const positionRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = ((e.clientX - rect.left) / rect.width - 0.5) * -6;
    const yPos = ((e.clientY - rect.top) / rect.height - 0.5) * -6;

    mousePos.current = { x: xPos, y: yPos };
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    isAnimatingRef.current = true;
  };

  const handleMouseLeave = () => {
    mousePos.current = { x: 0, y: 0 };
    setTimeout(() => {
      isAnimatingRef.current = false;

      if (!imageRef.current) return;
      imageRef.current.style.transform = 'translate(0px, 0px)';

      if (!missionItemRef.current) return;
      missionItemRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';
    }, 1000);
  };

  useEffect(() => {
    let animationId: number;

    const loop = () => {
      if (isAnimatingRef.current) {
        positionRef.current.x = lerp(positionRef.current.x, mousePos.current.x, 0.05);
        positionRef.current.y = lerp(positionRef.current.y, mousePos.current.y, 0.075);

        if (imageRef.current) {
          imageRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
        }

        if (missionItemRef.current) {
          const cardPosY = positionRef.current.y / 6;
          const cardPosX = (positionRef.current.x / 6) * -1;
          missionItemRef.current.style.transform = `rotateY(${cardPosX}deg) rotateX(${cardPosY}deg)`;
        }
      }
      animationId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      if (animationId !== undefined) {
        cancelAnimationFrame(animationId);
      }
      if (missionItemRef.current) {
        missionItemRef.current.style.transform = '';
      }
    };
  }, []);

  return (
    <li
      className={styles.gridItem}
      ref={missionItemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={styles.missionCard}
        onClick={handleToggleModal}
      >
        <figure
          className={styles.cardImage}
          ref={imageRef}
        >
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={`Photo of the ${launchVehicle} rocket`}
              fill
              sizes="33vw"
              style={{ objectFit: 'cover' }}
            />
          )}
        </figure>
        <div className={styles.cardContent}>
          <Chip
            isGlass
            label={missionType}
            style={{ placeSelf: 'flex-end' }}
          />
          <div className={styles.cardFooter}>
            <Chip
              isGlass
              label={launchDate}
              style={{ marginBottom: '0.75rem' }}
            />
            <Typography
              level={3}
              color="white"
            >
              {missionName}
            </Typography>
            <ul className={styles.cardListHorizontal}>
              <li>
                <Typography
                  level={4}
                  style="p"
                  color="white"
                >
                  {launchProvider}
                </Typography>
              </li>
              <li>
                <Typography
                  level={4}
                  style="p"
                  color="white"
                >
                  {launchVehicle}
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </button>
    </li>
  );
};

export default React.memo(MissionCard);
