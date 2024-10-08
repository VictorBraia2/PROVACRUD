import { PartialType } from '@nestjs/mapped-types';
import { CreateImovelDto } from './create-imovel.dto';

export class UpdateItemDto extends PartialType(CreateImovelDto) {}
