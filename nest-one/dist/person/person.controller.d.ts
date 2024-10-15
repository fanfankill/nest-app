import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    findAll(id: string): string;
    someTest(createPersonDto: CreatePersonDto): string;
    dealFile(body: any, files: any): string;
}
