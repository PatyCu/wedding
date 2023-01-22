/* eslint-disable jsx-a11y/no-static-element-interactions */

import TripDay from "./TripDay";
import { useState } from "react";
import fetchDataTrip from "../data/fetchDataTrip";
import getTripDays from "../data/getDataTrip";

/* eslint-disable jsx-a11y/click-events-have-key-events */
const Trip = () => {
  const tripData = fetchDataTrip();
  const tripTitles = getTripDays(tripData.tripDays);
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
    <div className="ml-8 w-fit">
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
