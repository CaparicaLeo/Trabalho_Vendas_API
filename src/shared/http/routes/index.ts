import productsRouter from "@modules/products/routes/products.routes";
import { Router } from "express";

const routes = Router();
console.log("Index.ts routes")
routes.use('/products',productsRouter)

export default routes;