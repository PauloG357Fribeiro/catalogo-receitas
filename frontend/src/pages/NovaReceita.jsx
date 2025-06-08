import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./NovaReceita.module.css";

function NovaReceita() {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !categoria || !descricao || !imagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const novaReceita = { nome, categoria, descricao, imagem };

    try {
      await axios.post("http://localhost:5004/api/receitas", novaReceita);
      alert("Receita cadastrada com sucesso!");
      navigate("/");
    } catch (err) {
      alert("Erro ao cadastrar receita.");
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Cadastrar Nova Receita</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Título:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Título da Receita"
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
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default NovaReceita;