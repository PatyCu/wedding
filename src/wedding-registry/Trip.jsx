/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
const Trip = () => {
  const trip = [
    "✈️ BCN --> AKL",
    "✈️",
    "Auckland",
    "Auckland --> Hobbiton --> Rotorua",
    "Rotorua",
    "Rotorua --> Tongariro Park",
    "Tongariro Park",
    "Tongariro Park --> Martinborough",
    "Martinborough --> Wellington",
    "Wellington --> Picton --> Kaiteriteri",
    "Kaiteriteri",
    "Kaiteriteri --> Punakaiki",
    "Punakaiki --> Franz Josef Glacier",
    "Franz Josef Glacier --> Wanaka",
    "Wanaka --> Queenstown",
    "Queenstown",
    "Queenstown",
    "Queenstown --> Christchurch",
    "Christchurch --> Kaikoura",
    "Kaikoura --> ✈️ Christchurch --> ✈️ AUCK --> ✈️ BCN",
    "✈️ AKL --> BCN",
  ];

  function openDay(e, dayNumber) {
    e.preventDefault();
    console.log("Day number: ", dayNumber);
  }

  return (
    <div className="ml-8 w-fit">
      <ul className="my-6">
        <form>
          {trip.map((dayTrip, dayNumber) => (
            <li
              key={dayNumber}
              className="mb-2 rounded-lg border border-solid border-slate-300"
            >
              <button
                className="h-full w-full p-6 text-left"
                onClick={(e) => openDay(e, dayNumber)}
              >
                DIA {dayNumber + 1}: {dayTrip}
              </button>
            </li>
          ))}
        </form>
      </ul>
    </div>
  );
};

export default Trip;
