import { Module } from '@nestjs/common';
import { ComodoService } from './comodo.service';
import { ImovelController } from './imovel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comodo } from 'entities/comodo.entity';


@Module({
  controllers: [ImovelController],
  providers: [ComodoService],
})
export class ItemsModule {}
