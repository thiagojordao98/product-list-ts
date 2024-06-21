import React, { useState, FormEvent, useEffect } from 'react';
import './ProductForm.css';

interface ProductFormProps {
  onAddProduct: (product: Product) => void;
}

interface Product {
  name: string;
  description: string;
  price: number;
  available: boolean;
}

export const formatPrice = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
    };

const ProductForm: React.FC<ProductFormProps> = ({ onAddProduct }) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [formattedPrice, setFormattedPrice] = useState<string>('');
  const [available, setAvailable] = useState<string>('sim');

  useEffect(() => {
    const numericPrice = parseFloat(price);
    if (!isNaN(numericPrice)) {
      setFormattedPrice(formatPrice(numericPrice));
    }
  }, [price]);

    
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const numberValue = value ? parseFloat(value) / 100 : 0;
    setPrice(numberValue.toString());
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newProduct: Product = { 
      name, 
      description, 
      price: parseFloat(price), 
      available: available === 'sim' 
    };

    const response = await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    if (response.ok) {
      onAddProduct(await response.json());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome do produto:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Descrição do produto:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Valor do produto:</label>
        <input type="text" value={formattedPrice} onChange={handlePriceChange} required />
      </div>
      <div>
        <label>Disponível para venda:</label>
        <select value={available} onChange={(e) => setAvailable(e.target.value)} required>
          <option value="sim">Sim</option>
          <option value="não">Não</option>
        </select>
      </div>
      <button type="submit">Cadastrar Produto</button>
    </form>
  );
};

export default ProductForm;
