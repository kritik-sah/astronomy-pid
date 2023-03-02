import React from "react";
import PictureCard from "./PictureCard";

const CardWrapper = ({ data }) => {
  return (
    <div className="card-wrapper">
      {data.map((card, i) => (
        <PictureCard key={i} data={card} />
      ))}

      <div className="w-[280px]"></div>
      <div className="w-[280px]"></div>
      <div className="w-[280px]"></div>
      <div className="w-[280px]"></div>
      <div className="w-[280px]"></div>
    </div>
  );
};

export default CardWrapper;
