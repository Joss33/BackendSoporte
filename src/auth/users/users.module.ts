import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AuthUserSchema } from './schema/users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'users',
        schema: AuthUserSchema,
      },
    ]),
    PassportModule,
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
