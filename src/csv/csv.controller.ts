import { Controller, Get, Query } from '@nestjs/common';

import { Period } from '../types';
import { CsvService } from './csv.service';

@Controller('csv')
export class CsvController {
  constructor(private readonly csvService: CsvService) {}

  @Get()
  async getCsvDate(
    @Query('interval') interval: Period,
    @Query('startTime') startTime?: number,
    @Query('endTime') endTime?: number,
    @Query('limit') limit?: number,
  ) {
    return this.csvService.getCsvData({
      symbol: 'BTCUSDT',
      interval,
      startTime,
      endTime,
      limit,
    });
  }
}
