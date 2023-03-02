import CardWrapper from "@/components/PictureCard/CardWrapper";
import Spotlight from "@/components/Spotlight/Spotlight";
import { Suspense } from "react";
import Loading from "./loading";
import SimpleCardWrapper from "@/components/PictureCard/SimpleCardWrapper";

async function getData() {
  const res = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=2022-10-01&end_date=2022-10-29&thumbs=true"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Spotlight data={data[0]} />
        <CardWrapper data={data.slice(1, data.length)} />
      </main>
    </Suspense>
  );
}
