import { Router } from "express";
import { prisma } from "../libs/prisma";

export const mainRouter = Router();

mainRouter.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

// mainRouter.get("/products/:id", async (req, res) => {
//     const { id } = req.params;
//     const product = await prisma.product.findUnique({
//         where: {
//         id: parseInt(id),
//         },
//     });
    
//     if (!product) {
//         return res.status(404).json({ message: "Product not found" });
//     }
    
//     res.json(product);
// });
