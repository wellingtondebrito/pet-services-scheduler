import { IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { IsCpfOrCnpj } from "src/common/validator/is-cpf-cnpj.decorator";

export class UpdatedPetProviderDto {
    @IsString()
    @IsOptional()
    companyName?: string;

    @IsString()
    @IsOptional()
    @IsPhoneNumber('BR')
    phoneNumber?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    cep?: string;

    @IsString()
    @IsOptional()
    city?: string;

    @IsString()
    @IsOptional()
    uf?: string;

    @IsString()
    @IsOptional()
    location?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsCpfOrCnpj({ message: 'O CNPJ ou CPF não é válido' })
    cnpj?: string;

    @IsString()
    @IsOptional()
    @IsCpfOrCnpj({ message: 'O CNPJ ou CPF não é válido' })
    cpf?: string;
}