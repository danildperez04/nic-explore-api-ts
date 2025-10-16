import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNumber()
  @IsNotEmpty()
  rating: number;

  @IsOptional()
  @IsString()
  imagePath?: string;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;

  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  departmentId: number;

  @IsOptional()
  @IsNumber()
  placeTypeId?: number;
}

export class UpdatePlaceDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsNumber()
  rating?: number;

  @IsOptional()
  @IsString()
  imagePath?: string;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  departmentId?: number;

  @IsOptional()
  @IsNumber()
  placeTypeId?: number;
}

export default CreatePlaceDto;
