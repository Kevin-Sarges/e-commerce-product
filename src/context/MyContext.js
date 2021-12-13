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
  const [images, setImages] = useState(imagesBackground.image11);
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

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

  /*
    if (images === imagesBackground.image11) {
      setImages(imagesBackground.image22);
    } else if (
      images === imagesBackground.image22 &&
      imagesBackground.image11
    ) {
      setImages(imagesBackground.image33);
    } else if (
      images === imagesBackground.image33 &&
      images === imagesBackground.image22 &&
      images === imagesBackground.image11
    ) {
      setImages(imagesBackground.image44);
    } else {
      setImages(imagesBackground.image11);
    }
  */

  const cartContext = {
    images,
    activeMenu,
    activeCart,
    itemCount,
    cartTotal,
    addedToCart,
    setImages,
    toggleModeMenu,
    toggleModeCart,
    plusProduct: addItemHandler,
    lessProduct: removeItemHandler,
    deleteItem: deleteItemHandler,
    addToCart: addToCartHandler,
  };

  return (
    <MyContext.Provider value={cartContext}>{children}</MyContext.Provider>
  );
}
