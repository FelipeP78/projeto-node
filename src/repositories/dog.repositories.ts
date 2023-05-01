import { Dog } from '../models/dog.model';



class DogRepository {
    getAll(){
        return Dog.find();
    }

    getByownerDocument(ownerDocument: string) {
        return Dog.findOne({ ownerDocument: ownerDocument });
    }

    create(dog: typeof Dog) {
        return Dog.create(dog);
    }

    update(ownerDocument: string, dog: Partial<typeof Dog>) {
        return Dog.updateOne({ ownerDocument: ownerDocument }, { $set: dog });
    }

    remove(ownerDocument: string) {
        return Dog.deleteOne({ ownerDocument: ownerDocument });
    }
}

export default new DogRepository();