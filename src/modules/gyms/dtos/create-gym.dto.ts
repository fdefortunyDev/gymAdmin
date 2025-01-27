import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsNumberString,
  IsOptional,
  IsUUID,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { GymsError } from '../../../utils/errors/gyms-error.enum';

export class CreateGymDto {
  @ApiProperty({ example: 'SmartGym' })
  @MaxLength(150, { message: GymsError.invalidName })
  @Matches(/^[a-z0-9]+[-_a-z0-9]*$/i, {
    message: GymsError.invalidName,
  })
  @Transform(({ value }) => value.trim())
  name: string;

  @ApiProperty({ example: 'Ruta 8 esq cochabamba' })
  @MaxLength(255, { message: GymsError.invalidAddress })
  @Matches(/^[a-z0-9\s\.,-_]*$/i, {
    message: GymsError.invalidAddress,
  })
  @Transform(({ value }) => value.trim())
  address: string;

  @ApiProperty({ example: 'example@gmail.com' })
  @MaxLength(255, { message: GymsError.invalidEmail })
  @Matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, {
    message: GymsError.invalidEmail,
  })
  @Transform(({ value }) => value.toLowerCase().trim())
  email: string;

  @ApiProperty({ example: '096972933' })
  @IsOptional()
  @MaxLength(9, { message: GymsError.invalidPhone })
  @MinLength(8, { message: GymsError.invalidPhone })
  @IsNumberString()
  @Matches(/^(2|3|4|5|6|7|8)[0-9]{7}$|^09[0-9]{7}$/, {
    message: GymsError.invalidPhone,
  })
  @Transform(({ value }) => (value ? value.trim() : ''))
  phone: string;

  @ApiProperty({ example: 'https://smartgym.com' })
  @IsOptional()
  @MaxLength(255, { message: GymsError.invalidWebsite })
  @Matches(/^(http|https):\/\/[a-z0-9\.-]+\.[a-z]{2,4}/i, {
    message: GymsError.invalidWebsite,
  })
  @Transform(({ value }) => (value ? value.trim().toLowerCase() : ''))
  website: string;

  @ApiProperty()
  @IsUUID()
  userId: string;
}
