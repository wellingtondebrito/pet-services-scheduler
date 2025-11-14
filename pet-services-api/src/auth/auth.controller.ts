import { Controller, HttpCode, HttpStatus, Post, Body, Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterPetProviderDto } from './dto/RegisterPetProviderDto';
import { RegisterPetOwnerDto } from './dto/RegisterPetOwnerDto';
import { LoginDto } from './dto/LoginDto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('cadastro-prestador')
    @HttpCode(HttpStatus.CREATED)
    async registerPetProvider(@Body() data: RegisterPetProviderDto){
        const newProvider = await this.authService.registerPetProvider(data);
        return {
            message: 'Prestador de serviços cadastrado com sucesso',
            data: newProvider,
            error: false,
            statusCode: HttpStatus.CREATED
        }
    }

    @Post('cadastro-tutor')
    @HttpCode(HttpStatus.CREATED)
    async registerPetOwner(@Body() data: RegisterPetOwnerDto){
        const newOwner = await this.authService.registerPetOwner(data);
        return {
            message: 'Tutor cadastrado com sucesso',
            data: newOwner,
            error: false,
            statusCode: HttpStatus.CREATED
        }
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Request() req: any, @Body() params: LoginDto){
        const loginData = await this.authService.login(params);
        return {
            message: 'Login realizado com sucesso',
            data: loginData,
            error: false,
            statusCode: HttpStatus.OK
        };
    }
}
