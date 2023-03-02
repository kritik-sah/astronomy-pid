import Image from "next/image";
import React from "react";
import VideoModal from "../utils/VideoModal";

const temp = {
  date: "2022-10-02",
  explanation:
    "What could shoot out a neutron star like a cannon ball? A supernova.  About 10,000 years ago, the supernova that created the nebular remnant CTB 1 not only destroyed a massive star but blasted its newly formed neutron star core -- a pulsar -- out into the Milky Way Galaxy.  The pulsar, spinning 8.7 times a second, was discovered using downloadable software Einstein@Home searching through data taken by NASA's orbiting Fermi Gamma-Ray Observatory.  Traveling over 1,000 kilometers per second, the pulsar PSR J0002+6216 (J0002 for short) has already left the supernova remnant CTB 1, and is even fast enough to leave our Galaxy. Pictured, the trail of the pulsar is visible extending to the lower left of the supernova remnant.  The featured image is a combination of radio images from the VLA and DRAO radio observatories, as well as data archived from NASA's orbiting IRAS infrared observatory. It is well known that supernovas can act as cannons, and even that pulsars can act as cannonballs -- what is not known is how supernovas do it.",
  hdurl:
    "https://apod.nasa.gov/apod/image/2210/CannonSupernova_English_8404.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Supernova Cannon Expels Pulsar J0002",
  url: "https://apod.nasa.gov/apod/image/2210/CannonSupernova_English_960.jpg",
};

const Spotlight = ({ data, showFullDesc }) => {
  return (
    <section
      className="spotlight"
      style={{
        background: `url("${data.url}")`,
      }}
    >
      <div className="relative top-0 left-0 w-full h-fit overlay">
        <div
          className={`spotlight-item flex-col-reverse md:flex-row w-full ${
            showFullDesc ? "md:w-11/12" : "md:w-9/12"
          }  bg-red-50 shadow-sm shadow-red-300`}
        >
          <div className="w-full md:w-6/12">
            <h3 className="text-4xl text-gray-700 mb-2">{data.title}</h3>
            {showFullDesc ? (
              <p className="text-gray-600 mb-2">{data.explanation}</p>
            ) : (
              <p className="text-gray-600 mb-2">
                {`${data.explanation.substring(
                  0,
                  Math.min(200, data.explanation.length)
                )}${data.explanation.length > 200 ? "..." : null}`}
              </p>
            )}

            <p className="text-sm text-red-700 font-semibold">{`Author : "${data.copyright}"`}</p>
          </div>
          <div className="w-full md:w-6/12">
            {showFullDesc ? (
              data.media_type === "image" ? (
                <Image
                  className="rounded-xl shadow hover:scale-95 hover:shadow-lg transition-all ease-in delay-100 duration-200"
                  src={
                    data.media_type === "image"
                      ? data.hdurl
                      : data.thumbnail_url
                  }
                  alt={data.title}
                  height={500}
                  width={500}
                />
              ) : (
                <VideoModal
                  thumbnail={data.thumbnail_url}
                  alt={data.title}
                  url={data.url}
                />
              )
            ) : (
              <Image
                className="rounded-xl shadow hover:scale-95 hover:shadow-lg transition-all ease-in delay-100 duration-200"
                src={
                  data.media_type === "image" ? data.hdurl : data.thumbnail_url
                }
                alt={data.title}
                height={500}
                width={500}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
