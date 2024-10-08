"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const imovel_controller_1 = require("./imovel.controller");
const comodo_service_1 = require("./comodo.service");
describe('ItemsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [imovel_controller_1.ImovelController],
            providers: [comodo_service_1.ComodoService],
        }).compile();
        controller = module.get(imovel_controller_1.ImovelController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=imovel.controller.spec.js.map