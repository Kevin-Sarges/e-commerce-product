import React, { useContext } from "react";

import { icons } from "../../utils";
import { MyContext } from "../../context/MyContext";

import styles from "./styles.module.scss";

function SideBarMenu() {
  const { activeMenu, toggleModeMenu } = useContext(MyContext);

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
          <img src={icons.close} alt="Fecha" />
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
