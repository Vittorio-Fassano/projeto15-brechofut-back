import { Router } from "express";
import { validatingToken } from "../middlewares/tokenMiddleware.js";
import { adicionarCarrinho } from "../controllers/carrinho/carrinhoController.js";
import { meuCarrinho } from "../controllers/carrinho/meuCarrinhoController.js";

const renderCarrinho = Router();
renderCarrinho.post("/carrinho/:id", validatingToken, adicionarCarrinho);
renderCarrinho.get("/carrinho", validatingToken, meuCarrinho);

export default renderCarrinho;