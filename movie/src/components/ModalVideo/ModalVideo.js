import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";

//Importacion de estilos
import "./ModalVideo.scss";

const ModalVideo = (props) => {
  const { videoKey, videoPlatform, isOpen, close } = props;

  return (
    <Modal
      className="modal-video"
      open={isOpen}
      centered
      onCancel={close}
      footer={false}
    >
      Este es mi modal
    </Modal>
  );
};

export default ModalVideo;
