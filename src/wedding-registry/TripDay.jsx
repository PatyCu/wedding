const TripDay = ({ dayNumber, dayNumberClicked }) => {
  if (dayNumber == dayNumberClicked)
    return <div>Trip Day Number {dayNumber + 1}</div>;
  else return null;
};

export default TripDay;
