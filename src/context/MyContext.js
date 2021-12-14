import React, { createContext, useState } from "react";

import { imagesBackground } from "../utils";

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
  const [images, setImages] = useState(imagesBackground[0]);
  const [activeModal, setActiveModal] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [t, setT] = useState([imagesBackground]);

  function toggleModeModal() {
    setActiveModal(!activeModal);
  }

  function toggleModeMenu() {
    setActiveMenu(!activeMenu);
  }

  function toggleModeCart() {
    setActiveCart(!activeCart);
  }

  function addItemHandler() {
    setItemCount(itemCount + 1);
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
    setCartTotal(0);
    setAddedToCart(false);
  }

  function teste() {
    console.log(setT(t[0]));
  }

  const cartContext = {
    images,
    activeModal,
    activeMenu,
    activeCart,
    itemCount,
    cartTotal,
    addedToCart,
    setImages,
    toggleModeModal,
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
