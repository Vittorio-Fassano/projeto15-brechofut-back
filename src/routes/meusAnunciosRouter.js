import { Router } from "express";
import { validatingToken } from "../middlewares/tokenMiddleware.js";
import { meusAnuncios } from "../controllers/anuncios/meusAnunciosController.js";
import { deleteAnuncio } from "../controllers/anuncios/deleteAnuncioController.js";


const renderMeusAnuncios = Router();
renderMeusAnuncios.get("/meus-anuncios", validatingToken, meusAnuncios);
renderMeusAnuncios.delete("/meus-anuncios/:id", validatingToken, deleteAnuncio);

export default renderMeusAnuncios;