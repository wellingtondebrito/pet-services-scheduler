import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { IsCpfOrCnpj } from 'src/common/validator/is-cpf-cnpj.decorator';

export class RegisterPetOwnerDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsPhoneNumber('BR')
  phoneNumber: string;
  @IsOptional()
  @IsString()
  address?: string;
  @IsOptional()
  @IsString()
  city?: string;
  @IsOptional()
  @IsString()
  uf?: string;
  @IsOptional()
  @IsString()
  cep?: string;
  @IsOptional()
  @IsString()
  @IsCpfOrCnpj({ message: 'O CNPJ ou CPF não é válido' })
  cpf?: string;
}
