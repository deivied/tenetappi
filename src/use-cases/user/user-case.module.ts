import { Module } from '@nestjs/common';
import { MongoServiceModule } from 'src/frameworks/persistences/mongo/mongo-service.module';
import { UserFactoryService } from './user-factory.service';
import { UserUseCase } from './user.use-case';

@Module({
    imports: [MongoServiceModule],
    providers: [UserFactoryService, UserUseCase],
    exports: [UserFactoryService, UserUseCase],
})
export class UserCaseModule {}
