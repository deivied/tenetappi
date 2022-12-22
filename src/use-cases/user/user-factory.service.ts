import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/core';
import { CreateUserDto, UpdateUserDto } from 'src/core/dto';
@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const newUser = new UserEntity();
    newUser.firstName = createUserDto.firstName;
    newUser.lastName = createUserDto.lastName;
    newUser.gender = createUserDto.gender;
    newUser.email = createUserDto.email;
    newUser.birthDate = createUserDto.birthDate;

    return newUser;
  }

  updateUser(updateUserDto: UpdateUserDto) {
    const updateUser = new UserEntity();
    updateUser.firstName = updateUserDto.firstName;
    updateUser.lastName = updateUserDto.lastName;
    updateUser.gender = updateUserDto.gender;
    updateUser.email = updateUserDto.email;
    updateUser.birthDate = updateUserDto.birthDate;
    return updateUser;
  }
}
