import { Controller, Get } from '@nestjs/common';

@Controller()
export class DefaultController {

    @Get('/')
    DefaultRote(){
        return "Hello world!";
    }
}
