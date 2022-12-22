import { Module } from '@nestjs/common';
import { MongoServiceModule } from 'src/frameworks/persistences/mongo/mongo-service.module';

@Module({
    imports: [MongoServiceModule],
    providers: [MongoServiceModule],
})
export class PersistencesModule {}
