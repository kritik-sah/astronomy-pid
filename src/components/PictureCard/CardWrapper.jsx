import React from "react";
import PictureCard from "./PictureCard";
import MysnoryLayout from "./MysnoryLayout";

const CardWrapper = ({ data }) => {
  return (
    <MysnoryLayout>
      {data.map((card, i) => (
        <PictureCard key={i} data={card} />
      ))}
    </MysnoryLayout>
  );
};

export default CardWrapper;
