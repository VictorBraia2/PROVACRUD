"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateItemDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_imovel_dto_1 = require("./create-imovel.dto");
class UpdateItemDto extends (0, mapped_types_1.PartialType)(create_imovel_dto_1.CreateImovelDto) {
}
exports.UpdateItemDto = UpdateItemDto;
//# sourceMappingURL=update-imovel.dto.js.map