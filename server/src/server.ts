import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

interface Product {
  name: string;
  description: string;
  price: number;
  available: boolean;
}

let products: Product[] = [];

app.use(cors());
app.use(bodyParser.json());

app.post('/products', (req: Request, res: Response) => {
  const { name, description, price, available }: Product = req.body;
  const newProduct: Product = { name, description, price, available };
  products.push(newProduct);
  res.status(201).send(newProduct);
});

app.get('/products', (req: Request, res: Response) => {
  const sortedProducts = products.sort((a, b) => a.price - b.price);
  res.status(200).send(sortedProducts);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
