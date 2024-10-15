import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class FileLimitPipe implements PipeTransform {
    transform(value: Express.Multer.File, metadata: ArgumentMetadata): Express.Multer.File;
}
