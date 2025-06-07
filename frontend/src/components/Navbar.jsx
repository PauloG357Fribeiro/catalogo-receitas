import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <h1>Catálogo de Receitas</h1>
      </Link>
      <ul className={styles.links}>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/nova">Nova Receita</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
