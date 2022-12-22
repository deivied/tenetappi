import { PersistencesModule } from './services/persistences.module';
import { UserCaseModule } from './use-cases/user/user-case.module';
import { AppController } from './controllers/app.controller';
import { UsersController } from './controllers/user.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
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
  controllers: [AppController, UsersController],
  providers: [],
})
export class AppModule {}
