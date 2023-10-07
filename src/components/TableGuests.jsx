import React, { useRef, useState } from 'react';

const TableGuests = ({ people, tableName }) => {
  const [showFullName, setShowFullName] = useState(null);
  const timeoutIdRef = useRef(null);

  const peopleCount = people.length;
  const angle = (2 * Math.PI) / peopleCount;
  const beginingIndex = -peopleCount / 4;

  const onShowFullName = (persona) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    if (showFullName === persona) {
      setShowFullName(null);
    } else {
      setShowFullName(persona);
      timeoutIdRef.current = setTimeout(() => {
        setShowFullName(null);
      }, 1500);
    }
  };

  return (
    <div className="relative w-80 h-80 flex items-center">
      <div
        className="bg-slate-300 w-64 h-64 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
          style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
        >
          {tableName}
        </div>
      </div>
      {people.map((persona, index) => {
        return (
        <button
          key={index}
          className={`absolute border-2 border-white ${
            showFullName === persona.name 
              ? 'bg-blue-300 px-2 z-50' 
              : 'bg-yellow-300 rounded-full w-12 h-12'
          }`}
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translate(${Math.cos(
              (index + beginingIndex) * angle
            ) * 6.5}rem, ${Math.sin((index + beginingIndex) * angle) * 6.5}rem)`,
          }}
          onClick={() => onShowFullName(persona.name)}
        >
          {showFullName === persona.name 
            ? persona.name 
            : `${persona.name.split(' ')[0][0]}.${persona.name.split(' ')[1][0]}.`}
        </button>
      )})}
    </div>
  );
};

export default TableGuests;
