export type launchApiResponse = {
  count: number;
  next: string;
  previous: string;
  results: Array<any>; //todo: specify type before production
};

export type launchResult = {
  id: string;
  status: statusProps;
  pad: padProps;
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

type statusProps = {
  name: string;
  abbrev: string;
  description: string;
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
  launchers: string;
  spacecraft: string;
  founding_year: number;
  administrator: string;
  total_launch_count: number;
  successful_launches: number;
  failed_launches: number;
  successful_landings: number;
  country_code: string;
};

type padProps = {
  name: string;
  map_url: string;
  location: {
    name: string;
    country_code: string;
  };
  map_image: string;
};

export type launchApiData = {
  missionData: launchApiResponse;
};
