import React, { useContext } from "react";

import { Button } from "../Button";
import { MyContext } from "../../context/MyContext";
import { icons, imagesBackground } from "../../utils";

import styles from "./styles.module.scss";

function Cart() {
  const { activeCart, toggleModeCart, cartTotal, deleteItem, indexArrayImage } =
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
          <img src={icons.close} alt="Fecha" />
        </button>
      </header>

      <main>
        {numberOfItem === 0 ? (
          <p id={styles.cartVoid}>Your Cart is empty</p>
        ) : (
          <>
            <div className={styles.product}>
              <img
                id={styles.imageProduct}
                src={imagesBackground[indexArrayImage]}
                alt="product"
              />

              <div className={styles.text}>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x{numberOfItem}
                  {""} <b>{`$${125 * numberOfItem}.00`}</b>
                </p>
              </div>

              <button id={styles.delete}>
                <img src={icons.delete} alt="Delte" onClick={deleteItem} />
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
