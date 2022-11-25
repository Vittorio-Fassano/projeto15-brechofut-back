import { Router } from "express";
import { validatingToken } from "../middlewares/tokenMiddleware.js";
import { meuCarrinho } from "../controllers/carrinho/carrinhoController.js";

const renderCarrinho = Router();
renderCarrinho.post("/carrinho/:id", validatingToken, meuCarrinho);

export default renderCarrinho;