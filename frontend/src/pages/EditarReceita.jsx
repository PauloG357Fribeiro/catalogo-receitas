import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./NovaReceita.module.css";

function EditarReceita() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");

  useEffect(() => {
    async function buscarReceita() {
      try {
        const res = await axios.get(`http://localhost:5004/receitas/${id}`);
        const receita = res.data;
        setNome(receita.nome);
        setCategoria(receita.categoria);
        setDescricao(receita.descricao);
        setImagem(receita.imagem);
      } catch (error) {
        console.error("Erro ao buscar receita:", error);
        alert("Erro ao carregar os dados da receita.");
      }
    }

    buscarReceita();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/receitas/${id}`, {
        nome,
        categoria,
        descricao,
        imagem
      });
      alert("Receita atualizada com sucesso!");
      navigate("/");
    } catch (err) {
      console.error("Erro ao atualizar receita:", err);
      alert("Erro ao atualizar receita.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Editar Receita</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome da Receita"
          />
        </label>

        <label>
          Categoria:
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            placeholder="Ex: Sobremesa, Prato Principal"
          />
        </label>

        <label>
          Descrição:
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição da receita"
          />
        </label>

        <label>
          URL da Imagem:
          <input
            type="text"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            placeholder="https://exemplo.com/imagem.jpg"
          />
        </label>

        <button type="submit" className={styles.botao}>
          Atualizar
        </button>
      </form>
    </div>
  );
}

export default EditarReceita;
