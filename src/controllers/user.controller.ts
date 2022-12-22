import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/core/dto';
import { UserUseCase } from 'src/use-cases/user/user.use-case';

@Controller('users')
export class UsersController {
  constructor(private userUSeCase: UserUseCase) {}

  @Get()
  async getAll() {
    return this.userUSeCase.getAllUsers();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.userUSeCase.getUserById(id);
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userUSeCase.createUser(user);
  }

  @Put(':id')
  updateUser(@Param('id') userId: string, @Body() user: UpdateUserDto) {
    return this.userUSeCase.updateUser(userId, user);
  }
}
