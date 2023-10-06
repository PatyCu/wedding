import React, { useEffect, useState } from "react";
import TableGuests from "../components/TableGuests";
import guestsService from "../services/guests";

const Taules = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    getGuests();
  }, []);

  const getGuests = async () => {
    try {
      const guestsData = await guestsService.getGuests();
      const groupedGuests = guestsData.reduce((acc, guest) => {
        if (!acc[guest.table]) {
          acc[guest.table] = [];
        }
        acc[guest.table].push(guest);
        return acc;
      }, {});
      setGuests(groupedGuests);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  return (
    <div id="container-autocars" className="my-0 mx-auto max-w-[1200px] p-10">
      <h2 className="pb-5 text-center text-2xl text-gold md:my-0 md:mx-auto">
        Taules
      </h2>
      <p>
        Aquí podreu trobar amb qui compartireu taula. 
        Si no trobeu el vostre nom o el dels vostres acompanyants, 
        poseu-vos en contacte amb nosaltres.
      </p>
      <div className="flex bg-slate-400 md:flex-row flex-col flex-wrap">
      {
        Object.entries(guests).map(([tableName, people]) => (
          <TableGuests key={tableName} people={people} tableName={tableName} />
        ))
      }
      </div>
    </div>
  );
};

export default Taules;
