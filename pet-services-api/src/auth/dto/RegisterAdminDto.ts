import { IsEmail, IsString, IsStrongPassword, IsOptional, IsNotEmpty } from "class-validator";

export class RegisterAdminDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsStrongPassword()
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsString()
    name: string;
}