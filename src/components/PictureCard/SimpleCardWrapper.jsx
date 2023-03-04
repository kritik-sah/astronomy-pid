import React from "react";
import { PictureCard2 } from "./PictureCard";

const SimpleCardWrapper = ({ data, title }) => {
  return (
    <>
      <h3 className="px-2 mt-4 text-2xl font-bold text-red-500 uppercase">
        {title}
      </h3>
      <div className="simple-wrapper ">
        <div className="container rounded-md">
          {data.map((card, i) => (
            <PictureCard2 key={i} data={card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SimpleCardWrapper;
