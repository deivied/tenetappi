import { Media, Publication, Users } from 'src/frameworks/persistences/mongo/models';
// import { Media, Publication, User } from '../entities';
// import { Media } from 'src/frameworks/persistences/mongo/models/media.model';
// import { Publication } from 'src/frameworks/persistences/mongo/models/publication.model';
// import { Users } from 'src/frameworks/persistences/mongo/models/users.model';
import { IGenericCrud } from './generic-crud-abstract';

export abstract class IDataServicesCrud {

  abstract user: IGenericCrud<Users>;

  abstract publication: IGenericCrud<Publication>;

  abstract media: IGenericCrud<Media>;

  // abstract activities: IGenericCrud<activities>;
}
