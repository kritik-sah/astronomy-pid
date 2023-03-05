import React from "react";
import Masonry from "react-masonry-css";

const MysnoryLayout = ({ children }) => {
  const breakpointColumnsObj = {
    default: 5,
    1124: 3,
    769: 2,
    500: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {children}
    </Masonry>
  );
};

export default MysnoryLayout;
