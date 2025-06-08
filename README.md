# 🍳 Catálogo de Receitas

Projeto **full stack** de um **catálogo de receitas**, onde é possível adicionar, visualizar, editar e remover suas receitas favoritas.  
Esta aplicação foi desenvolvida como **projeto final** para a disciplina de *Linguagem de Programação para Internet*.

---

## ✨ Funcionalidades

- 📋 **Visualização Completa**: Lista todas as receitas cadastradas na página inicial.  
- ➕ **Cadastro de Receitas**: Permite adicionar novas receitas através de um formulário simples.  
- ✏️ **Edição Detalhada**: Altere qualquer informação de uma receita já existente.  
- 🗑️ **Exclusão Segura**: Remova receitas do catálogo com uma confirmação.

---

## 💻 Tecnologias Utilizadas

### Frontend
- ⚛️ [React](https://reactjs.org/)
- 🔁 [React Router DOM](https://reactrouter.com/)
- 🔗 [Axios](https://axios-http.com/)
- 🎨 CSS Modules

### Backend
- 🟢 [Node.js](https://nodejs.org/)
- 🚀 [Express](https://expressjs.com/)
- 🌱 [Mongoose](https://mongoosejs.com/)
- 🗃️ [MongoDB](https://www.mongodb.com/)
- 🔓 [Cors](https://www.npmjs.com/package/cors)
- 🔐 [Dotenv](https://www.npmjs.com/package/dotenv)

---

## 🚀 Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo.

### ⚙️ Pré-requisitos
- [Node.js](https://nodejs.org/) instalado
- [MongoDB](https://www.mongodb.com/) instalado e rodando

### 1. Backend

```bash
# Clone o repositório
git clone https://github.com/paulog357fribeiro/catalogo-receitas.git

# Navegue até a pasta do backend
cd catalogo-receitas/backend

# Instale as dependências
npm install

# Crie um arquivo .env com a variável de conexão
echo "MONGO_URI=mongodb+srv://seu_usuario:sua_senha@..." > .env

# Inicie o servidor backend
npm start
```

### 2. Frontend

```bash
# Em um novo terminal, vá para a pasta do frontend
cd ../frontend

# Instale as dependências
npm install

# Inicie a aplicação React
npm start

A aplicação estará disponível em: http://localhost:3000

👨‍💻 Autor
Feito com ❤️ por Paulo Gabriel & Gustavo Chaves
```
