import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import styles from './NovaReceita.module.css';

function EditarReceita() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReceita() {
      try {
        const response = await api.get(`/receitas/${id}`);
        const receita = response.data;
        
        setNome(receita.nome);
        setCategoria(receita.categoria);
        setDescricao(receita.descricao);
        setImagem(receita.imagem);
        
      } catch (error) {
        console.error("Erro ao buscar dados da receita:", error);
        alert("Não foi possível carregar os dados da receita.");
      } finally {
        setLoading(false);
      }
    }

    fetchReceita();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !categoria || !descricao || !imagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const receitaAtualizada = { nome, categoria, descricao, imagem };

    try {
      await api.put(`/receitas/${id}`, receitaAtualizada);
      alert('Receita atualizada com sucesso!');
      navigate('/');
    } catch (error) {
      console.error("Erro ao atualizar a receita:", error);
      alert("Erro ao atualizar a receita. Tente novamente.");
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className={styles.container}>
      <h2>Editar Receita</h2>
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
          Atualizar Receita
        </button>
      </form>
    </div>
  );
}

export default EditarReceita;