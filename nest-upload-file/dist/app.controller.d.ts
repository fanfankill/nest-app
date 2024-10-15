import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    uploadFile(file: Express.Multer.File, body: any): void;
    uploadFiles(files: Express.Multer.File[]): void;
}
