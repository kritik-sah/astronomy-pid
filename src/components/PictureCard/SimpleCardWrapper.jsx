import React from "react";
import PictureCard from "./PictureCard";

const SimpleCardWrapper = ({ data }) => {
  return (
    <div className="simple-wrapper">
      {data.map((card, i) => (
        <PictureCard key={i} data={card} />
      ))}
    </div>
  );
};

export default SimpleCardWrapper;
