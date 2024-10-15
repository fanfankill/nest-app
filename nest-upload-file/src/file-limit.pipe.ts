import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class FileLimitPipe implements PipeTransform {
  transform(value: Express.Multer.File, metadata: ArgumentMetadata) {
    if (value.size > 10) {
      throw new HttpException('文件大小超过10kb', HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}
