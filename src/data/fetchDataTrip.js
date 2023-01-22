import trip from "./trip.json";

const fetchDataTrip = () => {
  const dataTrip = {
    tripDestination: trip.tripDestination,
    people: trip.people,
    tripDays: trip.tripDays,
  };
  return dataTrip;
};

export default fetchDataTrip;
