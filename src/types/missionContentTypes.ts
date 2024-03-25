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
  image: string;
};

export type rocketProps = {
  configuration: Object;
  name: string;
  family: string;
  variant: string;
  fullName: string;
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
  agency: {
    id: string;
    name: string;
    abbrev: string;
    type: string;
    description: string;
  };
};

export type agencyProps = {
  name: string;
  type: string;
};

export type launchApiData = {
  missionData: launchApiResponse;
};
