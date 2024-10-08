import { ImovelService } from './imovel.service';
import { Imovel } from 'entities/imovel.entity';
import { Comodo } from 'entities/comodo.entity';
export declare class ImovelController {
    private readonly imovelService;
    constructor(imovelService: ImovelService);
    findAll(): Promise<Imovel[]>;
    findOne(id: number): Promise<Imovel>;
    create(imovelData: Imovel): Promise<Imovel>;
    update(id: number, imovelData: Imovel): Promise<Imovel>;
    remove(id: number): Promise<void>;
    addComodo(imovelId: number, comodoData: Comodo): Promise<Comodo>;
}
