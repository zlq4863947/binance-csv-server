import { Global, Module } from '@nestjs/common';

import { CsvModule } from './csv';

@Global()
@Module({
  imports: [CsvModule],
})
export class ApplicationModule {}
