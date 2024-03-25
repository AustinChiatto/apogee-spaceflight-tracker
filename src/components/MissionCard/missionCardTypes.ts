import { ReactEventHandler } from 'react';

export type missionCardProps = {
  handleToggleModal: ReactEventHandler;
  missionType: string;
  missionName: string;
  launchDate: string;
  launchProvider: string;
  launchVehicle: string;
  imageSrc: string;
};
