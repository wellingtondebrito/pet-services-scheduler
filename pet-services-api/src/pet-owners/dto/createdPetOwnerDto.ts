import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { IsCpfOrCnpj } from "src/common/validator/is-cpf-cnpj.decorator";

export class CreatedPetOwnerDto {
  @IsNotEmpty({message: 'O nome é obrigatório'})
  @IsString()
  name: string;
  @IsNotEmpty({message: 'O endereço é obrigatório'})
  @IsString()
  address: string;
  @IsNotEmpty({message: 'O número de telefone é obrigatório'})
  @IsPhoneNumber('BR')
  phoneNumber: string;

  @IsOptional()
  @IsCpfOrCnpj({ message: 'CPF inválido' })
  cpf: string;

   @IsNotEmpty({message: 'A cidade é obrigatória'})
  @IsString()
  city: string;
   @IsNotEmpty({message: 'O Estado é obrigatória'})
  @IsString()
  uf: string;
   @IsNotEmpty({message: 'O cep é obrigatória'})
  @IsString()
  cep: string;

  @IsNotEmpty({message: 'O email é obrigatório'})
  @IsEmail()
  email: string;

}