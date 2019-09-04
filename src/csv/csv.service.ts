import { Injectable } from '@nestjs/common';
import Axios, { AxiosRequestConfig } from 'axios';
import { stringify } from 'qs';

import { Period } from '../types';

import moment = require('moment');

export interface GetCsvDataOptions {
  symbol: string;
  interval: Period;
  startTime?: number;
  endTime?: number;
  limit?: number;
}

@Injectable()
export class CsvService {
  async getCsvData(params: GetCsvDataOptions): Promise<string> {
    const url = 'https://api.binance.com/api/v1/klines';
    const query = Object.keys(params).length !== 0 ? `?${stringify(params)}` : '';
    const request: AxiosRequestConfig = {
      method: 'GET',
    };

    const response = await Axios(`${url}${query}`, request);
    let csvList: string[][] = [];
    if (response && response.data && (response.data as any[]).length > 0) {
      csvList = (response.data as any[]).map((line) => {
        const dateTime = moment(line[6]).utcOffset(8);

        return [dateTime.format('YYYY.MM.DD'), dateTime.format('Hmmss'), line[1], line[2], line[3], line[4], line[5]];
      });
    }

    return csvList.reduce((text: string, line: string[]) => `${text}${line.join(',')}\n`, '');
  }
}
