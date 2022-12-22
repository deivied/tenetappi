import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServicesCrud, IGenericCrud, MediaEntity, PublicationEntity, UserEntity } from 'src/core';
import {
  Media,
  MediaDocument,
  Publication,
  PublicationDocument,
  Users,
  UsersDocumment,
} from './models';
import { MongoServiceGeneric } from './mongo-service-generics';

@Injectable()
export class MongoServiceService
  implements IDataServicesCrud, OnApplicationBootstrap
{
  
  users: IGenericCrud<UserEntity>;
  publications: IGenericCrud<PublicationEntity>;
  medias: IGenericCrud<MediaEntity>;

  constructor(
    @InjectModel(Users.name)
    private usersModel: Model<UsersDocumment | Users>,
    @InjectModel(Publication.name)
    private publicationModel: Model<PublicationDocument | Publication>,
    @InjectModel(Media.name)
    private mediaModel: Model<MediaDocument | Media>,
  ) {}


  onApplicationBootstrap() {
    // this.users = new MongoServiceGeneric<Users>(this.usersModel, [
    //   'publications',
    // ]);

    // this.publications = new MongoServiceGeneric<Publication>(
    //   this.publicationModel,
    //   ['users', 'media'],
    // );
    // this.medias = new MongoServiceGeneric<Media>(this.mediaModel, [
    //   'users',
    //   'publication',
    // ]);
  }
}
