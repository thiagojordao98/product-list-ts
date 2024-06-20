import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';

interface Product {
  name: string;
  description: string;
  price: number;
  available: boolean;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:5000/products');
    const data: Product[] = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct].sort((a, b) => a.price - b.price));
    setShowForm(false);
  };

  return (
    <div>
      {showForm ? (
        <ProductForm onAddProduct={handleAddProduct} />
      ) : (
        <>
          <button onClick={() => setShowForm(true)}>Cadastrar Novo Produto</button>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ProductList;