# Cadastro e Listagem de Produtos

Bem-vindo ao projeto de **Cadastro e Listagem de Produtos**! Este é um exemplo prático de uma aplicação full stack que utiliza TypeScript tanto no frontend quanto no backend, utilizando React com Vite para o frontend e Node.js com Express para o backend. O objetivo deste projeto é demonstrar uma forma simples e eficiente de gerenciar produtos, desde o cadastro até a listagem, com uma interface de usuário amigável e uma API robusta.

## Tecnologias Utilizadas

- **Frontend:**
  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)
  - [TypeScript](https://www.typescriptlang.org/)

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [TypeScript](https://www.typescriptlang.org/)

## Funcionalidades

### Cadastro de Produtos

- **Formulário de Cadastro:**
  - Nome do produto (campo de texto)
  - Descrição do produto (campo de texto)
  - Valor do produto (campo de valor)
  - Disponível para venda (campo com opções "sim" / "não")

### Listagem de Produtos

- **Colunas da Listagem:**
  - Nome do produto
  - Valor do produto

- **Ordenação:**
  - Ordenação por valor do menor para o maior

- **Navegação:**
  - Quando um novo produto é cadastrado, a listagem é exibida automaticamente
  - Botão para cadastrar um novo produto a partir da listagem

## Estrutura do Projeto

```
my-app/
├── client/ (Frontend)
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── ProductForm.tsx
│       │   └── ProductList.tsx
│       ├── App.tsx
│       ├── main.tsx
│       └── App.css
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── server/ (Backend)
│   ├── src/
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── dist/ (output da build)
└── README.md
```

## Instalação e Execução

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Backend

1. **Navegue até a pasta do servidor:**

   ```sh
   cd server
   ```

2. **Instale as dependências:**

   ```sh
   npm install
   ```

3. **Inicie o servidor:**

   ```sh
   npm start
   ```

   O servidor estará rodando em `http://localhost:3000`.

### Frontend

1. **Navegue até a pasta do cliente:**

   ```sh
   cd ../client
   ```

2. **Instale as dependências:**

   ```sh
   npm install
   ```

3. **Inicie a aplicação:**

   ```sh
   npm run dev
   ```

   A aplicação estará rodando em `http://localhost:5173`.

## Uso

1. **Cadastro de Produtos:**
   - Acesse a aplicação em `http://localhost:5173`.
   - Preencha o formulário de cadastro de produtos com as informações solicitadas.
   - Clique em "Cadastrar Produto".

2. **Listagem de Produtos:**
   - Após o cadastro, a listagem de produtos será exibida automaticamente.
   - Utilize o botão "Cadastrar Novo Produto" para adicionar novos produtos à lista.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais deta

