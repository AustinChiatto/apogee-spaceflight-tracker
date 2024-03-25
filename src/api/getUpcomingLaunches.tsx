const getUpcomingLaunches = async () => {
  const response = await fetch('https://ll.thespacedevs.com/2.2.0/launch/upcoming/');

  if (!response.ok) throw new Error('Failed to fetch launch data');

  const data = await response.json();
  return data;
};

export default getUpcomingLaunches;
