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

  const [itemCount, setItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [indexArrayImage, setIndexArrayImage] = useState(0);

  const [activeMenu, setActiveMenu] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

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
    setImages(imagesBackground[indexArrayImage]);
    setItemCount(0);
  }

  function deleteItemHandler() {
    setCartTotal(0);
    setAddedToCart(false);
  }

  function nextImage() {
    setIndexArrayImage(indexArrayImage + 1);

    if (indexArrayImage === false || indexArrayImage >= 4) {
      return setIndexArrayImage(0);
    }

    setImages(imagesBackground[indexArrayImage]);
  }

  function previousImage() {
    setIndexArrayImage(indexArrayImage - 1);

    if (indexArrayImage === false || indexArrayImage < 0) {
      return setIndexArrayImage(3);
    }

    setImages(imagesBackground[indexArrayImage]);
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
    nextImage,
    previousImage,
  };

  return (
    <MyContext.Provider value={cartContext}>{children}</MyContext.Provider>
  );
}
