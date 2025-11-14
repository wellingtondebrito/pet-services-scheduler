import { IsBoolean, IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateImageDto {
    
    @IsOptional()
    @IsString()
    @MaxLength(255)
    altText?: string;
   
    @IsOptional()
    @IsBoolean()
    isCover?: boolean;
}