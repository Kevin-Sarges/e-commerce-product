import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Image01 from "../../assets/images/image-product-1.jpg";
import Image11 from "../../assets/images/image-product-1-thumbnail.jpg";
import Image02 from "../../assets/images/image-product-2-thumbnail.jpg";
import Image03 from "../../assets/images/image-product-3-thumbnail.jpg";
import Image04 from "../../assets/images/image-product-4-thumbnail.jpg";
import Sdireita from "../../assets/images/icon-next.svg";
import Sesquerda from "../../assets/images/icon-previous.svg";

import { Button } from "../../components/Button";
import { MyProvider } from "../../context/MyProvider";
import styles from "./styles.module.scss";

function Home() {
  const { count, plusProduct, lessProduct } = useContext(MyProvider);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.products}>
        <div className={styles.arrow}>
          <img src={Sesquerda} alt="Imagem" />
          <img src={Sdireita} alt="Imagem" />
        </div>

        <img src={Image01} alt="Imagem" />

        <div className={styles.outerProduction}>
          <img src={Image11} alt="Products" />
          <img src={Image02} alt="Products" />
          <img src={Image03} alt="Products" />
          <img src={Image04} alt="Products" />
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
            {count}
            <button onClick={plusProduct}>+</button>
          </div>

          <Button>
            <AiOutlineShoppingCart /> Add to cart
          </Button>
        </div>
      </div>
    </main>
  );
}

export { Home };
