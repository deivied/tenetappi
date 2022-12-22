import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { IDataServicesCrud, UserEntity } from 'src/core';
import { CreateUserDto, UpdateUserDto } from 'src/core/dto';
import { UserFactoryService } from './user-factory.service';

@Injectable()
export class UserUseCase {
  constructor(
    private dataServiceCrud: IDataServicesCrud,
    private userFactory: UserFactoryService,
  ) {}

  getAllUsers(): Promise<UserEntity[]> {
    return this.dataServiceCrud.users.getAll();
  }

  getUserById(id: any): Promise<UserEntity> {
    return this.dataServiceCrud.users.get(id);
  }

  createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = this.userFactory.createNewUser(createUserDto);
    return this.dataServiceCrud.users.create(user);
  }

  updateUser(userId: string, updateUser: UpdateUserDto): Promise<UserEntity>{
    const user = this.userFactory.updateUser(updateUser)
    return this.dataServiceCrud.users.update(userId, user)
  }
}
