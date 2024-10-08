"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImovelController = void 0;
const common_1 = require("@nestjs/common");
const imovel_service_1 = require("./imovel.service");
const imovel_entity_1 = require("./entities/imovel.entity");
const comodo_entity_1 = require("./entities/comodo.entity");
let ImovelController = class ImovelController {
    constructor(imovelService) {
        this.imovelService = imovelService;
    }
    findAll() {
        return this.imovelService.findAll();
    }
    findOne(id) {
        return this.imovelService.findOne(id);
    }
    create(imovelData) {
        return this.imovelService.create(imovelData);
    }
    update(id, imovelData) {
        return this.imovelService.update(id, imovelData);
    }
    remove(id) {
        return this.imovelService.remove(id);
    }
    addComodo(imovelId, comodoData) {
        return this.imovelService.addComodo(imovelId, comodoData);
    }
};
exports.ImovelController = ImovelController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImovelController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ImovelController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [imovel_entity_1.Imovel]),
    __metadata("design:returntype", Promise)
], ImovelController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, imovel_entity_1.Imovel]),
    __metadata("design:returntype", Promise)
], ImovelController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ImovelController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/comodos'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, comodo_entity_1.Comodo]),
    __metadata("design:returntype", Promise)
], ImovelController.prototype, "addComodo", null);
exports.ImovelController = ImovelController = __decorate([
    (0, common_1.Controller)('imoveis'),
    __metadata("design:paramtypes", [imovel_service_1.ImovelService])
], ImovelController);
//# sourceMappingURL=imovel.controller.js.map