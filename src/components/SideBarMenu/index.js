import React, { useContext } from "react";
import { MyProvider } from "../../context/MyProvider";

import Close from "../../assets/images/icon-close.svg";
import styles from "./styles.module.scss";

function SideBarMenu() {
  const { activeMenu, toggleModeMenu } = useContext(MyProvider);

  return (
    <aside
      className={
        activeMenu
          ? styles.sidebarContainerActive
          : styles.sidebarContainerHidden
      }
    >
      <div className={styles.menu}>
        <button onClick={toggleModeMenu}>
          <img src={Close} alt="Fecha" />
        </button>

        <ul className={styles.options}>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </aside>
  );
}

export { SideBarMenu };
