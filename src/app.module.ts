import { PublicationController } from './controllers/publication.controller';
import { PublicationFactoryService } from './use-cases/publications/publication-factory.service';
import { PublicationCaseModule } from './use-cases/publications/publication-case.module';
import { PersistencesModule } from './services/persistences.module';
import { UserCaseModule } from './use-cases/user/user-case.module';
import { AppController } from './controllers/app.controller';
import { UsersController } from './controllers/user.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PublicationCaseModule,
    PersistencesModule,
    UserCaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    // MongooseModule.forRootAsync({
    //   useFactory: (configService: ConfigService) => ({
    //     uri: configService.get('DB_CLUSTER'),
    //   }),
    //   inject: [ConfigService]
    // }),
  ],
  controllers: [PublicationController, AppController, UsersController],
  providers: [PublicationFactoryService],
})
export class AppModule {}
