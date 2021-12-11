import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { MyContext } from "../../context/MyContext";
import { imagesThumbnail, imagesBackground } from "../../utils";
import Sdireita from "../../assets/images/icon-next.svg";
import Sesquerda from "../../assets/images/icon-previous.svg";
import styles from "./styles.module.scss";

function Home() {
  const { itemCount, plusProduct, lessProduct, addToCart, teste } =
    useContext(MyContext);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.products}>
        <div className={styles.arrow}>
          <img src={Sesquerda} alt="Imagem" />
          <img src={Sdireita} alt="Imagem" />
        </div>

        <img src={imagesBackground.image11} alt="Imagem" />

        <div className={styles.outerProduction}>
          <img onClick={teste} src={imagesThumbnail.image01} alt="Products" />
          <img onClick={teste} src={imagesThumbnail.image02} alt="Products" />
          <img onClick={teste} src={imagesThumbnail.image03} alt="Products" />
          <img onClick={teste} src={imagesThumbnail.image04} alt="Products" />
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
    </main>
  );
}

export { Home };
