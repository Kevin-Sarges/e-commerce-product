import React, { useContext } from "react";

import { MyContext } from "../../context/MyContext";
import { Button } from "../Button";

import Image11 from "../../assets/images/image-product-1-thumbnail.jpg";
import Close from "../../assets/images/icon-close.svg";
import Delete from "../../assets/images/icon-delete.svg";
import styles from "./styles.module.scss";

function Cart() {
  const { activeCart, toggleModeCart, cartTotal, deleteItem } =
    useContext(MyContext);
  let numberOfItem = cartTotal;

  return (
    <div
      className={
        activeCart ? styles.cartContainerActive : styles.cartContainerHidden
      }
    >
      <header>
        <h4>Cart</h4>

        <button onClick={toggleModeCart}>
          <img src={Close} alt="Fecha" />
        </button>
      </header>

      <main>
        {numberOfItem === 0 ? (
          <p id={styles.cartVoid}>Your Cart is empty</p>
        ) : (
          <>
            <div className={styles.product}>
              <img id={styles.imageProduct} src={Image11} alt="product" />

              <div className={styles.text}>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x{numberOfItem}
                  {""} <b>{`$${125 * numberOfItem}.00`}</b>
                </p>
              </div>

              <button id={styles.delete}>
                <img src={Delete} alt="Delte" onClick={deleteItem} />
              </button>
            </div>

            <Button>Checkout</Button>
          </>
        )}
      </main>
    </div>
  );
}

export { Cart };
