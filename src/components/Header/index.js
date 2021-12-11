import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Cart } from "../Cart";
import { SideBarMenu } from "../SideBarMenu";
import { MyContext } from "../../context/MyContext";

import Avatar from "../../assets/images/image-avatar.png";
import Logo from "../../assets/images/logo.svg";
import Menu from "../../assets/images/icon-menu.svg";

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
          <img src={Menu} alt="Menu" onClick={toggleModeMenu} />
        </button>
        <img src={Logo} alt="Logo" />

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
        <img className={styles.avatar} src={Avatar} alt="Avaltar" />
      </div>
    </header>
  );
}

export { Header };
