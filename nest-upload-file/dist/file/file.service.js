"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
let FileService = class FileService {
    sliceFiles(files, body) {
        console.log('fils message', files, body);
        const fileName = body.name.match(/(.+)\-\d+$/)[1];
        const chunkDir = 'uploads/chunks_' + fileName;
        if (!fs.existsSync(chunkDir)) {
            fs.mkdirSync(chunkDir);
        }
        fs.cpSync(files[0].path, chunkDir + '/' + body.name);
        fs.rmSync(files[0].path);
    }
    mergeFile(name) {
        function extractLastNumber(fileName) {
            const match = fileName.match(/-(\d+)$/);
            return match ? parseInt(match[1], 10) : null;
        }
        const chunkDir = 'uploads/chunks_' + name;
        const files = fs.readdirSync(chunkDir);
        const sortedFiles = files
            .map((file) => ({
            name: file,
            lastNumber: extractLastNumber(file),
        }))
            .filter((file) => file.lastNumber !== null)
            .sort((a, b) => a.lastNumber - b.lastNumber)
            .map((file) => file.name);
        console.log('files', sortedFiles);
        let startPos = 0;
        sortedFiles.map((file) => {
            const filePath = chunkDir + '/' + file;
            const stream = fs.createReadStream(filePath);
            stream.pipe(fs.createWriteStream('uploads/' + name, {
                start: startPos,
            }));
            startPos += fs.statSync(filePath).size;
        });
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)()
], FileService);
//# sourceMappingURL=file.service.js.map