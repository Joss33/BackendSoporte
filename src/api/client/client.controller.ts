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
import { CreateClientDTO } from './dto/client.dto';
import { ClientService } from './client.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Post('/create')
  async createPost(@Res() res, @Body() createClientDTO: CreateClientDTO) {
    const client = await this.clientService.createClient(createClientDTO);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Client successfully created', client });
  }
  // @UseGuards(AuthGuard('jwt'))
  @Get('/')
  async getClients(@Res() res) {
    const clients = await this.clientService.getClients();
    return res.status(HttpStatus.OK).json(clients);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get('/:clientID')
  async getClient(@Res() res, @Param('clientID') clientID) {
    try {
      const client = await this.clientService.getClient(clientID);
      return res.status(HttpStatus.OK).json(client);
    } catch (error) {
      return res
        .status(HttpStatus.FOUND)
        .json({ message: 'Client does not existss' });
    }
  }

  // @UseGuards(AuthGuard('jwt'))
  @Delete('/delete')
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

  // @UseGuards(AuthGuard('jwt'))
  @Put('/update')
  async updateProduct(
    @Res() res,
    @Body() createClientDTO: CreateClientDTO,
    @Query('clientID') clientID,
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
