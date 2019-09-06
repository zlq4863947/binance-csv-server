import { Period } from '../types';
import { CsvService } from './csv.service';

describe('CsvService', () => {
  let csvService: CsvService;

  beforeAll(() => {
    csvService = new CsvService();
  });

  it('is not supported', async () => {
    const res = await csvService.getCsvData({ symbol: 'BTCUSDT', interval: Period.min5 });
    console.log(res);
  });
});
