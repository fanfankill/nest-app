import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  UploadedFiles,
  Get,
  Query,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  /**
   * 上传分片
   * @returns
   */
  @Post('uploadSlice')
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      dest: 'uploads',
    }),
  )
  createFileSlice(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    return this.fileService.sliceFiles(files, body);
  }

  // 合并处理
  @Get('merge')
  mergeFile(@Query('name') name: string) {
    return this.fileService.mergeFile(name);
  }
}
