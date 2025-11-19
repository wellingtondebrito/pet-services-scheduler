import { IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { IsCpfOrCnpj } from "src/common/validator/is-cpf-cnpj.decorator";

export class UpdateOwnerDto {

  @IsString({ message: 'O nome deve ser uma string'})
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  @IsPhoneNumber('BR')
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  email?: string;
 
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

}