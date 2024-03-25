export type launchApiResponse = {
  count: number;
  next: string;
  previous: string;
  results: Array<any>; //todo: specify type before production
};

export type launchResult = {
  id: string;
  mission: missionProps;
  rocket: rocketProps;
  launch_service_provider: providerProps;
  image: string;
};

export type rocketProps = {
  configuration: Object;
  name: string;
  family: string;
  variant: string;
  full_name: string;
};

export type missionProps = {
  id: string;
  name: string;
  description: string;
  type: string;
  orbit: {
    id: string;
    name: string;
    abbrev: string;
  };
  agencies: Array<agencyProps>;
};

type providerProps = {
  name: string;
  type: string;
};

type agencyProps = {
  id: string;
  name: string;
  abbrev: string;
  type: string;
  description: string;
};

export type launchApiData = {
  missionData: launchApiResponse;
};
