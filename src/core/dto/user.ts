import { IsString, IsNotEmpty, IsEmail, IsDate, IsEnum } from 'class-validator';
import { EGender } from 'src/frameworks/persistences/mongo/models';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({message: "firstName musn't be empty"})
  firstName: string;

  @IsString()
  @IsNotEmpty({message: "lastName musn't be empty"})
  lastName: string;

  @IsString()
  @IsNotEmpty({message: "gender musn't be empty"})
  @IsEnum(EGender)
  gender: EGender;

  @IsString()
  @IsNotEmpty({message: "email musn't be empty"})
  @IsEmail()
  email: string;

  @IsNotEmpty({message: "birthDate musn't be empty"})
  birthDate: Date;
}

export class UpdateUserDto extends CreateUserDto {}
