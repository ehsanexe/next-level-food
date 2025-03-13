import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";
import styles from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="./">
        <img src={Logo.src} />
        The Foodies
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="meals">Browse Meals</Link>{" "}
          </li>
          <li>
            <Link href="community">Foodies Community</Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}
