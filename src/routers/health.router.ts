import { Request, Response, Router } from "express";

const router = Router();

router.get('/check', (req: Request, res: Response) => {
    const healthCheck = {message: 'Esta funcionando normalmente'};
    res.send(healthCheck);
});

router.get('/', (req: Request, res: Response) => {
    const healthCheck = {message: 'VAMO FELIPEEEE'};
    res.send(healthCheck);
});

export default router;