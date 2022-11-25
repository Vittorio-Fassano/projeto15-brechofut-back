import { Router } from "express";
import { validatingToken } from "../middlewares/tokenMiddleware.js";
import { adicionarCarrinho } from "../controllers/carrinho/carrinhoController.js";
import { meuCarrinho } from "../controllers/carrinho/meuCarrinhoController.js";
import { deleteProduto } from "../controllers/carrinho/deleteProdutoController.js";

const renderCarrinho = Router();
renderCarrinho.post("/carrinho/:id", validatingToken, adicionarCarrinho);
renderCarrinho.get("/carrinho", validatingToken, meuCarrinho);
renderCarrinho.delete("/carrinho/:id", validatingToken, deleteProduto);

export default renderCarrinho;