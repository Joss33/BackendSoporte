import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Support } from './interface/support.interface';
import { CreateSupportDTO } from './dto/support.dto';

@Injectable()
export class SupportService {
  constructor(
    @InjectModel('Support') private readonly supportModel: Model<Support>,
  ) {}

  // CRUD Supports Start
  // /////////////////////////////////////////////

  async getSupports(): Promise<Support[]> {
    const supports = await this.supportModel.find();
    return supports;
  }

  async getSupport(supportID: string): Promise<Support> {
    const support = await this.supportModel.findById(supportID);
    return support;
  }

  async createSupport(createSupportDTO: CreateSupportDTO): Promise<Support> {
    const createSupport = new this.supportModel(createSupportDTO);
    return await createSupport.save();
  }

  async deleteSupport(supportID: string): Promise<Support> {
    const deleteSupport = await this.supportModel.findByIdAndDelete(supportID);
    return deleteSupport;
  }

  async updateSupport(
    supportID: string,
    createSupportDTO: CreateSupportDTO,
  ): Promise<Support> {
    const updateSupport = await this.supportModel.findByIdAndUpdate(
      supportID,
      createSupportDTO,
      { new: true },
    );
    return updateSupport;
  }
  // /////////////////////////////////////////////
  // CRUD Supports End
  async justClientID(clientID: string): Promise<string> {
    const justClientID = await this.supportModel.findById(clientID);
    return justClientID._id;
  }

  async newSupport(createSupportDTO: CreateSupportDTO): Promise<Support> {
    const newSupport = new this.supportModel(createSupportDTO);
    return newSupport;
  }
}
