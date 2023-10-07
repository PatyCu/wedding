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
        if (!guest.table) {
          return acc;
        }
        
        if (!acc[guest.table]) {
          acc[guest.table] = [];
        }

        acc[guest.table].push(guest);
        return acc;
      }, {});
      

      Object.keys(groupedGuests).forEach((table) => {
        groupedGuests[table].sort((a, b) => a.tableposition - b.tableposition);
      });

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
      <div className="flex md:flex-row flex-wrap justify-center">
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
