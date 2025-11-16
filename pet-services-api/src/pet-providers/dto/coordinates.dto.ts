import { IsLatitude, IsLongitude, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CoordinatesDto {
  // Usa class-transformer para converter string -> number automaticamente
  @Type(() => Number)
  @IsNumber({}, { message: 'latitude deve ser um número' })
  @IsLatitude({ message: 'latitude deve ser uma latitude válida' })
  @IsNotEmpty()
  latitude: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'longitude deve ser um número' })
  @IsLongitude({ message: 'longitude deve ser uma longitude válida' })
  @IsNotEmpty()
  longitude: number;

  // campo opcional de exemplo, mantido para compatibilidade futura
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'radius deve ser um número' })
  radius?: number;
}
