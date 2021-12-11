import React, { useState } from "react";
import { MyContext } from "./MyContext";

export function MyProvider({ children }) {
  const [count, setCount] = useState(0);
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeCart, setActiveCart] = useState(false);

  const [itemCount, setItemCount] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  function plusProduct() {
    setCount(count + 1);
  }

  function lessProduct() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return count === 0;
    }
  }

  function toggleModeMenu() {
    setActiveMenu(!activeMenu);
  }

  function toggleModeCart() {
    setActiveCart(!activeCart);
  }

  //News Functions

  function addItemHandler() {
    setItemCount(itemCount + 1);

    if (itemCount >= 5) {
      setItemCount(5);
    }
  }

  function removeItemHandler() {
    setItemCount(itemCount - 1);

    if (itemCount <= 0) {
      setItemCount(0);
    }
  }

  function addToCartHandler() {
    if (itemCount >= 1) {
      setAddedToCart(true);
    }
    setCartTotal(cartTotal + itemCount);
  }

  function deleteItemHandler() {
    setCartTotal(cartTotal - 1);

    if (cartTotal <= 1) {
      setAddedToCart(false);
    }
  }

  return (
    <MyContext.Provider
      value={{
        count,
        activeMenu,
        activeCart,
        plusProduct,
        lessProduct,
        toggleModeMenu,
        toggleModeCart,

        itemCount,
        cartTotal,
        addedToCart,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        deleteItem: deleteItemHandler,
        addToCart: addToCartHandler,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
