import express, { Request, Response, Router } from 'express';
import { prisma } from './libs/prisma';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Pool } from 'pg';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const databaseUrl = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3000;

if (!databaseUrl) {
  console.error('Missing DATABASE_URL environment variable');
  process.exit(1);
}

const pool = new Pool({
  connectionString: databaseUrl,
  ssl: {
    rejectUnauthorized: false
  }
});

interface Product {
  name: string;
  description: string;
  price: number;
  available: boolean;
}

let products: Product[] = [];

app.use(cors());
app.use(bodyParser.json());


app.post('/products', async (req, res) => {
  const { name, description, price, available } = req.body;
  try {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        available,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).send('Server error');
  }
});

// Busca todos os produtos no banco de dados
app.get('/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Server error');
  }
});

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.product.delete({
      where: { id: Number(id) },
    });
    res.status(204).send(); // No Content
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
