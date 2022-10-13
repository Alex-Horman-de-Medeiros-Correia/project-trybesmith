import express from 'express';
import produtosR from './routes/produtosR';
import usuario from './routes/routesU';
import RoutesO from './routes/routesO';

const app = express();

app.use(express.json());
app.use('/products', produtosR);

app.use('/users', usuario);

app.use('/orders', RoutesO);

export default app;
