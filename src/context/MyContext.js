import React, { createContext, useState } from "react";

export const MyContext = createContext({
  itemCount: 0,
  cartTotal: 0,
  addedToCart: false,
  addItem: () => {},
  removeItem: () => {},
  deleteItem: () => {},
  addToCart: () => {},
});

export function MyProvider({ children }) {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [images, setImages] = useState();

  function toggleModeMenu() {
    setActiveMenu(!activeMenu);
  }

  function toggleModeCart() {
    setActiveCart(!activeCart);
  }

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
    if (cartContext.itemCount >= 1) {
      setAddedToCart(true);
    }
    setCartTotal(cartTotal + itemCount);
    setItemCount(0);
  }

  function deleteItemHandler() {
    setCartTotal(cartTotal - 1);

    if (cartTotal <= 1) {
      setAddedToCart(false);
    }
  }

  function teste() {
    setImages(alert("teste"));
  }

  const cartContext = {
    activeMenu,
    activeCart,
    itemCount,
    cartTotal,
    addedToCart,

    toggleModeMenu,
    toggleModeCart,
    plusProduct: addItemHandler,
    lessProduct: removeItemHandler,
    deleteItem: deleteItemHandler,
    addToCart: addToCartHandler,
    teste,
  };

  return (
    <MyContext.Provider value={cartContext}>{children}</MyContext.Provider>
  );
}
