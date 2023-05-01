import { Request, Response, Router } from "express";

const router = Router();

router.get('/check', (req: Request, res: Response) => {
    const healthCheck = {message: 'Esta funcionando normalmente'};
    res.send(healthCheck);
});

router.get('/', (req: Request, res: Response) => {
    const healthCheck = {message: 'A aplicação esta funcionando normalmente'};
    res.send(healthCheck);
});

export default router;