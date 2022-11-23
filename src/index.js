import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import dotenv from 'dotenv';

import authRouter from './routes/authRouter.js';
import novoAnuncio from './routes/anunciosRouter.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(novoAnuncio);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port: ${port}`));