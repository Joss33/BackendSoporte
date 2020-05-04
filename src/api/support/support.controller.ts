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
import { CreateSupportDTO } from './dto/support.dto';
import { SupportService } from './support.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('support')
export class SupportController {
  constructor(private supportService: SupportService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/create')
  async createPost(@Res() res, @Body() createSupportDTO: CreateSupportDTO) {
    const support = await this.supportService.createSupport(createSupportDTO);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Support successfully created', support });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/')
  async getSupports(@Res() res) {
    const supports = await this.supportService.getSupports();
    return res.status(HttpStatus.OK).json({ supports });
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:supportID')
  async getSupport(@Res() res, @Param('supportID') supportID) {
    try {
      const support = await this.supportService.getSupport(supportID);
      return res.status(HttpStatus.OK).json(support);
    } catch (error) {
      return res
        .status(HttpStatus.FOUND)
        .json({ message: 'Support does not exists' });
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('/delete')
  async deleteSupport(@Res() res, @Query('supportID') supportID) {
    try {
      const deleteSupport = await this.supportService.deleteSupport(supportID);
      return res.status(HttpStatus.OK).json(deleteSupport);
    } catch (error) {
      return res
        .status(HttpStatus.FOUND)
        .json({ message: 'Support does not exists' });
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('/update')
  async updateSupport(
    @Res() res,
    @Body() createSupportDTO: CreateSupportDTO,
    @Query('supportID') supportID,
  ) {
    try {
      const updateSupport = await this.supportService.updateSupport(
        supportID,
        createSupportDTO,
      );
      return res
        .status(HttpStatus.OK)
        .json({ message: 'Support Updated Successfully', updateSupport });
    } catch (error) {
      return res
        .status(HttpStatus.FOUND)
        .json({ message: 'Support does not exists' });
    }
  }

  // //////////////////////////////////////////////////////////////////////////////////////
  // @Post('/create/:clientID')
  // async searchSupportByClient(
  //   @Res() res,
  //   @Body() createSupportDTO: CreateSupportDTO,
  //   @Query('clientID') clientID,
  // ) {
  //   const createSupport = await this.supportService
  // }
}
