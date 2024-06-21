import React from 'react';
import ProductList from './components/ProductList';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Cadastro de Produtos</h1>
      <ProductList />
    </div>
  );
};

export default App;
