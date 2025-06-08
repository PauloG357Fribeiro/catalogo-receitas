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
        const res = await api.get('/');
        setReceitas(res.data);
      } catch (error) {
        console.error('Erro ao buscar receitas: ', error);
      }
    }
    fetchReceitas();
  }, []);

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
              className={styles.botaoEditar}
              onClick={() => navigate(`/editar/${receita._id}`)}
            >
              Editar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;