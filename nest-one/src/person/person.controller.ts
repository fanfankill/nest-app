import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get(':id')
  findAll(@Param('id') id: string) {
    return `return ${id}`;
  }

  @Post()
  someTest(@Body() createPersonDto: CreatePersonDto) {
    return `return ${JSON.stringify(createPersonDto)}`;
  }

  @Post('file')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uploads/',
    }),
  )
  dealFile(@Body() body, @UploadedFiles() files) {
    console.log(files);
    return `received: ${JSON.stringify(body)}`;
  }
}
