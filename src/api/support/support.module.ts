import { Module } from '@nestjs/common';
import { SupportService } from './support.service';
import { SupportController } from './support.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SupportSchema } from './schema/support.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Support', schema: SupportSchema }]),
  ],
  providers: [SupportService],
  controllers: [SupportController],
})
export class SupportModule {}
