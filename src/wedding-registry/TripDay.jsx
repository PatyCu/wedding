const TripDay = ({ dayNumber, dayNumberClicked, dayTripDetails }) => {
  if (dayNumber == dayNumberClicked) {
    console.log("dayTrip details: ", dayTripDetails);
    return (
      <div>
        <p>Trip Day Number {dayNumber + 1}</p>
        <p>{dayTripDetails.dayTitle}</p>
      </div>
    );
  } else return null;
};

export default TripDay;
