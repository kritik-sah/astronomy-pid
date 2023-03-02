"use client";
import { Modal } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import Spotlight from "../Spotlight/Spotlight";

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
