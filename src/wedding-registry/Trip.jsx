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

  return (
    <div className="mx-8">
      <ul className="my-6">
        {trip.map((dayTrip, dayNumber) => (
          <li key="dayNumber">
            DIA {dayNumber + 1}: {dayTrip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trip;
