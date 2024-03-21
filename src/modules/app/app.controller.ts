import {Controller} from '@nestjs/common'
import {Get} from '@nestjs/common'
import {AppService} from './app.service'

@Controller('app')
export class AppController{
  constructor(private readonly appService: AppService) {}
  @Get('get')
  getMethod(): number {
    return this.appService.getMethod()
  }
}