"use client";
import { Modal } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import Spotlight from "../Spotlight/Spotlight";
import { forwardRef } from "react";

const PictureCard = ({ data }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <div className="pic-card shadow-sm" onClick={() => setIsOpenModal(true)}>
        <div className="">
          {
            <Image
              className="rounded-xl shadow hover:scale-95 hover:shadow-lg transition-all ease-in delay-100 duration-200"
              src={
                data.media_type === "image" ? data.hdurl : data.thumbnail_url
              }
              alt={data.title}
              height={500}
              width={500}
            />
          }
        </div>
        <div className="">
          <span className="date-tag mb-6">{data.date}</span>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            {data.title}
          </h3>
        </div>
      </div>
      <Modal
        open={isOpenModal}
        footer={null}
        onCancel={() => setIsOpenModal(false)}
        width={"90%"}
      >
        <Spotlight data={data} showFullDesc={true} />
      </Modal>
    </>
  );
};

export default PictureCard;

export const ItemLoading = forwardRef(function ItemLoading(_, ref) {
  return (
    <div
      // @ts-ignore
      ref={ref}
      className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-4 py-6"
    >
      <div className="flex flex-col space-y-4 h-full items-center justify-center text-center">
        <div className="animate-pulse bg-neutral-200 dark:bg-neutral-600 rounded-lg w-32 h-32 max-w-full" />
        <div className="animate-pulse bg-neutral-200 dark:bg-neutral-600 rounded-lg w-12 h-8" />
        <div className="animate-pulse bg-neutral-200 dark:bg-neutral-600 rounded-lg w-48 max-w-full h-12" />
      </div>
    </div>
  );
});

export const PictureCard2 = ({ data }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <div
        className="pic-card2 shadow-sm"
        style={{
          backgroundImage: `url(${
            data.media_type === "image" ? data.url : data.thumbnail_url
          })`,
        }}
        onClick={() => setIsOpenModal(true)}
      >
        <div className="overlay border-b-4 hover:border-red-500 transition-all delay-100 duration-100">
          <span className="date-tag mb-6">{data.date}</span>
          <h3 className="text-xl font-semibold text-gray-100 mb-2">
            {data.title}
          </h3>
        </div>
      </div>
      <Modal
        open={isOpenModal}
        footer={null}
        onCancel={() => setIsOpenModal(false)}
        width={"90%"}
      >
        <Spotlight data={data} showFullDesc={true} />
      </Modal>
    </>
  );
};
