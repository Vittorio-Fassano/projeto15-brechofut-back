import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import dotenv from 'dotenv';

import authRouter from './routes/authRouter.js';
import renderAnuncios from './routes/anunciosRouter.js';
import renderCarrinho from './routes/carrinhoRouter.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(renderAnuncios);
app.use(renderCarrinho);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port: ${port}`));