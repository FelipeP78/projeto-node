import { Request, Response, Router } from 'express';

const router = Router();

const dogs = [
{
    name: 'Belinha',
    breed: 'Poodle',
    ownerDocument: '',
    ownerPassword: '1234',
    idadeDoDono: 18
},
{
    name: 'Moka',
    breed: 'Unknown',
    ownerDocument: '',
    ownerPassword: '2345',
    idadeDoDono: 21
},
{
    name: 'Brisa',
    breed: 'Unknown',
    ownerDocument: '',
    ownerPassword: '3456',
    idadeDoDono:15
},
{
    name: 'Fighter',
    breed: 'German Shepard',
    ownerDocument: '2222',
    ownerPassword: '4567',
    idadeDoDono: 32
}

];

router.get('/', (req: Request, res: Response) => {
    res.send(dogs);
});

router.get('/:ownerDocument', (req: Request, res: Response) => {
    const dog = dogs.find((dg) => dg.ownerDocument === req.params.ownerDocument);
    if(!dog) return res.status(400).send({ message: "Doguinho não foi encontrado!"});
    res.status(200).send(dog);
})

router.post('/', (req: Request, res: Response) => {
    if (req.body.idadeDoDono < 18){
        return res.status(400).send({ message: 'Dono não foi cadastrado pois não tem idade minima(18 anos).'})
    }
    dogs.push(req.body)
    res.status(201).send({message: 'Cadastro Criado Com Sucesso!'});
});

router.delete('/remove/:ownerDocument', (req: Request, res: Response) => {
    console.log(req.params);
    const dogindex = dogs.findIndex((dog) => dog.ownerDocument === req.params.ownerDocument);
    if(dogindex === -1) {
       res.status(400).send({message: "Dono não encontrado"})
    }
    dogs.splice(dogindex, 1);
    res.status(200).send({ message: "Dono removido com sucesso!"});
})

router.put('/:ownerDocument', (req: Request, res: Response) => {
    const dogindex = dogs.findIndex((dog) => dog.ownerDocument === req.params.ownerDocument);
    if(dogindex === -1) {
        res.status(400).send({message: "Doguinho não encontrado"})
    }
    dogs[dogindex] = req.body;
    res.status(200).send({message: "Doguinho atualizado com sucesso! "});
});

export default router;