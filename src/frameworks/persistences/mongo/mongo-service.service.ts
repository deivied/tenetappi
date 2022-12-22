import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServicesCrud, IGenericCrud } from 'src/core';
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
  constructor(
    @InjectModel(Users.name)
    private usersModel: Model<UsersDocumment | Users>,
    @InjectModel(Publication.name)
    private publicationModel: Model<PublicationDocument | Publication>,
    @InjectModel(Media.name)
    private mediaModel: Model<MediaDocument | Media>,
  ) {}

  user: MongoServiceGeneric<Users>;
  publication: MongoServiceGeneric<Publication>;
  media: MongoServiceGeneric<Media>;

  onApplicationBootstrap() {
    this.user = new MongoServiceGeneric<Users>(this.usersModel, [
      'publication',
    ]);

    this.publication = new MongoServiceGeneric<Publication>(
      this.publicationModel,
      ['users', 'media'],
    );
    this.media = new MongoServiceGeneric<Media>(this.mediaModel, [
      'users',
      'publication',
    ]);
  }
}
