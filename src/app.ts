import express from 'express';
import produtosR from './routes/produtosR';

const app = express();

app.use(express.json());
app.use('/products', produtosR);

app.get('/', (_req, res) => res.status(200).send('funcionando enfim'));

export default app;
