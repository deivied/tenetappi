import { Injectable } from '@nestjs/common';
import { CreateUserDto, updateUserDto } from 'src/core/dto/user';
import { user } from 'src/core/entities/user';

@Injectable()
export class AuthorFactoryService {
  createNewAuthor(createUserDto: CreateUserDto) {
    const newUser = new user();
    newUser.firstName = createUserDto.firstName;
    newUser.lastName = createUserDto.lastName;
    newUser.email = createUserDto.email;
    newUser.birthDate = createUserDto.birthDate;

    return user;
  }

  updateAuthor(updateUserDto: updateUserDto) {
    const updateUser = new user();
    updateUser.firstName = updateUserDto.firstName;
    updateUser.lastName = updateUserDto.lastName;
    updateUser.email = updateUserDto.email;
    updateUser.birthDate = updateUserDto.birthDate;

    return user;
  }
}
