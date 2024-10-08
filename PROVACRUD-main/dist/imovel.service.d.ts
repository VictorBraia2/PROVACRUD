import { Model } from 'mongoose';
import { Comodo } from 'entities/comodo.entity';
import { Imovel } from 'entities/imovel.entity';
export declare class ImovelService {
    private imovelRepository;
    private comodoRepository;
    constructor(imovelRepository: Model<Imovel>, comodoRepository: Model<Comodo>);
    create(imovelData: Imovel): Promise<Imovel>;
    findAll(): Promise<Imovel[]>;
    findOne(id: number): Promise<Imovel>;
    update(id: number, imovelData: Imovel): Promise<Imovel>;
    remove(id: number): Promise<void>;
    addComodo(imovelId: number, comodoData: Comodo): Promise<Comodo>;
}
