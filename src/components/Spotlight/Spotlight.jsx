import Image from "next/image";
import React from "react";
import VideoModal from "../utils/VideoModal";
import Readmore from "../ReadMore/Readmore";

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
            {!showFullDesc ? <Readmore data={data} /> : null}
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
