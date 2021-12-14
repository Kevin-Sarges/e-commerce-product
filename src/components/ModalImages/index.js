import React, { useContext } from "react";

import { imagesBackground, imagesThumbnail, icons } from "../../utils";
import { MyContext } from "../../context/MyContext";
import styles from "./styles.module.scss";

function ModalImages() {
  const { images, setImages, activeModal, toggleModeModal, teste } =
    useContext(MyContext);

  return (
    <div
      className={
        activeModal ? styles.modalContainerActive : styles.modalContainerHidden
      }
    >
      <img
        id={styles.closeModal}
        onClick={toggleModeModal}
        src={icons.close}
        alt="Fechar"
      />
      <div className={styles.arrowModal}>
        <img src={icons.previous} alt="Imagem" />
        <img onClick={teste} src={icons.next} alt="Imagem" />
      </div>

      <img id={styles.imageProduct} src={images} alt="Imagem" />

      <div className={styles.outerProductionModal}>
        <img
          onClick={() => setImages(imagesBackground[0])}
          src={imagesThumbnail.image01}
          alt="Products"
        />
        <img
          onClick={() => setImages(imagesBackground[1])}
          src={imagesThumbnail.image02}
          alt="Products"
        />
        <img
          onClick={() => setImages(imagesBackground[2])}
          src={imagesThumbnail.image03}
          alt="Products"
        />
        <img
          onClick={() => setImages(imagesBackground[3])}
          src={imagesThumbnail.image04}
          alt="Products"
        />
      </div>
    </div>
  );
}

export { ModalImages };
