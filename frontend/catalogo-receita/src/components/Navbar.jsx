import React from "react";
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>Catálogo  de Receitas</h1>
            <ul className={styles.links}>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/nova">Nova Receita</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;