// import { Media, Publication, User } from '../entities';
// import { Media } from 'src/frameworks/persistences/mongo/models/media.model';
// import { Publication } from 'src/frameworks/persistences/mongo/models/publication.model';
// import { Users } from 'src/frameworks/persistences/mongo/models/users.model';
import { MediaEntity, PublicationEntity, UserEntity } from '..';
import { IGenericCrud } from './generic-crud-abstract';

export abstract class IDataServicesCrud {

  abstract users: IGenericCrud<UserEntity>;

  abstract publications: IGenericCrud<PublicationEntity>;

  abstract medias: IGenericCrud<MediaEntity>;

  // abstract activities: IGenericCrud<activities>;
}
