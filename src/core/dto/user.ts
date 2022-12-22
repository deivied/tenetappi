import { IsString, IsNotEmpty, IsEmail, IsDate } from 'class-validator';
import { EGender } from 'src/frameworks/persistences/mongo/models';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  gender: EGender;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsDate()
  birthDate: Date;
}

export class UpdateUserDto extends CreateUserDto {}
