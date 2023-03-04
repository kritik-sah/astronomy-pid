"use client";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import Spotlight from "../Spotlight/Spotlight";

const Readmore = ({ data }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setIsOpenModal(true);
        }}
        size="large"
        className="bg-red-500 hover:!bg-red-600 mt-4"
        type="primary"
      >
        Read More
      </Button>
      <Modal
        open={isOpenModal}
        footer={null}
        onCancel={() => setIsOpenModal(false)}
        width={"90%"}
      >
        <Spotlight data={data} showFullDesc={true} />
      </Modal>
    </div>
  );
};

export default Readmore;
