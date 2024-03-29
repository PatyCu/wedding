/* eslint-disable jsx-a11y/no-static-element-interactions */

import TripDay from "./todelete_TripDay";
import { useState } from "react";
import { fetchDataTrip, getTripDaysByTitle } from "../data/fetchDataTrip";

/* eslint-disable jsx-a11y/click-events-have-key-events */
const Trip = () => {
  const tripData = fetchDataTrip();
  const tripTitles = getTripDaysByTitle(tripData.tripDays);
  const [dayTripClicked, setDayTripClicked] = useState(false);
  const [dayNumberClicked, setDayNumberClicked] = useState(-1);

  function openDay(e, dayNumber) {
    e.preventDefault();
    if (!dayTripClicked) {
      setDayTripClicked(true);
      setDayNumberClicked(dayNumber);
    } else {
      setDayTripClicked(false);
      setDayNumberClicked(-1);
    }
  }

  return (
    <div className="ml-0 md:ml-8">
      <ul className="my-6">
        <form>
          {tripTitles.map((dayTrip, dayNumber) => (
            <li
              key={dayNumber}
              className="mb-2 rounded-lg border border-solid border-slate-300"
            >
              <button
                className="h-full w-full p-6 text-left hover:bg-light-gold"
                onClick={(e) => openDay(e, dayNumber)}
              >
                <b>DIA {dayNumber + 1}:</b> {dayTrip}
              </button>
              {dayTripClicked && (
                <TripDay
                  dayNumber={dayNumber}
                  dayNumberClicked={dayNumberClicked}
                  dayTripDetails={tripData.tripDays[dayNumber]}
                />
              )}
            </li>
          ))}
        </form>
      </ul>
    </div>
  );
};

export default Trip;
