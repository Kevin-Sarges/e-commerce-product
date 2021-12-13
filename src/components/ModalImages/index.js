import React, { useContext } from "react";

import { imagesBackground, imagesThumbnail, icons } from "../../utils";
import { MyContext } from "../../context/MyContext";
import styles from "./styles.module.scss";

function ModalImages() {
  const { images, setImages, activeModal, toggleModeModal } =
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
        <img src={icons.next} alt="Imagem" />
      </div>

      <img id={styles.imageProduct} src={images} alt="Imagem" />

      <div className={styles.outerProductionModal}>
        <img
          onClick={() => setImages(imagesBackground.image11)}
          src={imagesThumbnail.image01}
          alt="Products"
        />
        <img
          onClick={() => setImages(imagesBackground.image22)}
          src={imagesThumbnail.image02}
          alt="Products"
        />
        <img
          onClick={() => setImages(imagesBackground.image33)}
          src={imagesThumbnail.image03}
          alt="Products"
        />
        <img
          onClick={() => setImages(imagesBackground.image44)}
          src={imagesThumbnail.image04}
          alt="Products"
        />
      </div>
    </div>
  );
}

export { ModalImages };
