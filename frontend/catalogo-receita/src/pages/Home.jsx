import React from "react";
import CardReceita from "../components/CardReceita";
import styles from "./Home.module.css";

function Home() {
  const receitas = [
    {
      id: 1,
      nome: "Bolo de Cenoura",
      categoria: "Sobremesa",
      descricao: "Bolo macio com cobertura de chocolate.",
      imagem:
        "https://images.unsplash.com/photo-1587306433599-44cd81cbde86?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      nome: "Lasanha",
      categoria: "Prato Principal",
      descricao: "Lasanha à bolonhesa com queijo.",
      imagem:
        "https://images.unsplash.com/photo-1709429790175-b02bb1b19207?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className={styles.container}>
      <h2>Lista de Receitas</h2>
      <div className={styles.lista}>
        {receitas.map((receita) => (
          <CardReceita
            key={receita.id}
            nome={receita.nome}
            categoria={receita.categoria}
            descricao={receita.descricao}
            imagem={receita.imagem}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
