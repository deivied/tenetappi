import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './models/users.model';
import { Publication, PublicationSchema } from './models/publication.model';
import { Media, MediaSchema } from './models/media.model';
import { IDataServicesCrud } from 'src/core';
import { MongoServiceService } from './mongo-service.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Users.name, schema: UsersSchema },
      { name: Publication.name, schema: PublicationSchema },
      { name: Media.name, schema: MediaSchema },
    ]),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('DB_CLUSTER'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: IDataServicesCrud,
      useClass: MongoServiceService,
    },
  ],
  exports: [IDataServicesCrud],
})
export class MongoServiceModule {}
