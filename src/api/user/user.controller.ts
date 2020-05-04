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
  UseGuards,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/create')
  async createPost(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    const user = await this.userService.createUser(createUserDTO);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'User successfully created', user });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/')
  async getUsers(@Res() res) {
    const users = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json({ users });
  }

  @UseGuards(AuthGuard('jwt'))
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

  @UseGuards(AuthGuard('jwt'))
  @Delete('/delete')
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

  @UseGuards(AuthGuard('jwt'))
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
