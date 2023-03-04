import CardWrapper from "@/components/PictureCard/CardWrapper";
import Spotlight from "@/components/Spotlight/Spotlight";
import { Suspense } from "react";
import Loading from "./Loading";
import { InfiniteScrollWrapper } from "@/components/infinitescroll/InfiniteScroll";
import moment from "moment/moment";
import SimpleCardWrapper from "@/components/PictureCard/SimpleCardWrapper";

let api =
  "https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&thumbs=true";

let latestDate = moment().format("YYYY-MM-DD"); // todays date

async function getData(startDate, endDate) {
  const res = await fetch(
    `${api}${startDate ? "&start_date=" + startDate : null}${
      endDate ? "&end_date=" + endDate : null
    }`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home({ searchParams }) {
  const { page } = searchParams;

  const intPage = parseInt(page ?? "0");
  const todaysDate = moment().format("YYYY-MM-DD"); // todays date
  const startDate = moment(
    moment(todaysDate).subtract(7, "days").calendar()
  ).format("YYYY-MM-DD"); // older dates - getting records for min 8 days
  latestDate = startDate;
  const data = (await getData(startDate, todaysDate)).reverse();

  return (
    <main>
      <Spotlight data={data[0]} />
      <SimpleCardWrapper
        data={data.slice(1, data.length)}
        title="Best of last 7 days."
      />

      <InfiniteScrollWrapper>
        <>
          {[...Array(intPage + 1)].map((_, index) => {
            const limit = latestDate;
            const start = moment(
              moment(limit).subtract(10, "days").calendar()
            ).format("YYYY-MM-DD"); // older dates - start date
            latestDate = start;

            /** @ts-ignore */
            return <Page start={start} limit={limit} key={start} />;
          })}
        </>
      </InfiniteScrollWrapper>
    </main>
  );
}

async function Page({ start, limit }) {
  let url = `${api}${start ? "&start_date=" + start : null}${
    limit ? "&end_date=" + limit : null
  }`;
  const response = await fetch(url);
  const data = (await response.json()).reverse();

  return (
    <Suspense fallback={<Loading />}>
      <CardWrapper data={data.slice(1, data.length)} />
    </Suspense>
  );
}
