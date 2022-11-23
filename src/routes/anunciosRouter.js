import { Router } from "express";
import { validatingToken } from "../middlewares/tokenMiddleware.js";
import { validatingNovoAnuncio } from "../middlewares/fazerAnuncioMiddleware.js";
import { novoAnuncioControll } from "../controllers/anuncios/fazerAnuncioController.js";


const novoAnuncio = Router();
novoAnuncio.post("/fazer-anuncio", validatingToken, validatingNovoAnuncio, novoAnuncioControll);

export default novoAnuncio;