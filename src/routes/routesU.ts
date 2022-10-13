import { Router } from 'express';
import ControllerU from '../controllers/controllerU';

const router = Router();

router.post('/', ControllerU.create);

export default router;
