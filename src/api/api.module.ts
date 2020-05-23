import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { UserModule } from './user/user.module';
import { SupportModule } from './support/support.module';

@Module({
  imports: [ClientModule, SupportModule, UserModule],
})
export class ApiModule {}
