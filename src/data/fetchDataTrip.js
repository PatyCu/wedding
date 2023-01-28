import trip from "./trip.json";

const fetchDataTrip = () => {
  const dataTrip = {
    tripDestination: trip.tripDestination,
    people: trip.people,
  };
  return dataTrip;
};

const getTripDaysByTitle = (tripDays) => {
  const tripTitles = [];
  tripDays.map((tripDay) => {
    tripTitles.push(tripDay.dayTitle);
  });
  return tripTitles;
};

export { fetchDataTrip, getTripDaysByTitle };
