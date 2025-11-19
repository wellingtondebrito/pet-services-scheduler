import { IsEnum, IsOptional, IsString } from 'class-validator';
import { StatusUser } from '@prisma/client'; // ou de onde o seu enum vier

export class AdminUpdatedPetOwner {
    @IsOptional()
    @IsString()
    @IsEnum(StatusUser)
    status: StatusUser;
}