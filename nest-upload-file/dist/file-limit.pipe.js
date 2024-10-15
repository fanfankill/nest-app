"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileLimitPipe = void 0;
const common_1 = require("@nestjs/common");
let FileLimitPipe = class FileLimitPipe {
    transform(value, metadata) {
        if (value.size > 10) {
            throw new common_1.HttpException('文件大小超过10kb', common_1.HttpStatus.BAD_REQUEST);
        }
        return value;
    }
};
exports.FileLimitPipe = FileLimitPipe;
exports.FileLimitPipe = FileLimitPipe = __decorate([
    (0, common_1.Injectable)()
], FileLimitPipe);
//# sourceMappingURL=file-limit.pipe.js.map