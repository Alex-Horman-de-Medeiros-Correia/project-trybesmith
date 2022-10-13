import { Router } from 'express';
import produtoC from '../controllers/produtoC';

const router = Router();

router.get('/', produtoC.getAll);

router.post('/', produtoC.create);

export default router;
