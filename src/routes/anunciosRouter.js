import { Router } from "express";
import { validatingToken } from "../middlewares/tokenMiddleware.js";
import { validatingNovoAnuncio } from "../middlewares/fazerAnuncioMiddleware.js";
import { novoAnuncioControll } from "../controllers/anuncios/fazerAnuncioController.js";
import { todosAnuncios } from "../controllers/anuncios/todosAnunciosController.js";


const renderAnuncios = Router();
renderAnuncios.post("/fazer-anuncio", validatingToken, validatingNovoAnuncio, novoAnuncioControll);
renderAnuncios.get("/home", validatingToken, todosAnuncios);

export default renderAnuncios;