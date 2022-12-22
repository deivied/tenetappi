import { Injectable } from '@nestjs/common';
import { User } from 'src/core';
import { CreateUserDto, updateUserDto } from 'src/core/dto/user';

@Injectable()
export class AuthorFactoryService {
  createNewAuthor(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.firstName = createUserDto.firstName;
    newUser.lastName = createUserDto.lastName;
    newUser.email = createUserDto.email;
    newUser.birthDate = createUserDto.birthDate;

    return newUser;
  }

  updateAuthor(updateUserDto: updateUserDto) {
    const updateUser = new User();
    updateUser.firstName = updateUserDto.firstName;
    updateUser.lastName = updateUserDto.lastName;
    updateUser.email = updateUserDto.email;
    updateUser.birthDate = updateUserDto.birthDate;

    return updateUser;
  }
}
