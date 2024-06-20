import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Cadastro e Listagem de Produtos</h1>
      <ProductList />
    </div>
  );
};

export default App;
