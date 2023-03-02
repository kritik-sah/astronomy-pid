"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import { FaRegPlayCircle } from "react-icons/fa";

const VideoModal = (props) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <div onClick={() => setIsVideoOpen(!isVideoOpen)} className="relative">
        <Image
          className="rounded-xl shadow hover:scale-95 hover:shadow-lg transition-all ease-in delay-100 duration-200"
          src={props.thumbnail}
          alt={props.alt}
          height={500}
          width={500}
        />
        <span>
          <FaRegPlayCircle className="h-10 w-10 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-slate-50 opacity-75 hover:opacity-100" />
        </span>
      </div>
      <FsLightbox toggler={isVideoOpen} sources={[props.url]} />
    </>
  );
};

export default VideoModal;
