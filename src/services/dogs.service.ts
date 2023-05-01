import dogRepositories from "../repositories/dog.repositories";
import { Dog } from "../models/dog.model";

export class dogsService {
      getAll() {
        return dogRepositories.getAll();
    }     
    
    getByownerDocument(ownerDocument: string){
        return dogRepositories.getByownerDocument(ownerDocument);
    }

    create(dog: typeof Dog){
        return dogRepositories.create(Dog);
    }

    remove(ownerDocument: string){
       return dogRepositories.remove(ownerDocument);
    }

    update(ownerDocument: string, dog: Partial<typeof Dog>) {
       return dogRepositories.update(ownerDocument, dog);
    }
}

export default new dogsService();