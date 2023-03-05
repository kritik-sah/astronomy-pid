"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import CardWrapper from "../PictureCard/CardWrapper";

const api = process.env.NEXT_PUBLIC_API;

export function InfiniteScrollWrapper() {
  const [posts, setPosts] = useState([]);
  const [latest, setLatest] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  useEffect(() => {
    getStartEndDates();
  }, []);

  const fetchData = async (startDate, endDate) => {
    const res = await axios.get(
      `${api}${startDate ? "&start_date=" + startDate : null}${
        endDate ? "&end_date=" + endDate : null
      }`
    );
    setPosts([...posts, ...res.data.reverse()]);
    getStartEndDates(latest);
  };

  const getStartEndDates = (latest) => {
    let todaysDate = moment().format("YYYY-MM-DD"); // todays date
    let endDate = latest
      ? latest
      : moment(todaysDate).subtract(9, "days").format("YYYY-MM-DD");
    let startDate = moment(endDate).subtract(20, "days").format("YYYY-MM-DD");
    let latestDate = moment(startDate).subtract(1, "days").format("YYYY-MM-DD");
    setEnd(endDate);
    setStart(startDate);
    setLatest(latestDate);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length} //This is important field to render the next data
        next={() => fetchData(start, end)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <CardWrapper data={posts} />
      </InfiniteScroll>
    </>
  );
}
