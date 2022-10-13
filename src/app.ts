import express from 'express';
import produtosR from './routes/produtosR';
import usersRouter from './routes/users.routes';

const app = express();

app.use(express.json());
app.use('/products', produtosR);

app.use('/users', usersRouter);

export default app;
