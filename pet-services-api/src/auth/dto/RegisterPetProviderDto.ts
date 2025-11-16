/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsLatitude,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  IsLongitude,
  ValidateNested
} from 'class-validator';
import { IsCpfOrCnpj } from '../../common/validator/is-cpf-cnpj.decorator';
import { Type } from 'class-transformer';

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

   @IsNotEmpty({ message: 'A latitude é obrigatória.' })
  @IsNumber({}, { message: 'A latitude deve ser um número.' })
  @IsLatitude({ message: 'O valor de latitude é inválido.' })
  latitude: number;

  @IsNotEmpty({ message: 'A longitude é obrigatória.' })
  @IsNumber({}, { message: 'A longitude deve ser um número.' })
  @IsLongitude({ message: 'O valor de longitude é inválido.' })
  longitude: number;


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

