import { activities } from "../entities/activities";
import { publication } from "../entities/publication";
import { user } from "../entities/user";
import { IGenericRepository } from "./generic-crud-abstract";

export abstract class IDataServices {
    abstract user: IGenericRepository<user>;
  
    abstract publication: IGenericRepository<publication>;
  
    abstract activities: IGenericRepository<activities>;
  }