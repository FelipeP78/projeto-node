import { Router } from "express";
import healthRouter from './health.router';
import dogs from './dogs.router';

const router = Router();

router.use('/health', healthRouter);
router.use('/dogs', dogs);

export default router;