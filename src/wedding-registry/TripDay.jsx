import ActivityGift from "./ActivityGift";

const TripDay = ({ dayNumber, dayNumberClicked, dayTripDetails }) => {
  if (dayNumber == dayNumberClicked) {
    const dayItems = dayTripDetails.dayItems;
    const imgPath = "../img/";
    return (
      <div className="mx-auto mb-5 flex w-4/5">
        <div className="">
          <ul className="flex flex-row flex-wrap content-between justify-around gap-2">
            {dayItems.map((item) => (
              <ActivityGift
                key={item.itemTitle}
                item={item}
                calendarDay={dayTripDetails.calendarDay}
                link="/"
                img={imgPath.concat(item.itemImg)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  } else return null;
};

export default TripDay;
