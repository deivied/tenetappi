import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { IDataServicesCrud } from 'src/core';
import { CreateUserDto, UpdateUserDto } from 'src/core/dto';
import { Users } from 'src/frameworks/persistences/mongo/models';
import { UserFactoryService } from './user-factory.service';

@Injectable()
export class UserUseCase {
  constructor(
    private dataServiceCrud: IDataServicesCrud,
    private userFactory: UserFactoryService,
  ) {}

  getAllUsers(): Promise<Users[]> {
    return this.dataServiceCrud.user.getAll();
  }

  getUserById(id: any): Promise<Users> {
    return this.dataServiceCrud.user.get(id);
  }

  createUser(createUserDto: CreateUserDto): Promise<Users> {
    const user = this.userFactory.createNewUser(createUserDto);
    return this.dataServiceCrud.user.create(user);
  }

  updateUser(userId: string, updateUser: UpdateUserDto): Promise<Users>{
    const user = this.userFactory.updateUser(updateUser)
    return this.dataServiceCrud.user.update(userId, user)
  }
}
