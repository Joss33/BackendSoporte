import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/supports', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    // MongooseModule.forRootAsync({
    //   connectionName: 'soportes',
    //   useFactory: () => ({
    //     uri:
    //       'mongodb+srv://root:12345@cluster0-sbxf6.mongodb.net/soportes?retryWrites=true&w=majority',
    //     useUnifiedTopology: true,
    //     useNewUrlParser: true,
    //   }),
    // }),
  ],
  // imports: [
  //   MongooseModule.forRootAsync({
  //     connectionName: 'auth',
  //     useFactory: () => ({
  //       uri:
  //         'mongodb+srv://root:1234@cluster0-sbxf6.mongodb.net/auth?retryWrites=true&w=majority',
  //       useUnifiedTopology: true,
  //       useNewUrlParser: true,
  //     }),
  //   }),
  //   MongooseModule.forRootAsync({
  //     connectionName: 'soporte',
  //     useFactory: () => ({
  //       uri:
  //         'mongodb+srv://root:1234@cluster0-sbxf6.mongodb.net/soporte?retryWrites=true&w=majority',
  //       useUnifiedTopology: true,
  //       useNewUrlParser: true,
  //     }),
  //   }),
  // ],
})
export class MongoModule {}
