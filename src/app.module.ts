import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { MongoModule } from './database/mongo.module';
import { AuthModule } from './auth/auth.module';
// import { AuthController } from './auth/auth.controller';
// import { AuthService } from './auth/auth.service';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ApiModule, MongoModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
