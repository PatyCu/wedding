import React from 'react';

const TimelineItem = ({ imgSrc, time, description }) => {
  return (
    <div className={"grid grid-cols-5 gap-4 max-w-xl mt-4"}>
      <div className="flex justify-start items-center col-span-1 h-20">
        <img
          src={imgSrc}
          className="max-h-full max-w-full"
          alt="icon"
        />
      </div>
      <div className="col-span-1 flex justify-center items-center">
        {time}
      </div>
      <div className="col-span-3 flex justify-start items-center ml-4">
        {description}
      </div>
    </div>
  );
}

export default TimelineItem;
