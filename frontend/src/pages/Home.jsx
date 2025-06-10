import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardReceita from "../components/CardReceita";
import styles from "./Home.module.css";
import api from "../services/api";

function Home() {
  const [receitas, setReceitas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchReceitas() {
      try {
        const res = await api.get("/api/receitas");
        setReceitas(res.data);
      } catch (error) {
        console.error("Erro ao buscar receitas: ", error);
      }
    }
    fetchReceitas();
  }, []);

  const handleDelete = async (id) => {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir esta receita?"
    );

    if (confirmar) {
      try {
        await api.delete(`/api/receitas/${id}`);
        setReceitas(receitas.filter((receita) => receita._id !== id));
        alert("Receita excluída com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir receita:", error);
        alert("Ocorreu um erro ao excluir a receita.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2>Lista de Receitas</h2>
      <div className={styles.lista}>
        {receitas.map((receita) => (
          <div key={receita._id} className={styles.receitaItem}>
            <CardReceita
              nome={receita.nome}
              categoria={receita.categoria}
              descricao={receita.descricao}
              imagem={receita.imagem}
            />
            <button
              onClick={() => navigate(`/editar/${receita._id}`)}
              className={styles.botaoEditar}
            >
              Editar
            </button>
            <button
              onClick={() => handleDelete(receita._id)}
              className={styles.botaoExcluir}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
