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
import { CreateClientDTO } from './dto/client.dto';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Post('/create')
  async createPost(@Res() res, @Body() createClientDTO: CreateClientDTO) {
    const client = await this.clientService.createClient(createClientDTO);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Client successfully created', client });
  }

  @Get('/')
  async getClients(@Res() res) {
    const clients = await this.clientService.getClients();
    return res.status(HttpStatus.OK).json(clients);
  }

  @Get('/:clientID')
  async getClient(@Res() res, @Param('clientID') clientID) {
    try {
      const client = await this.clientService.getClient(clientID);
      return res.status(HttpStatus.OK).json(client);
    } catch (error) {
      return res
        .status(HttpStatus.FOUND)
        .json({ message: 'Client does not exists' });
    }
  }

  @Delete('/:clientID')
  async deleteClient(@Res() res, @Query('clientID') clientID) {
    try {
      const client = await this.clientService.deleteClient(clientID);
      return res.status(HttpStatus.OK).json(client);
    } catch (error) {
      return res
        .status(HttpStatus.FOUND)
        .json({ message: 'Client does not exists' });
    }
  }

  @Put('/update')
  async updateProduct(
    @Res() res,
    @Body() createClientDTO: CreateClientDTO,
    @Query('userID') clientID,
  ) {
    try {
      const updatedClient = await this.clientService.updateClient(
        clientID,
        createClientDTO,
      );
      return res.status(HttpStatus.OK).json({
        message: 'Client Updated Successfully',
        updatedClient,
      });
    } catch (error) {
      return res
        .status(HttpStatus.FOUND)
        .json({ message: 'Client does not exists' });
    }
  }
}
