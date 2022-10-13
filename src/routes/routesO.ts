import { Router } from 'express';
import controllerO from '../controllers/controllerO';

const router = Router();

router.get('/', controllerO.getAll);

export default router;
