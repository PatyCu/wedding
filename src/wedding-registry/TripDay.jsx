const TripDay = ({ dayNumber, dayNumberClicked, dayTripDetails }) => {
  if (dayNumber == dayNumberClicked) {
    const dayItems = dayTripDetails.dayItems;

    return (
      <div className="mx-auto mb-5 w-4/5">
        <b>{dayTripDetails.calendarDay}</b>
        <div className="border border-solid border-slate-300 bg-slate-200">
          {dayItems.map((item) => (
            <p key={item.itemTitle}>
              {item.itemTitle} - {item.itemValue}
            </p>
          ))}
        </div>
      </div>
    );
  } else return null;
};

export default TripDay;
