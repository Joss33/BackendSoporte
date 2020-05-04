import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './interface/user.interface';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userMoodel: Model<User>) {}

  async getUsers(): Promise<User[]> {
    const users = await this.userMoodel.find();
    return users;
  }

  async getUser(userID: string): Promise<User> {
    const user = await this.userMoodel.findById(userID);
    return user;
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const user = new this.userMoodel(createUserDTO);
    return await user.save();
  }

  async updateUser(
    userID: string,
    createUserDTO: CreateUserDTO,
  ): Promise<User> {
    const updatedUser = await this.userMoodel.findByIdAndUpdate(
      userID,
      createUserDTO,
      { new: true },
    );
    return updatedUser;
  }

  async deleteUser(userID: string): Promise<User> {
    const deletedUser = await this.userMoodel.findByIdAndDelete(userID);
    return deletedUser;
  }
}
