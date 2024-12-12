import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import livroRouter from './router/livroRouter'; // Verifique se está correto

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use('/livros', livroRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});



