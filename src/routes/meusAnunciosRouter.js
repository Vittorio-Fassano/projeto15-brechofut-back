import { Router } from "express";
import { validatingToken } from "../middlewares/tokenMiddleware.js";
import { meusAnuncios } from "../controllers/anuncios/meusAnunciosController.js";


const renderMeusAnuncios = Router();
renderMeusAnuncios.get("/meus-anuncios", validatingToken, meusAnuncios);

export default renderMeusAnuncios;