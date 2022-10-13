import express from 'express';
import productsRouter from './routes/products.routes';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);

app.get('/', (_req, res) => res.status(200).send('Working.'));

export default app;
