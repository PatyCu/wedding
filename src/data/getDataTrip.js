export default function getTripDays(tripDays) {
  const tripTitles = [];
  tripDays.map((tripDay) => {
    tripTitles.push(tripDay.dayTitle);
  });
  return tripTitles;
}
