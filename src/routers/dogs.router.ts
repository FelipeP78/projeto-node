import { Request, Response, Router } from 'express';
import dogsService from '../services/dogs.service';
const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const dogs = await dogsService.getAll();
    res.send(dogs);
});

router.get('/:ownerDocument', async (req: Request, res: Response) => {
    const dog = await dogsService.getByownerDocument(req.params.ownerDocument);
    if(!dog) return res.status(400).send({ message: "Doguinho não foi encontrado!"});
    res.status(200).send(dog);
})

router.post('/', async (req: Request, res: Response) => {
    if (req.body.idadeDoDono < 18){
        return res.status(400).send({ message: 'Dono não foi cadastrado pois não tem idade minima(18 anos).'})
    }
    await dogsService.create(req.body);
    res.status(201).send({message: 'Cadastro Criado Com Sucesso!'});
});

router.delete('/remove/:ownerDocument', async (req: Request, res: Response) => {
    try{
        await dogsService.remove(req.params.ownerDocument);
        res.status(200).send({ message: "Dono removido com sucesso!"});
    }catch(error: any) {
        res.status(400).send({ message: error.message});
    }
    })
 
router.put('/:ownerDocument', async (req: Request, res: Response) => {
    try {
       await dogsService.update(req.params.ownerDocument, req.body);
       res.status(200).send({message: "Doguinho atualizado com sucesso! "});

    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;