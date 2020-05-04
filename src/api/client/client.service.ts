import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Client } from './interface/client.interface';
import { CreateClientDTO } from './dto/client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel('Client') private readonly clientModel: Model<Client>,
  ) {}

  //CRUD Clients Start
  // /////////////////////////////////////////////////////////////////////////////////////
  public async getClients(): Promise<Client[]> {
    const clients = await this.clientModel.find();
    return clients;
  }

  public async getClient(clientID: string): Promise<Client> {
    const client = await this.clientModel.findById(clientID);
    return client;
  }

  public async createClient(createClientDTO: CreateClientDTO): Promise<Client> {
    const client = new this.clientModel(createClientDTO);
    return client.save();
  }

  public async deleteClient(clientID: string): Promise<Client> {
    const client = await this.clientModel.findByIdAndDelete(clientID);
    return client;
  }

  public async updateClient(
    clientID: string,
    createClientDTO: CreateClientDTO,
  ): Promise<Client> {
    const client = await this.clientModel.findByIdAndUpdate(
      clientID,
      createClientDTO,
      { new: true },
    );
    return client;
  }
  // /////////////////////////////////////////////////////////////////////////////////////
  //CRUD Clients End
}
