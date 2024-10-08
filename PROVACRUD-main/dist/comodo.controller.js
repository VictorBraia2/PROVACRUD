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
exports.ComodoController = void 0;
const common_1 = require("@nestjs/common");
const comodo_service_1 = require("./comodo.service");
let ComodoController = class ComodoController {
    constructor(comodoService) {
        this.comodoService = comodoService;
    }
    remove(id) {
        return this.comodoService.remove(+id);
    }
};
exports.ComodoController = ComodoController;
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComodoController.prototype, "remove", null);
exports.ComodoController = ComodoController = __decorate([
    (0, common_1.Controller)('comodos'),
    __metadata("design:paramtypes", [comodo_service_1.ComodoService])
], ComodoController);
//# sourceMappingURL=comodo.controller.js.map