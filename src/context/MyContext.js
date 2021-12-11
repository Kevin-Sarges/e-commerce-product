import { createContext } from "react";

export const MyContext = createContext({
  itemCount: 0,
  cartTotal: 0,
  addedToCart: false,
  addItem: () => {},
  removeItem: () => {},
  deleteItem: () => {},
  addToCart: () => {},
});
