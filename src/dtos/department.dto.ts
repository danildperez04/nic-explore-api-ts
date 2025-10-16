import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  rating: string;

  @IsString()
  @IsNotEmpty()
  imagePath: string;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;

  @IsNumber()
  @IsNotEmpty()
  latitude: number;
}



