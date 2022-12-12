import { Inject, Module, UseFilters } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // MongooseModule.forRootAsync({
    //   useFactory: (configService: ConfigService) => ({
    //     uri: configService.get('DB_CLUSTER'),
    //   }),
    //   inject: [ConfigService]
    // }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
