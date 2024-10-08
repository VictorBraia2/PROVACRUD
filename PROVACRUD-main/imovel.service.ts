import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comodo } from 'entities/comodo.entity';
import { Imovel } from 'entities/imovel.entity';

@Injectable()
export class ImovelService {
  constructor(
    @InjectModel('Imovel')
    private imovelRepository: Model<Imovel>,
    @InjectModel('Comodo') 
    private comodoRepository: Model<Comodo>,
  ) {}

  async create(imovelData: Imovel): Promise<Imovel> {
    return this.imovelRepository.create(imovelData);
  }

  async findAll(): Promise<Imovel[]> {
    return this.imovelRepository.find().populate('comodos');
  }

  async findOne(id: number): Promise<Imovel> {
    return this.imovelRepository.findOne({ id }).populate('comodos');
  }

  async update(id: number, imovelData: Imovel): Promise<Imovel> {
    return this.imovelRepository.findOneAndUpdate({ id }, imovelData);
  }

  async remove(id: number): Promise<void> {
    await this.imovelRepository.deleteOne({ id });
  }

  async addComodo(imovelId: number, comodoData: Comodo): Promise<Comodo> {
    const imovel = await this.imovelRepository.findOne({ id: imovelId }).populate('comodos');
    const comodo = await this.comodoRepository.create(comodoData);
    imovel.comodos.push(comodo);
    await imovel.save(); 
    return comodo;
  }
}
