import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { MongoModule } from './database/mongo.module';
import { AuthModule } from './auth/auth.module';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost/supports', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }),
    ApiModule,
    MongoModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
