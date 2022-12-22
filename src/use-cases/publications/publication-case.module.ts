import { Module } from '@nestjs/common';
import { MongoServiceModule } from 'src/frameworks/persistences/mongo/mongo-service.module';
import { PublicationFactoryService } from './publication-factory.service';
import { PublicationUseCase } from './publication.user-case';

@Module({
  imports: [MongoServiceModule],
  providers: [PublicationFactoryService, PublicationUseCase],
  exports: [PublicationFactoryService, PublicationUseCase],
})
export class PublicationCaseModule {}
