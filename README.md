# Cadastro e Listagem de Produtos

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

## 📸 Screenshots

### Tela de Cadastro 
![image](https://github.com/thiagojordao98/product-list-ts/assets/47632506/06594ba6-efff-4acc-bb91-ed60361a4ff3)

### Tela de Listagem
![image](https://github.com/thiagojordao98/product-list-ts/assets/47632506/36aa67c7-f68f-4f06-a221-24d5f3977aca)

### Produtos Cadastrados no Banco de Dados
![image](https://github.com/thiagojordao98/product-list-ts/assets/47632506/07b6a037-ccaa-4ac8-a961-098667ec7479)

## Tecnologias Utilizadas

- **Frontend:**
  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)
  - [TypeScript](https://www.typescriptlang.org/)

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [Prisma](https://www.prisma.io/)
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
   npm run dev
   ```

   O servidor estará rodando em `http://localhost:3000`.

### Frontend

1. **Navegue até a pasta do cliente:**

   ```sh
   cd ../front-end
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

