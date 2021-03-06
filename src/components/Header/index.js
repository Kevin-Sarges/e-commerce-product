import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Cart } from "../Cart";
import { SideBarMenu } from "../SideBarMenu";
import { MyContext } from "../../context/MyContext";
import { icons, outerImages } from "../../utils";

import styles from "./styles.module.scss";

function Header() {
  const {
    activeMenu,
    activeCart,
    addedToCart,
    cartTotal,
    toggleModeMenu,
    toggleModeCart,
  } = useContext(MyContext);

  return (
    <header className={styles.headerContainer}>
      <ul className={styles.navBar}>
        <button id={styles.menu}>
          <img src={icons.menu} alt="Menu" onClick={toggleModeMenu} />
        </button>
        <img src={outerImages.Logo} alt="Logo" />

        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      {activeMenu ? <SideBarMenu /> : ""}

      <div>
        <AiOutlineShoppingCart size="30" onClick={toggleModeCart} />
        {addedToCart && <span>{cartTotal}</span>}
        {activeCart ? <Cart /> : ""}
        <img className={styles.avatar} src={outerImages.Avatar} alt="Avaltar" />
      </div>
    </header>
  );
}

export { Header };
