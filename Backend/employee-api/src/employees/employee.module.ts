import { Module } from '@nestjs/common';
import { CsvModule } from 'nest-csv-parser';
import { EmpoloyeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

@Module({
  imports: [CsvModule],
  controllers: [EmpoloyeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
