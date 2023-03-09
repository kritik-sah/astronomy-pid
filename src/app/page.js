import Spotlight from "@/components/Spotlight/Spotlight";
import { Suspense } from "react";
import Loading from "./Loading";
import { InfiniteScrollWrapper } from "@/components/infinitescroll/InfiniteScroll";
import moment from "moment/moment";
import SimpleCardWrapper from "@/components/PictureCard/SimpleCardWrapper";

let api = process.env.NEXT_PUBLIC_API;

let latestDate = moment().format("YYYY-MM-DD"); // todays date

async function getData(startDate, endDate) {
  const res = await fetch(
    `${api}${startDate ? "&start_date=" + startDate : null}${
      endDate ? "&end_date=" + endDate : null
    }`,
    { next: { revalidate: 1 * 24 * 60 * 60 } } // day * 24 hrs * 60 mins * 60 seconds
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  let todaysDate = moment().format("YYYY-MM-DD"); // todays date
  const endDate = moment(todaysDate).subtract(1, "days").format("YYYY-MM-DD");
  const startDate = moment(endDate).subtract(7, "days").format("YYYY-MM-DD"); // older dates - getting records for min 8 days
  latestDate = startDate;
  const data = (await getData(startDate, endDate)).reverse();

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Spotlight data={data[0]} />
        <SimpleCardWrapper
          data={data.slice(1, data.length)}
          title="Best of last 7 days."
        />
        <InfiniteScrollWrapper />
      </main>
    </Suspense>
  );
}
