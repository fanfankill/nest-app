import { FileService } from './file.service';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    createFileSlice(files: Array<Express.Multer.File>, body: any): any;
    mergeFile(name: string): any;
}
