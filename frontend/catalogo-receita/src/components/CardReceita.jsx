import React from "react";
import styles from './CardReceita.module.css';

function CardReceita({ nome, categoria, descricao, imagem }){
    return(
        <div className={styles.card}>
            <img src={imagem} alt={nome} className={styles.img} />
            <h3>{nome}</h3>
            <p><strong>Categoria:</strong> {categoria} </p>
            <p>{descricao}</p>
        </div>
    );
}

export default CardReceita;
