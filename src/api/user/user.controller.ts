import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  async createPost(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const user = await this.userService.createUser(createUserDTO);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'User successfully created', user });
  }

  @Get('/')
  async getUsers(@Res() res) {
    const users = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json({ users });
  }

  @Get('/:userID')
  async getUser(@Res() res, @Param('userID') userID) {
    try {
      const user = await this.userService.getUser(userID);
      return res.status(HttpStatus.OK).json(user);
    } catch (error) {
      return res
        .status(HttpStatus.FOUND)
        .json({ message: 'User does not exists' });
    }
  }

  @Delete('/:userID')
  async deleteUser(@Res() res, @Query('userID') userID) {
    try {
      const deletedUser = await this.userService.deleteUser(userID);
      return res.status(HttpStatus.OK).json(deletedUser);
    } catch (error) {
      return res
        .status(HttpStatus.FOUND)
        .json({ message: 'User does not exists' });
    }
  }
  @Put('/update')
  async updateProduct(
    @Res() res,
    @Body() createUserDTO: CreateUserDTO,
    @Query('userID') userID,
  ) {
    try {
      const updatedUser = await this.userService.updateUser(
        userID,
        createUserDTO,
      );
      return res.status(HttpStatus.OK).json({
        message: 'User Updated Successfully',
        updatedUser,
      });
    } catch (error) {
      return res
        .status(HttpStatus.FOUND)
        .json({ message: 'User does not exists' });
    }
  }
}
