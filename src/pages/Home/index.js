import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { MyContext } from "../../context/MyContext";
import { ModalImages } from "../../components/ModalImages";
import { imagesThumbnail, imagesBackground, icons } from "../../utils";

import styles from "./styles.module.scss";

function Home() {
  const {
    images,
    setImages,
    itemCount,
    plusProduct,
    lessProduct,
    addToCart,
    activeModal,
    toggleModeModal,
  } = useContext(MyContext);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.products}>
        <div className={styles.arrow}>
          <img src={icons.previous} alt="Imagem" />
          <img src={icons.next} alt="Imagem" />
        </div>

        <img onClick={toggleModeModal} src={images} alt="Imagem" />

        <div className={styles.outerProduction}>
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

      <div className={styles.descriptionProduct}>
        <h3>Sneaker Company</h3>

        <h1>Fall Limited Edition Sneakers</h1>

        <p className={styles.describeProduct}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, theyll withstand everything the
          weather can offer.
        </p>

        <div className={styles.priceProducts}>
          <b>
            $125.00
            <p id={styles.desc}>50%</p>
          </b>
          <p>$250.00</p>
        </div>

        <div className={styles.buttonCart}>
          <div className={styles.buttonCount}>
            <button onClick={lessProduct}>-</button>
            {itemCount}
            <button onClick={plusProduct}>+</button>
          </div>

          <button onClick={addToCart}>
            <AiOutlineShoppingCart /> Add to cart
          </button>
        </div>
      </div>

      {activeModal ? <ModalImages /> : ""}
    </main>
  );
}

export { Home };
