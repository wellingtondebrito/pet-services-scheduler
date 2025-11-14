/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { IsCpfOrCnpj } from '../../common/validator/is-cpf-cnpj.decorator';

export class RegisterPetProviderDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  @IsString()
  companyName: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  @IsPhoneNumber('BR')
  phoneNumber: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  uf: string;

  @IsOptional()
  @IsString()
  cep: string;

  @IsOptional()
  @IsCpfOrCnpj({ message: 'O CNPJ ou CPF não é válido' })
  cnpj?: string;

  @IsOptional()
  @IsCpfOrCnpj({ message: 'O CNPJ ou CPF não é válido' })
  cpf?: string;
}
